import { Map } from './Map';
import { Driver } from './Driver';
import { Passenger } from './Passenger';
import { MyHome } from './MyHome';

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
const myHome = new MyHome(passenger);
map.handleAddMarker(drive);
map.handleAddMarker(passenger); 
map.handleAddMarker(myHome); 