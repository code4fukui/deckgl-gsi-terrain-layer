// __VERSION__ is injected by babel-plugin-version-inline

import loadTerrain from './parse-terrain.js';

// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

export const TerrainWorkerLoader = {
    id: 'terrain',
    name: 'Terrain',
    version: VERSION,
    extensions: ['png', 'pngraw'],
    mimeTypes: ['image/png'],
    options: {
        terrain: {
            bounds: null,
            meshMaxError: 10,
            elevationDecoder: {
                scaler: 0.01,
                offset: 0,
            },
        },
    },
};

export const TerrainLoader = {
    ...TerrainWorkerLoader,
    parse: loadTerrain,
};
