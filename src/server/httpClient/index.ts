import axios from 'axios';
import { env } from '../../app/config/env';

const httpClient  = axios.create({
  baseURL: 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${env.API_TOKEN}`,
    'User-Agent': 'Aplicação matheusdias.front96@gmail.com'
  }
});

export default httpClient;
