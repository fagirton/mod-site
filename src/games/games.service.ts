import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './games.entity';
import { Repository } from 'typeorm';
import { CreateGameDto } from './interfaces/games.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private modRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    const mods = await this.modRepository.find();
    if (mods.length !== 0) {
      return mods;
    }
  }

  createOne(dto: CreateGameDto) {
    const game = this.modRepository.create({
      name: dto.name,
      desc: dto.desc,
    });
    return this.modRepository.save(game);
  }
}
