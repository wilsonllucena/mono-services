import { SubscriberDto } from '../dtos/subscriber.dto';
import { RecordMetadataEntity } from '../../domain/record-topic.entity';

export interface TopicPersistenceOutputport {
  publishMessage(message: SubscriberDto): Promise<RecordMetadataEntity[]>;
}
