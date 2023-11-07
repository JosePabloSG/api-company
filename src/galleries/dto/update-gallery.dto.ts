import { PartialType } from '@nestjs/mapped-types';
import { CreateGalleriesDto } from './create-gallery.dto';

export class UpdateGalleriesDto extends PartialType(CreateGalleriesDto) {}
