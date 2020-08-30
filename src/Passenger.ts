import Faker from 'faker';


export class Passenger {
  private readonly name: string; // Para que solo sea asignable dentro del construtor
  private readonly location: {
    lat: string,
    long: string
  };

  constructor(){
    this.name = Faker.name.findName();
    this.location = {
      lat: Faker.address.latitude(),
      long: Faker.address.longitude()
    };
  }
}