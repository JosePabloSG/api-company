import { Module } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { GalleriesController } from './galleries.controller';
import { Galleries } from './entities/gallery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Galleries])],
  controllers: [GalleriesController],
  providers: [GalleriesService],
})
export class GalleriesModule {}
