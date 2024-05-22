import { Injectable } from '@nestjs/common';
import { CreateModDto, FindModDto, UpdateModDto } from './interfaces/mods.dto';
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

  async update(dto: UpdateModDto) {
    const game = await this.gameRepository.findOne({
      where: { id: dto.gameID },
    });
    return this.modRepository.update(
      { id: dto.id },
      {
        name: dto.name,
        category: dto.category,
        description: dto.description,
        gameID: game,
        userID: dto.userID,
      },
    );
  }

  async delete(dto: FindModDto) {
    return this.modRepository.delete({ id: dto.id });
  }
}
