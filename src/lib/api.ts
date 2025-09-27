import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next/types';
import Cookies from 'universal-cookie';

import { getToken } from '@/lib/cookies';
import baseURL from '@/lib/url';

import { UninterceptedApiError } from '@/types/api';
const context = <GetServerSidePropsContext>{};

// use normalized baseURL from src/lib/url.ts

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Create a separate instance for file uploads that handles CORS better
export const uploadApi = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    // Don't set default Content-Type for uploads
  },
});

api.defaults.withCredentials = false;
const isBrowser = typeof window !== 'undefined';

api.interceptors.request.use(function (config) {
  // console.log('💡 Request URL:', `${config.baseURL ?? ''}${config.url ?? ''}`)
  // const token = getToken();
  // console.log('💡 token used in request:', token);
  if (config.headers) {
    let token: string | undefined;

    if (!isBrowser) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

      const cookies = new Cookies(context.req?.headers.cookie);
      token = cookies.get(''); // Change with your token name
    } else {
      token = getToken();
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    // console.log('💡 Authorization header:', config.headers?.Authorization)
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);

// Add the same interceptors to uploadApi
uploadApi.interceptors.request.use(function (config) {
  if (config.headers) {
    let token: string | undefined;

    if (!isBrowser) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

      const cookies = new Cookies(context.req?.headers.cookie);
      token = cookies.get('');  // Change with your token name
    } else { 
      token = getToken();
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

uploadApi.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);

export default api;
