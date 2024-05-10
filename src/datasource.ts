import { DataSource, DataSourceOptions } from 'typeorm';
import { Mod } from './mods/mods.entity';
import { Game } from './games/games.entity';

// kinda absolete after new config
export const options: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest',
  password: 'nestpassword',
  database: 'nestMods',
  entities: [Mod, Game],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default new DataSource(options);
