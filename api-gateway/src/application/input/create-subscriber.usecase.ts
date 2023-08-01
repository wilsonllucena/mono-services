import { SubscriberDto } from '../dtos/subscriber.dto';

export interface CreateSubscriberUseCase {
  execute(subscriberDto: SubscriberDto): void;
}
