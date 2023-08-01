import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { Inject, Injectable } from '@nestjs/common';
import { TopicPersistenceOutputport } from '../../application/output/topic-persistence.output';
import { SubscriberDto } from '../../application/dtos/subscriber.dto';
import { RecordMetadata } from 'kafkajs';

@Injectable()
export class TopicAdapter implements TopicPersistenceOutputport {
  constructor(@Inject('KAFKA_PRODUCER') private readonly producer: Producer) {}

  async publishMessage(subcriber: SubscriberDto): Promise<RecordMetadata[]> {
    return await this.producer.send({
      topic: 'create-subscriber',
      messages: [
        {
          key: 'create-subscriber',
          value: JSON.stringify(subcriber),
        },
      ],
    });
  }
}
