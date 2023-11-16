import { Controller, Get, Body, Param, Patch } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('api/companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id') 
  updatePatch(@Param('id') id: string, @Body() updateCompaniesDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompaniesDto);
  }
}

