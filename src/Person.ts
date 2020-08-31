export abstract class Person implements Mappable {
  protected name: string;  // Para que solo sea asignable dentro del construtor
  protected location: {
    lat: string;
    long: string;
  };

  constructor(name: string, location: { lat: string, long: string }){
    this.name = name;
    this.location = {
      lat: location.lat,
      long: location.long
    }
  }

  get handleGetLocation(){
    return this.location;
  }
}