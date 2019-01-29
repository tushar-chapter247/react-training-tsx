import axios from 'axios';
const devEnv = 'dev'; // dev for development and prod for production
const SERVERURL: string =
  devEnv === 'dev' ? 'https://reqres.in/api' : 'http://localhost:3000/prod';

export default axios.create({
  baseURL: SERVERURL,
});
