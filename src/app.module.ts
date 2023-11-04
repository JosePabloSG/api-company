import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { ServicesModule } from './services/services.module';
import { EventsModule } from './events/events.module';
import { GalleriesModule } from './galleries/galleries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/entities/company.entity';
import { Event } from './events/entities/event.entity';
import { Service } from './services/entities/service.entity';
import { Gallery } from './galleries/entities/gallery.entity';

@Module({
  imports: [ CompaniesModule, EventsModule, ServicesModule, GalleriesModule, 
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'company',
        entities: [Company, Service, Event, Gallery],
        autoLoadEntities: true,
        synchronize: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
