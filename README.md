# deckgl-gsi-terrain-layer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A deck.gl `TerrainLayer` extension for visualizing 3D terrain using elevation tiles from the Geospatial Information Authority of Japan (GSI).

## Demo

The following demos render a 3D map of Japan using GSI data:

- [Simple Demo](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/)
- [Inline HTML Demo](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/inline.html)
- [Custom Settings Demo](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/custom.html)

## Features

- **GSI Tile Support:** Natively renders 3D terrain from [GSI elevation tiles](https://maps.gsi.go.jp/development/demtile.html).
- **Custom Decoder:** Includes a specialized elevation decoder that correctly interprets the GSI's unique PNG tile format.
- **High-Quality Textures:** Easily overlays [GSI's seamless aerial photography](https://maps.gsi.go.jp/development/ichiran.html) as a surface texture.
- **Extends TerrainLayer:** Built on the standard deck.gl `TerrainLayer`, inheriting its core functionality.

## Usage

Import `GsiTerrainLayer` and add it to the `layers` prop of your deck.gl instance. This layer is designed to work with GSI's tile services out of the box.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>deckgl-gsi-terrain-layer Demo</title>
    <style>
      body { margin: 0; font-family: sans-serif