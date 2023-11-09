import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
    ){}


  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: number) {
    return this.eventRepository.findOneBy({id});
  }

  create(createEventDto: CreateEventDto) {
    // eslint-disable-next-line no-var
    var addedEvent = this.eventRepository.create(createEventDto);
    this.eventRepository.save(addedEvent);
    return addedEvent;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
   // eslint-disable-next-line no-var
   var updateEvent = await this.eventRepository.update({id}, updateEventDto);
    return updateEvent;
  }

  remove(id: number) {
    return this.eventRepository.delete(id);
  }
}
