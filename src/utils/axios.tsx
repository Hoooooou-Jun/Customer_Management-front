import axios from 'axios';
import config from '../../config/default';

export const request = axios.create({ baseURL: config.DOMAIN })