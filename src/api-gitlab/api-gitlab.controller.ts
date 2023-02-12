import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query, RawBodyRequest, Req, Res,
  UnprocessableEntityException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiGitlabService } from "./api-gitlab.service";


@ApiTags('console')
@Controller('api/')

export class ApiGitlabController {
  constructor(private readonly _service: ApiGitlabService) {}

  @ApiOperation({ summary: 'PSLoadSheddingUtilityList' })
  @Post('/gitlab')
  async loadSheddingUtilityList(@Body() body: any, @Res() res,@Req() req: RawBodyRequest<Request> ) {
    return this._service.getHello(res, req);
  }


}
