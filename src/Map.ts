import { Passenger } from './Passenger';
import { Driver } from './Driver';

export class Map {
  private googleMaps: google.maps.Map;

  constructor(divId: string){
    this.googleMaps = new google.maps.Map(
      document.getElementById(divId)!,
      {
        zoom: 1,
        center: { 
          lat: 0, 
          lng: 0
        }
      }
    );
  }

  handleAddPassengerMarker = (passenger: Passenger) => {
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: parseInt(passenger.handleGetLocation.lat),
        lng: parseInt(passenger.handleGetLocation.long)
      }
    });
  }

  handleAddDriverMarker = (driver: Driver) => {
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: parseInt(driver.handleGetLocation.lat),
        lng: parseInt(driver.handleGetLocation.long)
      }
    });
  }
}

// google // un nasmespace es un indicativo de que este archivo de definicion va a quedar a nivel global en nuestro proyecto
// Por lo que podemos hacer uso de google sin necesidad de importar la libreria
//con ese signo al final se le indica a TS que estamos seguros que ese elemento si existe, que no es null