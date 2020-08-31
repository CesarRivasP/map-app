import { Map } from "./Map";
import { Person } from "./Person";

export class MyHome implements Mappable {
  // private name: string;
  private location: {
    lat: string;
    long: string;
  };

  constructor(passenger: Person){
    this.location = {
      lat: (parseInt(passenger.handleGetLocation.lat) + 0.0002).toString(),
      long: (parseInt(passenger.handleGetLocation.long) + 0.0004).toString()
    };

    // this.name = passenger.handleGetUserName;
  }

  get handleGetLocation(){
    return this.location;
  }

  /* handleGetMarkerTitle = (address: () => string): string =>  {
    return `La direccion de ${this.name} es ${address()}`;
  } */
}