const devEnv = 'dev'; // dev for development and prod for production

export const SERVERURL: string = devEnv === 'dev' ? 'https://reqres.in/api' : 'http://localhost:3000/prod';
