import { Controller, Get, Param, Res, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBasicAuth } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiBasicAuth("access-token")
  getHello(): object {
    return this.appService.getHello();
  }

  @Get("files/:fileName")
  seeUploadedFile(@Param("fileName") fileName: string, @Res() res) {
    return res.sendFile(fileName, { root: "./uploads" });
  }
}
