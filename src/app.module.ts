import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModsModule } from './mods/mods.module';
import { Mod } from './mods/mods.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'nestpassword',
      database: 'nestMods',
      entities: [Mod],
      synchronize: false,
    }),
    ModsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
