
import { Injectable } from '@nestjs/common';
import { CreateGalleriesDto } from './dto/create-gallery.dto';
import { UpdateGalleriesDto } from './dto/update-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galleries } from './entities/gallery.entity';


@Injectable()
export class GalleriesService {

  constructor(
    @InjectRepository(Galleries)
    private GalleriesRepository: Repository<Galleries>
  ){}
  
  create(createGalleryDto: CreateGalleriesDto) {
    const addedGalleries = this.GalleriesRepository.create(createGalleryDto);
    this.GalleriesRepository.save(addedGalleries);
    return addedGalleries;
  }

  findAll() {
    return this.GalleriesRepository.find();
  }

  findOne(id: number) {
    return this.GalleriesRepository.findOneBy({id})
  }

  async update(id: number, updateGalleriesDto: UpdateGalleriesDto)  {
    const updatedGallery = await this.GalleriesRepository.update({id},updateGalleriesDto);
    return updatedGallery;
  }

  remove(id: number) {
    return this.GalleriesRepository.delete(id);
  }
}


