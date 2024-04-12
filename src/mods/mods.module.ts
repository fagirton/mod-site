import { Module } from '@nestjs/common';
import { ModsController } from './mods.controller';
import { ModsService } from './mods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mod } from './mods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mod])],
  controllers: [ModsController],
  providers: [ModsService],
})
export class ModsModule {}
