
import App from './app';
import HelloController from './resources/helloworld/helloworld.controller';
import dotenv from 'dotenv';
dotenv.config();
const port:number = process.env.PORT?parseInt(process.env.PORT.toString()):3000;

const app = new App(
  [new HelloController()],
  port,
);

app.listen();