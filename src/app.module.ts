import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiGitlabModule } from "./api-gitlab/api-gitlab.module";

@Module({
  imports: [ApiGitlabModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
