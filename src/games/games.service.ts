import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './games.entity';
import { Repository } from 'typeorm';
import {
  CreateGameDto,
  FindGameDto,
  UpdateGameDto,
} from './interfaces/games.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    const mods = await this.gameRepository.find();
    if (mods.length !== 0) {
      return mods;
    }
  }

  createOne(dto: CreateGameDto) {
    const game = this.gameRepository.create({
      name: dto.name,
      desc: dto.desc,
    });
    return this.gameRepository.save(game);
  }

  update(dto: UpdateGameDto) {
    return this.gameRepository.update(
      { id: dto.id },
      { name: dto.name, desc: dto.desc },
    );
  }

  delete(dto: FindGameDto) {
    return this.gameRepository.delete({ id: dto.id });
  }
}
