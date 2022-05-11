import express from 'express';
import AppDataSource from './database/datasource';
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
 
  private async initializeMiddlewares() {
    this.app.use(express.json());
    try{
        await AppDataSource.initialize();
        console.log('connect db ok!');

    }
    catch(e:unknown){
        console.log('connect db err: '+ (e as Error).message);
    }
    
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