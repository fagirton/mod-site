import { Controller, Get, Post, Body } from '@nestjs/common';
import { ModsService } from './mods.service';
import { CreateModDto } from './interfaces/mods.dto';
import { Mod } from './mods.entity';

@Controller('mods')
export class ModsController {
  constructor(private readonly modsService: ModsService) {}

  @Get()
  async findAll(): Promise<Mod[]> {
    return await this.modsService.findAll();
  }

  @Post()
  create(
    @Body()
    createModDto: CreateModDto,
  ) {
    return this.modsService.createOne(createModDto);
  }
}
