# deckgl-gsi-terrain-layer

国土地理院（GSI）の標高タイルを使用して3D地形を可視化するための deck.gl `TerrainLayer` 拡張機能です。

## デモ

以下のデモでは、GSIデータを使用して日本の3Dマップを描画します。

- [シンプルなデモ](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/)
- [インラインHTMLデモ](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/inline.html)
- [カスタム設定デモ](https://code4fukui.github.io/deckgl-gsi-terrain-layer/demo/custom.html)

## 機能

- **GSIタイルサポート:** [国土地理院の標高タイル](https://maps.gsi.go.jp/development/demtile.html)から3D地形をネイティブに描画します。
- **カスタムデコーダー:** 国土地理院独自のPNGタイル形式を正しく解釈する専用の標高デコーダーが含まれています。
- **高品質なテクスチャ:** [国土地理院のシームレス写真](https://maps.gsi.go.jp/development/ichiran.html)を表面テクスチャとして簡単にオーバーレイできます。
- **TerrainLayerの拡張:** 標準の deck.gl `TerrainLayer` を基盤として構築されており、そのコア機能を継承しています。

## 使い方

`GsiTerrainLayer` をインポートし、deck.gl インスタンスの `layers` プロパティに追加します。このレイヤーは、設定不要ですぐに国土地理院のタイルサービスと連携するように設計されています。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>deckgl-gsi-terrain-layer Demo</title>
    <style>
      body { margin: 0; font-family: sans-serif
