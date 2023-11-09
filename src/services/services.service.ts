import { Injectable } from '@nestjs/common';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {

  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>){}

  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOneBy({id});
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    var updatedServiceDto = await this.serviceRepository.update({id},updateServiceDto);
    return updateServiceDto;
  }
  

  remove(id: number) {
    return this.serviceRepository.delete(id);
  }

}