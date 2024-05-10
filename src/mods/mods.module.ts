import { Module } from '@nestjs/common';
import { ModsController } from './mods.controller';
import { ModsService } from './mods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mod } from './mods.entity';
import { GamesService } from '../games/games.service';
import { Game } from '../games/games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mod]), TypeOrmModule.forFeature([Game])],
  controllers: [ModsController],
  providers: [ModsService, GamesService],
})
export class ModsModule {}
