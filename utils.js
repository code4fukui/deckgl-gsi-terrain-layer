// https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/tile-layer/utils.ts

export const urlType = {
  type: 'url',
  value: null,
  validate: (value, propType) =>
    (propType.optional && value === null) ||
    typeof value === 'string' ||
    (Array.isArray(value) && value.every(url => typeof url === 'string')),
  equals: (value1, value2) => {
    if (value1 === value2) {
      return true;
    }
    if (!Array.isArray(value1) || !Array.isArray(value2)) {
      return false;
    }
    const len = value1.length;
    if (len !== value2.length) {
      return false;
    }
    for (let i = 0; i < len; i++) {
      if (value1[i] !== value2[i]) {
        return false;
      }
    }
    return true;
  }
};

export function getURLFromTemplate(template, tile) {
  /*
  template: string | string[],
  tile: {
    index: TileIndex;
    id: string;
  }
): string | null {
  */
  if (!template || !template.length) {
    return null;
  }
  const {index, id} = tile;

  if (Array.isArray(template)) {
    const i = stringHash(id) % template.length;
    template = template[i];
  }

  let url = template;
  for (const key of Object.keys(index)) {
    const regex = new RegExp(`{${key}}`, 'g');
    url = url.replace(regex, String(index[key]));
  }

  // Back-compatible support for {-y}
  if (Number.isInteger(index.y) && Number.isInteger(index.z)) {
    url = url.replace(/\{-y\}/g, String(Math.pow(2, index.z) - index.y - 1));
  }
  return url;
}

/**
 * Get the (axis aligned) bounding box of a mesh
 * @param attributes
 * @returns array of two vectors representing the axis aligned bounding box
 */
// https://github.com/visgl/loaders.gl/blob/master/modules/schema/src/category/mesh/mesh-utils.ts
export function getMeshBoundingBox(attributes/*: MeshAttributes*/)/*: BoundingBox */{
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;

  const positions = attributes.POSITION ? attributes.POSITION.value : [];
  const len = positions && positions.length;

  for (let i = 0; i < len; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    minZ = z < minZ ? z : minZ;

    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    maxZ = z > maxZ ? z : maxZ;
  }
  return [
    [minX, minY, minZ],
    [maxX, maxY, maxZ]
  ];
}
