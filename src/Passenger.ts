import Faker from 'faker';
import { Person } from './Person';

export class Passenger extends Person {
  constructor(){
    super(  // SUper nos permite acceder al constructor de la clase base
      Faker.name.findName(),
      {
        lat: Faker.address.latitude(),
        long: Faker.address.longitude()
      }
    );
  }
}