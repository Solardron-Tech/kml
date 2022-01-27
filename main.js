import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import KML from 'ol/format/KML';
import { fromLonLat } from 'ol/proj.js';

const zepas = new VectorLayer({
  source: new VectorSource({
    url: 'assets/kml/zepas.kml',
    format: new KML(),
  }),
});

const revervasBiosfera = new VectorLayer({
  source: new VectorSource({
    url: 'assets/Reservas de la Biosfera.kml',
    format: new KML(),
  }),
});

const zonasLic = new VectorLayer({
  source: new VectorSource({
    url: 'assets/kml/zonas-lic.kml',
    format: new KML(),
  }),
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    revervasBiosfera,
  ],
  view: new View({
    center: fromLonLat([-4, 40]),
    zoom: 7,
  }),
});
