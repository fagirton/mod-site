import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Mod } from './mods/mods.entity';
import { Game } from './games/games.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('SERVER_DB_HOST'),
  port: configService.get('SERVER_DB_PORT'),
  username: configService.get('SERVER_USER'),
  password: configService.get('SERVER_PASSWORD'),
  database: configService.get('SERVER_DB'),
  entities: [Mod, Game],
  migrations: ['./src/migrations/*.ts'],
});
