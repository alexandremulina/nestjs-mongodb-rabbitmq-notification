import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // app.enableCors({ origin: 'http://localhost:4002' });
  // await app.listen(4001);
  const microservice = await app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://xlexssed:jrVpDLQi5xqww10gldxVh5S_CEpeR455@woodpecker.rmq.cloudamqp.com/xlexssed',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(4001);
}
bootstrap();
