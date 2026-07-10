import { NestFactory } from '@nestjs/core';
import { AppModule } from './events/events.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
  });
  const port = process.env.DB_PORT || 5432;
  await app.listen(port);
  console.log(`App is running on:${port}`)
}
bootstrap();
