import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UnprocessableEntityException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiGitlabService } from "./api-gitlab.service";


@ApiTags('console')
@Controller('api/v1/console')

export class ApiGitlabController {
  constructor(private readonly _service: ApiGitlabService) {}

  @ApiOperation({ summary: 'PSLoadSheddingUtilityList' })
  @Get('/load-shedding-utility-list')
  async loadSheddingUtilityList(@Body() body: any) {
    return this._service.getHello();
  }


}
