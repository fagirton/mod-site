import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateGameDto } from './interfaces/games.dto';
import { Game } from './games.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return await this.gameService.findAll();
  }

  @Post()
  create(
    @Body()
    createGameDto: CreateGameDto,
  ) {
    return this.gameService.createOne(createGameDto);
  }
}
