import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ModsService } from './mods.service';
import { CreateModDto, FindModDto, UpdateModDto } from './interfaces/mods.dto';
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

  @Put()
  update(@Body() updateModDto: UpdateModDto) {
    return this.modsService.update(updateModDto);
  }

  @Delete()
  delete(@Body() findModDto: FindModDto) {
    return this.modsService.delete(findModDto);
  }
}
