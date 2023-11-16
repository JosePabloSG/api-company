import { Injectable } from '@nestjs/common';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {

  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>){}

  create(createServiceDto: CreateServiceDto) {
    const addedServices = this.serviceRepository.create(createServiceDto);
    this.serviceRepository.save(addedServices);
    return addedServices;
  }

  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOneBy({id})
  }

  async update(id: number, updateServiceDto: UpdateServiceDto)  {
    const updatedService = await this.serviceRepository.update({id},updateServiceDto);
    return updatedService;
  }
  

  remove(id: number) {
    return this.serviceRepository.delete(id);
  }

}