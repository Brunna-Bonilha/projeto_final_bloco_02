import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'farmacia_bloco02',
      autoLoadEntities: true,
      synchronize: true,
      imports: [CategoriaModule],
    }),
  ], 
})
export class AppModule {}
