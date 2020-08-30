import { Map } from './Map';
import { Driver } from './Driver';
import { Passenger } from './Passenger';

let map = new Map('map');

// Primera solucion para los marcadores
/* const drive = new Driver();
const passenger = new Passenger();
map.handleAddDriverMarker(drive);
map.handleAddPassengerMarker(passenger); 
*/

// Segunda solucion para los marcadores
const drive = new Driver();
const passenger = new Passenger();
map.handleAddMarker(drive);
map.handleAddMarker(passenger); 