import { Inject, Injectable } from '@nestjs/common';
import { SubscriberDto } from './dtos/subscriber.dto';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { RecordMetadata } from 'kafkajs';

@Injectable()
export class ApiService {
  constructor(@Inject('KAFKA_PRODUCER') private readonly producer: Producer) {}
  async createSubscriber(subscriber: SubscriberDto): Promise<RecordMetadata[]> {
    return await this.producer.send({
      topic: 'create-subscriber',
      messages: [
        {
          key: 'create-subscriber',
          value: JSON.stringify(subscriber),
        },
      ],
    });
  }
}
