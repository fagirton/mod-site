import { Injectable } from '@nestjs/common';
import { CreateModDto, UpdateModDto } from './interfaces/mods.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mod } from './mods.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModsService {
  constructor(@InjectRepository(Mod) private modRepository: Repository<Mod>) {}

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

  createOne(dto: CreateModDto) {
    const mod = this.modRepository.create({
      name: dto.name,
      description: dto.description,
      category: dto.category,
      gameID: dto.gameID,
      userID: dto.userID,
    });
    return this.modRepository.save(mod);
  }
}
