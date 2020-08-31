import { Map } from "./Map";
import { Person } from "./Person";

export class MyHome implements Mappable {
  private location: {
    lat: string;
    long: string;
  };

  constructor(passenger: Person){
    this.location = {
      lat: (parseInt(passenger.handleGetLocation.lat) + 0.0002).toString(),
      long: (parseInt(passenger.handleGetLocation.long) + 0.0004).toString()
    }
  }

  get handleGetLocation(){
    return this.location;
  }
}