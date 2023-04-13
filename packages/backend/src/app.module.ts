import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './Example/example.module';

@Module({
  imports: [
    ExampleModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
    }),
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
