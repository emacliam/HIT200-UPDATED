<template>
  <div class="w-full mt-16">
  <div class="flex items-center flex-col">
   <div id="map" class="rounded-lg"></div>
   <div class="pt-8">
<input id="coordinates" class="coordinates cursor-pointer hidden" :placeholder="latitude">
<input id="coordinateslat" class="coordinateslat cursor-pointer hidden" :placeholder="latitude">
<span @click="send()"  title="Send your location" class="cursor-pointer border-2 rounded-lg py-2 px-4 bg-teal-600 text-white">Send location</span>
    </div>
  </div>

  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
    layout:"none",
head(){
    return{
        link: [
            {href:"https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css", rel:"stylesheet"}
        ]
    }
},
  data() {
    return {
      access_token:
        "pk.eyJ1IjoiZW1hY2xpYW0iLCJhIjoiY2tieGszaG41MDg5MTJ0bjQ4Znl1dXAzdiJ9.xUQXzyDzLkt2PlUy_y2vXg",
      map: {},
      lat: 31.05337,
      lng: -17.82772,
      latitude:{},
      longitude:{}

    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {

// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiZW1hY2xpYW0iLCJhIjoiY2tieGszaG41MDg5MTJ0bjQ4Znl1dXAzdiJ9.xUQXzyDzLkt2PlUy_y2vXg';
var coordinates = document.getElementById('coordinates');
var coordinateslat = document.getElementById('coordinateslat');
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [this.lat, this.lng],
zoom: 12
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var canvas = map.getCanvasContainer();

var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [this.lat, this.lng]
}
}
]
};

function onMove(e) {
var coords = e.lngLat;

// Set a UI indicator for dragging.
canvas.style.cursor = 'grabbing';

// Update the Point feature in `geojson` coordinates
// and call setData to the source layer `point` on it.
geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
map.getSource('point').setData(geojson);
}

function onUp(e) {
var coords = e.lngLat;
this.latitude = e.lngLat.lat;

// Print the coordinates of where the point had
// finished being dragged to on the map.
//coordinates.style.display = 'block';
coordinates.value = coords.lng;
coordinateslat.value = coords.lat;
canvas.style.cursor = '';

// Unbind mouse/touch events
map.off('mousemove', onMove);
map.off('touchmove', onMove);
}

map.on('load', function() {
// Add a single point to the map
map.addSource('point', {
'type': 'geojson',
'data': geojson
});

map.addLayer({
'id': 'point',
'type': 'circle',
'source': 'point',
'paint': {
'circle-radius': 10,
'circle-color': '#F71414'
}
});

// When the cursor enters a feature in the point layer, prepare for dragging.
map.on('mouseenter', 'point', function() {
map.setPaintProperty('point', 'circle-color', '#F71414');
canvas.style.cursor = 'move';
});

map.on('mouseleave', 'point', function() {
map.setPaintProperty('point', 'circle-color', '#F71414');
canvas.style.cursor = '';
});

map.on('mousedown', 'point', function(e) {
// Prevent the default map drag behavior.
e.preventDefault();

canvas.style.cursor = 'grab';

map.on('mousemove', onMove);
map.once('mouseup', onUp);
});

map.on('touchstart', 'point', function(e) {
if (e.points.length !== 1) return;

// Prevent the default map drag behavior.
e.preventDefault();

map.on('touchmove', onMove);
map.once('touchend', onUp);
});
});


    },
    send(){
     let data={
        Latitude:coordinateslat.value,
        Longitude:coordinates.value
      }
      const response = this.$axios.$put(`/api/map/${this.$state.$auth.user._id}`)

//////////////////////

    }
  }
};
</script>

<style scoped>
body { margin: 0; padding: 0; }
	#map { height:60vh; width: 94%; }

</style>