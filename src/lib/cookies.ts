import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get(''); // Change with your token name

export const setToken = (token: string) => {
  cookies.set('', token, { path: '/' }); // Change with your token name
};

export const removeToken = () => cookies.remove('', { path: '/' }); // Change with your token name
