import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModsModule } from './mods/mods.module';
import { Mod } from './mods/mods.entity';
import { GamesModule } from './games/games.module';
import { Game } from './games/games.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'nestpassword',
      database: 'nestMods',
      entities: [Mod, Game],
      synchronize: false,
    }),
    ModsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
