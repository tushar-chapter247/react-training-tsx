import axios from 'axios';
const devEnv: string = 'prod'; // dev for development and prod for production
const SERVERURL: string =
  devEnv === 'dev' ? 'https://reqres.in/api' : 'https://randomuser.me/api';

export default axios.create({
  baseURL: SERVERURL,
});
