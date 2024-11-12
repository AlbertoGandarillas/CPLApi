import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Server } from 'http';
import { NestExpressApplication } from '@nestjs/platform-express';

let app: NestExpressApplication;
let server: Server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix('api');
  // const config = new DocumentBuilder()
  //   .setTitle('CPL API')
  //   .setDescription(
  //     'API documentation for CPL College Landing pages and CPL Dashboard projects',
  //   )
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3099);
}
bootstrap();
