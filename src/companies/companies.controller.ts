import { Controller, Get, Put, Body, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { UpdateCompanyDto } from './dto/update-company.dto'; // Asegúrate de importar el DTO correcto

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

  @Put(':id') // Ruta para el método PUT
  update(@Param('id') id: string, @Body() updateCompaniesDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompaniesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}


