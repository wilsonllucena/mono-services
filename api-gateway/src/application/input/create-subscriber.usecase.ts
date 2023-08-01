import { SubscriberDto } from '../dtos/subscriber.dto';
import { RecordMetadataEntity } from '../../domain/record-topic.entity';

export interface CreateSubscriberUseCase {
  execute(subscriberDto: SubscriberDto): Promise<RecordMetadataEntity[]>;
}
