import { Map } from './Map';
import { Driver } from './Driver';
import { Passenger } from './Passenger';

let map = new Map('map');

const drive = new Driver();
const passenger = new Passenger();

map.handleAddDriverMarker(drive);
map.handleAddPassengerMarker(passenger);