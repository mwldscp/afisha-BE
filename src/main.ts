import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);

  const port = process.env.DB_PORT || 5432;
  await app.listen(port);
  console.log(`App is running on:${port}`)
}
bootstrap();
