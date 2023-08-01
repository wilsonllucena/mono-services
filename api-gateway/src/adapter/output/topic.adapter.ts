import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { Inject, Injectable } from '@nestjs/common';
import { TopicPersistenceOutputport } from '../../application/output/topic-persistence.output';
import { SubscriberDto } from '../../application/dtos/subscriber.dto';
import { RecordMetadataEntity } from '../../domain/record-topic.entity';
import { RecordMetadata } from 'kafkajs';

@Injectable()
export class TopicAdapter implements TopicPersistenceOutputport {
  constructor(@Inject('KAFKA_PRODUCER') private readonly producer: Producer) {}

  async publishMessage(
    subcriber: SubscriberDto,
  ): Promise<RecordMetadataEntity[]> {
    const results = await this.producer.send({
      topic: 'create-subscriber',
      messages: [
        {
          key: 'create-subscriber',
          value: JSON.stringify(subcriber),
        },
      ],
    });

    return results.map((record: RecordMetadata) => {
      return new RecordMetadataEntity(
        record.topicName,
        record.partition,
        record.errorCode,
        record.baseOffset,
        record.logAppendTime,
        record.logStartOffset,
      );
    });
  }
}
