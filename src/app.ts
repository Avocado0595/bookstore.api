import express from 'express';
import Controller from './utils/interface/controller.interface';

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: Array<Controller>, port:number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(express.json());
  }
 
  private initializeControllers(controllers: Array<Controller>) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;