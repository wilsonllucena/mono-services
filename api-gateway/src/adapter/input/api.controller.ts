import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiService } from '../../api.service';
import { SubscriberDto } from '../../application/dtos/subscriber.dto';
import { RecordMetadata } from 'kafkajs';

@Controller('subscriber')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() data: SubscriberDto): Promise<RecordMetadata[]> {
    return this.apiService.createSubscriber(data);
  }
}
