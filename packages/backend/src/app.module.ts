import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './Question/question.module';
import { CategoryModule } from './Category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
    }),
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    }),
    QuestionModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
