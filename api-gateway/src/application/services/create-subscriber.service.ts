import { Inject, Injectable } from '@nestjs/common';
import { SubscriberDto } from '../dtos/subscriber.dto';
import { TopicPersistenceOutputport } from '../output/topic-persistence.output';
import { CreateSubscriberUseCase } from '../input/create-subscriber.usecase';
import { RecordMetadataEntity } from '../../domain/record-topic.entity';

@Injectable()
export class CreateSubscriberService implements CreateSubscriberUseCase {
  constructor(
    @Inject('TOPIC_PERSISTENCE_OUTPUTPORT')
    private readonly topicAdapterOutputPort: TopicPersistenceOutputport,
  ) {}
  async execute(subscriber: SubscriberDto): Promise<RecordMetadataEntity[]> {
    return await this.topicAdapterOutputPort.publishMessage(subscriber);
  }
}
