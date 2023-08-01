import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { SubscriberDto } from '../../application/dtos/subscriber.dto';
import { CreateSubscriberUseCase } from '../../application/input/create-subscriber.usecase';

@Controller('subscriber')
export class ApiController {
  constructor(
    @Inject('CREATE_SUBSCRIBER_USECASE')
    private readonly createSubscriber: CreateSubscriberUseCase,
  ) {}
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() data: SubscriberDto) {
    return this.createSubscriber.execute(data);
  }
}
