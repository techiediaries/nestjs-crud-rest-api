import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
