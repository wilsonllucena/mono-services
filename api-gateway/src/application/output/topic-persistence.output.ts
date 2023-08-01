import { SubscriberDto } from '../dtos/subscriber.dto';
import { RecordMetadata } from 'kafkajs';

export interface TopicPersistenceOutputport {
  publishMessage(message: SubscriberDto): Promise<RecordMetadata[]>;
}
