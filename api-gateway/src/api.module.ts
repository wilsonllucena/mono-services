import { Module } from '@nestjs/common';
import { ApiController } from './adapter/input/api.controller';
import { ApiService } from './api.service';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import {TopicAdapter} from "./adapter/output/topic.adapter";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['kafka:9093'],
          },
        },
      },
    ]),
  ],
  controllers: [ApiController],
  providers: [
    ApiService,
    {
      provide: 'TOPIC_PERSISTENCE_OUTPUTPORT',
      useClass: TopicAdapter,
    },
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka) => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class ApiModule {}
