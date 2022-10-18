//import { GsiTerrainLayer } from '../index.js';
import { GsiTerrainLayer } from 'https://code4fukui.github.io/deckgl-gsi-terrain-layer/index.js';
import { deck as _deck } from 'https://code4fukui.github.io/deck-es/deck.js';
const Deck = _deck.Deck;

const TERRAIN_IMAGE =
    'https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png';
const SURFACE_IMAGE =
    'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg';
const ELEVATION_DECODER = {
    scaler: 0.01,
    offset: 0,
};

const deck = new Deck({
    initialViewState: {
        longitude: 135.98,
        latitude: 35.75,
        zoom: 10,
        pitch: 70,
        maxPitch: 85,
    },
    controller: true,
    layers: [
        new GsiTerrainLayer({
            id: 'gsi-terrain',
            minZoom: 0,
            maxZoom: 14,
            elevationDecoder: ELEVATION_DECODER,
            elevationData: TERRAIN_IMAGE,
            texture: SURFACE_IMAGE,
        }),
    ],
});
