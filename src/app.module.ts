import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModsModule } from './mods/mods.module';
import { GamesModule } from './games/games.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('SERVER_DB_HOST'),
        port: configService.get('SERVER_DB_PORT'),
        username: configService.get('SERVER_USER'),
        password: configService.get('SERVER_PASSWORD'),
        database: configService.get('SERVER_DB'),
        entities: [],
        autoLoadEntities: true,
      }),
    }),
    ServeStaticModule.forRoot({
      serveRoot: "/api/media",
      rootPath: join(__dirname, '..', 'client'),
    }),
    ModsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
