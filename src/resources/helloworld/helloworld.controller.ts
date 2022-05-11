import { NextFunction, Router, Request, Response } from "express";
import HttpException from "../../utils/exception/http.exception";
import Controller from "../../utils/interface/controller.interface";
import HelloService from "./helloworld.service";
class HelloController implements Controller{
    public path = '/';
    public router =  Router();
    private HelloService = new HelloService();
    constructor() {
        this.initialRoutes();
    }
    private initialRoutes():void{
        this.router.get(this.path,this.read);
    }

    
    private read = async (req: Request, res: Response, next:NextFunction):Promise<Response|void>=>{
        try{
            const result = await this.HelloService.read();
            res.status(201).json(result);
        }
        catch(error: Error|unknown){
            next(new HttpException(400, (<Error>error).message));
        }
    }

}

export default HelloController;