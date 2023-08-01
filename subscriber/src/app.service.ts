import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from './models/subscriber.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Subscriber.name)
    private readonly subscriberModel: Model<Subscriber>,
  ) {}

  execute(subscriber: any): Promise<Subscriber> {
    const createdSubscriber = new this.subscriberModel(subscriber);
    return createdSubscriber.save();
  }
}
