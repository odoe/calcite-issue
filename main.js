import "./styles.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";

defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.10.1/assets",
});

import "@arcgis/map-components/dist/components/arcgis-map";

const mapElement = document.querySelector('arcgis-map');
mapElement.addEventListener('arcgisViewReadyChange', event => {
  console.log('MapView ready', event);
});
