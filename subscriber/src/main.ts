import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9093'],
      },
      consumer: {
        groupId: 'subscriber-consumer',
      },
    },
  });
  logger.log('Conectando ao microserviço subscriber ');
  await app.startAllMicroservices();
  logger.log('Microserviço subscriber conectado');
  await app.listen(3001);
}
bootstrap();
