import { Controller } from "@nestjs/common";
import { AppService } from "./events.service";

@Controller()
export class AppController{
    constructor(private readonly appService: AppService) {}
}