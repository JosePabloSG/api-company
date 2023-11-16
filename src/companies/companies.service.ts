import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CompaniesService {

  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) { }
  create(createCompanyDto: CreateCompanyDto) {
    const addedCompany = this.companyRepository.create(createCompanyDto);
    this.companyRepository.save(addedCompany);
    return addedCompany;
  }

  findAll() {
    return this.companyRepository.find({ relations: ['galleries', 'service', 'event'] });
  }

  async findOne(id: number) {
    const company = await this.companyRepository
      .createQueryBuilder('company')
      .leftJoinAndSelect('company.galleries', 'galleries')
      .leftJoinAndSelect('company.service', 'service')
      .leftJoinAndSelect('company.event', 'event')
      .where('company.id = :id', { id })
      .getOne();

    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }

    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const existingCompany = await this.companyRepository.findOneBy({ id });

    if (!existingCompany) {
      throw new Error(`Company with id ${id} not found`);
    }
    if (updateCompanyDto.paragraphHero) {
      existingCompany.paragraphHero = updateCompanyDto.paragraphHero;
    }
    const updatedCompany = await this.companyRepository.save(existingCompany);
    return updatedCompany;
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}

