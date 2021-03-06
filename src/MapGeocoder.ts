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

  searchText = (options: SearchOptions): void => {
    options.searchButton.addEventListener('click', () => {
      const address = options.input.value;

      //Not working because not billing google services account 
      /* this.geocoder.geocode({ "address": address }, (result, status) => {
        if(status === 'OK'){
          this.map.setZoom(16);
          this.map.setCenter(result[0].geometry.location);

          new google.maps.Marker({
            map: this.map,
            position: result[0].geometry.location
          });
        }
        else {
          window.alert(`Error en el resultado de la geolocalizacion ${status}`);
        }
      }) */

      const location = {
        lat: 10.5063936,
        lng: -66.8915810
      };

      this.map.setZoom(16);
      this.map.setCenter(location);

      new google.maps.Marker({
        map: this.map,
        position: location
      });
    });
  }
}