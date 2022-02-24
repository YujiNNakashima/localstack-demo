import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dropAndCreateDynamoDBTable from './db/client'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  dropAndCreateDynamoDBTable()

}
bootstrap();
