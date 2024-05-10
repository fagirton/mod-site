import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModsModule } from './mods/mods.module';
import { GamesModule } from './games/games.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('SERVER_HOST'),
        port: configService.get('SERVER_PORT'),
        username: configService.get('SERVER_USER'),
        password: configService.get('SERVER_PASSWORD'),
        database: configService.get('SERVER_DB'),
        entities: [],
        autoLoadEntities: true,
      }),
    }),
    ModsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
