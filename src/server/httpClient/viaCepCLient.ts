import axios from 'axios';

const viaCepClient = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default viaCepClient;
