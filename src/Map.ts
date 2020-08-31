import { Passenger } from './Passenger';
import { Driver } from './Driver';
import { Person } from './Person';
import { MapGeocoder } from './MapGeocoder';

export class Map {
  private googleMaps: google.maps.Map;
  private geocoder: MapGeocoder;

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
    
    this.geocoder = new MapGeocoder(this.googleMaps);
  }

  // Primera solucion -- Se va a mejorar mas adelante
  /* handleAddPassengerMarker = (passenger: Passenger) => {
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
  } */

  // Segunda Solucion
  /* handleAddMarker = (person: Person) => {
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: parseInt(person.handleGetLocation.lat),
        lng: parseInt(person.handleGetLocation.long)
      }
    });
  } */

  // Tercera Solucion
  handleAddMarker = (mappable: Mappable): void => {
    const infoWindows = new google.maps.InfoWindow({
      content: 'Hello world'
    });

    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: parseInt(mappable.handleGetLocation.lat),
        lng: parseInt(mappable.handleGetLocation.long)
      },
    });

    // Ultima solucion
    /*  marker.addListener('click', () => {
      infoWindows.open(this.googleMaps, marker);
    }); */

    this.geocoder.handleAddMarkerInfo(marker, mappable);
  }

  searchText = (options: SearchOptions): void => {
    this.geocoder.searchText(options);
  }
}


// google // un nasmespace es un indicativo de que este archivo de definicion va a quedar a nivel global en nuestro proyecto
// Por lo que podemos hacer uso de google sin necesidad de importar la libreria
//con ese signo al final se le indica a TS que estamos seguros que ese elemento si existe, que no es null