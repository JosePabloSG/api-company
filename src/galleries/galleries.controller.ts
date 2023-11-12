import { Controller, Get,Put, Body, Param, Delete } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { UpdateGalleriesDto } from './dto/update-gallery.dto';


@Controller('galleries')
export class GalleriesController {
  constructor(private readonly galleriesService: GalleriesService) {}

  @Get()
  findAll() {
    return this.galleriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleriesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGalleriesDto: UpdateGalleriesDto)  {
    return this.galleriesService.update(+id, updateGalleriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleriesService.remove(+id);
  }
}
