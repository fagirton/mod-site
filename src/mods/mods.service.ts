import { Injectable } from '@nestjs/common';
import { CreateModDto } from './interfaces/mods.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mod } from './mods.entity';
import { Repository } from 'typeorm';
import { Game } from 'src/games/games.entity';

@Injectable()
export class ModsService {
  constructor(
    @InjectRepository(Mod) private modRepository: Repository<Mod>,
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Mod[]> {
    const mods = await this.modRepository.find({
      relations: {
        gameID: true,
      },
    });
    if (mods.length !== 0) {
      return mods;
    }
  }

  async createOne(dto: CreateModDto) {
    const game = await this.gameRepository.findOne({
      where: { id: dto.gameID },
    });
    const mod = this.modRepository.create({
      name: dto.name,
      description: dto.description,
      category: dto.category,
      gameID: game,
      userID: dto.userID,
    });
    return this.modRepository.save(mod);
  }
}
