import { Passenger } from './Passenger';
import { Driver } from './Driver';
import { Person } from './Person';

export class MapGeocoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(map: google.maps.Map){
    this.map = map;
    this.geocoder = new google.maps.Geocoder;
  }

  handleAddMarkerInfo = (marker: google.maps.Marker, mappable: Mappable): void => {
    marker.addListener('click', () => {
      const location = {
        lat: marker.getPosition()!.lat(),
        lng: marker.getPosition()!.lng()
      };

      // Not working before not billing google account
      /* this.geocoder.geocode({ "location": location }, (result, status) => {
        if(status === 'OK'){
          const infoWindows = new google.maps.InfoWindow({
            content: result[0].formatted_address
          });

          infoWindows.open(this.map, marker);
        }
        else {
          window.alert(`Error en el resultado de la geolocalizacion ${status}`);
        }
      }); */
      const infoWindows = new google.maps.InfoWindow({
        content: mappable.handleGetMarkerTitle(() => `Caracas Venezuela 01`)
      });

      infoWindows.open(this.map, marker);
    });
  }
}