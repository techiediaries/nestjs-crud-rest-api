import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';

describe('Contacts Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ContactsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ContactsController = module.get<ContactsController>(ContactsController);
    expect(controller).toBeDefined();
  });
});
