import axios from 'config';
// temporary user api
const options = {
    headers: {'X-CMC_PRO_API_KEY': '9646dd91-d621-4943-9db5-f6c5ee352304',
    'Access-Control-Allow-Origin' : '*'}
  };
export const getData = () => axios.get(`http://68.183.87.38:3009/api/coin/exchangeInfo`);


// export const getData = () => axios.post(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`, );
export const signup = (body) => axios.post(`/auth/signup`, body);

