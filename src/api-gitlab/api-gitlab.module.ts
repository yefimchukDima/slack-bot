import { Module, UnprocessableEntityException } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { ApiGitlabController } from './api-gitlab.controller';
import { ApiGitlabService } from './api-gitlab.service';

@Module({
  controllers: [ApiGitlabController],
  providers: [ApiGitlabService],
  imports: [
  ],
})
export class ApiGitlabModule {}
