import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";
const log = new Logger('main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Powerstar API').setVersion('1.0').build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, doc);
  await app.listen(8080, );
  log.log(`Listening :${8080}`);
}
bootstrap();
