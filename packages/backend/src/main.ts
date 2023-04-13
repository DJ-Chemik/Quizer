import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const BACKEND_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(BACKEND_PORT);
}
bootstrap();
