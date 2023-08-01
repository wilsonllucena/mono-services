import { Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @Post()
  @MessagePattern('create-subscriber')
  create(@Payload() message: KafkaMessage) {
    this.logger.log(`Received message: ${JSON.stringify(message)}`);

    this.appService.execute(message);
  }
}
