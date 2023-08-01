import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { ApiService } from './api.service';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { RecordMetadata } from 'kafkajs';
import { Response } from 'express';

@Controller('subscriber')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    @Inject('KAFKA_PRODUCER') private readonly producer: Producer,
  ) {}

  @Post()
  create(
    @Body() data: any,
    @Res() res: Response,
  ): Promise<Response<RecordMetadata[]>> {
    const response = this.producer.send({
      topic: 'create-subscriber',
      messages: [
        {
          key: 'create-subscriber',
          value: JSON.stringify(data),
        },
      ],
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.status(201).json(response);
  }
}
