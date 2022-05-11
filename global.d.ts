declare 
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT: number;
        DB_PASSWORD: string,
        DB_USER: string,
        DB_PATH: string,
        JWT_SECRET: string
      }
  }