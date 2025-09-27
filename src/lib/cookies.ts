import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('conation');

export const setToken = (token: string) => {
  cookies.set('conation', token, { path: '/' });
};

export const removeToken = () => cookies.remove('conation', { path: '/' });
