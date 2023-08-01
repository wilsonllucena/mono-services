import { Inject, Injectable } from '@nestjs/common';
import { SubscriberDto } from './application/dtos/subscriber.dto';
import { RecordMetadata } from 'kafkajs';
import { TopicPersistenceOutputport } from './application/output/topic-persistence.output';

@Injectable()
export class ApiService {
  constructor(
    @Inject('TOPIC_PERSISTENCE_OUTPUTPORT')
    private readonly topicAdapterOutputPort: TopicPersistenceOutputport,
  ) {}
  async createSubscriber(subscriber: SubscriberDto): Promise<RecordMetadata[]> {
    return await this.topicAdapterOutputPort.publishMessage(subscriber);
  }
}
