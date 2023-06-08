import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import {ClientesService} from "./services/clientes.service";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ClientesService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(appController().createUser()).toBe('Hello World!');
    });
  });
});
