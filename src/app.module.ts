import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModsModule } from './mods/mods.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'nestpassword',
      database: 'nestMods',
      entities: [],
      synchronize: true,
    }),
    ModsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
