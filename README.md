# Dorset & Somerset Canal web map (QGIS to OpenLayers demo)

This web map can be viewed via its [information page](https://richard-thomas.github.io/DS_Canal/info) or [directly](https://richard-thomas.github.io/DS_Canal/dist).

It is a demo of the [ol-sld-styler](https://www.npmjs.com/package/ol-sld-styler) (OpenLayers SLD Styler) and [ol-load-geopackage](https://www.npmjs.com/package/ol-load-geopackage) (OpenLayers OGC GeoPackage Loader) JavaScript NPM modules. Data and styling for the web map has been generated primarily in QGIS and exported as 2 OGC GeoPackages using the [Package Layers](https://docs.qgis.org/3.16/en/docs/user_manual/processing_algs/qgis/database.html#package-layers) Processing Toolbox operation. This allows the web map to be quickly rebuilt from subsequent updated QGIS exports.

The 2 [OGC GeoPackages](https://www.geopackage.org/) are:

- **[DSC_QGIS_Packaged_Layers.gpkg](https://github.com/richard-thomas/DS_Canal/tree/main/dist/DSC_QGIS_Packaged_Layers.gpkg)**: Dorset & Somerset Canal specific data
- **[OS Open Data (clipped) & styles.gpkg](https://github.com/richard-thomas/DS_Canal/tree/main/dist/OS%20Open%20Data%20%28clipped%29%20%26%20styles.gpkg)**: [OS Open Zoomstack](http://www.ordnancesurvey.co.uk/business-government/products/open-zoomstack) downloads to give context if no base map (or an aerial photograph) is used. The unmodified [OS QGIS(QML) Cartographic Stylesheets](https://github.com/OrdnanceSurvey/OS-Open-Zoomstack-Stylesheets/tree/master/GeoPackage/QGIS%20Stylesheets%20(QML)) define the styling.

Each Geopackage contains a collections of vector data layers and the associated SLD styling combined into a single "layer_styles" table as XML strings.

A version of the source QGIS map document used to generate both the above GeoPackages can be loaded into QGIS from [DS_Canal-local-gpkgs.qgz](dist/DS_Canal-local-gpkgs.qgz). Note that this version has had its data sources redirected to the GeoPackages in the local folder (rather than the collection of original data sources).

The web map also incorporates an additional SLD file [Probable path (10m nominal width).sld](https://github.com/richard-thomas/DS_Canal/tree/main/dist/sld/Probable%20path%20(10m%20nominal%20width).sld) which was also exported from QGIS. This was not included in the GeoPackages as it uses the same source vector data as another layer in the GeoPackage, but (currently) the "Package Layers" operation would unnecessarily duplicate the vector source table.

The ol-sld-styler module requires a separate "layer configuration" object which is defined in this example in file [mapconfig.js](https://github.com/richard-thomas/DS_Canal/tree/main/dist/mapconfig.js). It includes some user-defined function hooks for modifying SLD-imported styling where desired styling was not possible due to QGIS export or SLD limitations.

By using OGC GeoPackages as its primary data/styling sources, this web map can also be downloaded and used as an _offline_ map viewer for mobile phones or tablets which have poor (or non-existent) network connectivity. When a network connection is available, data and stying updates could then be done by downloading just 1 file.

## Webpack bundling

The support files used to bundle this web application using Webpack 5 are [package.json](https://github.com/richard-thomas/DS_Canal/tree/main/package.json) & [webpack.config.js](https://github.com/richard-thomas/DS_Canal/tree/main/webpack.config.js). If you clone the repository then you can (re-)build the code bundle with the following commands. Note that the "sql-install" script is to fulfill the requirements from the [ol-load-geopackage](https://www.npmjs.com/package/ol-load-geopackage) module which is incorporated. It simply copies the sql.js web assembly file (sql-wasm.wasm) from folder _node_modules/sql.js/dist/_ to the folder where the web page is to be loaded from.

```bash
npm install
npm run-script sql-install
npm run-script build
```

In order to ensure the sql.js WASM file can be loaded you will have to host them with a (simple) local HTTP server, for example by running in the dist folder...

```bash
python -m http.server
```

...which will allow you to view them in a browser at [http://localhost:8000/](http://localhost:8000/).

The Webpack dev-server can be used to automatically re-build, act as a webhost and trigger the browser to reload every time the code changes. The following script command (defined in [package.json](https://github.com/richard-thomas/DS_Canal/tree/main/package.json)) can be used to start the dev-server and open the web map in a browser:

```bash
npm start
```

## Licence

Original code in this module is provided under the ISC licence - see [LICENCE](LICENCE.md).

Raw spatial data created for this web map (i.e. the contents of file DSC_QGIS_Packaged_Layers.gpkg) is provided under the Creative Commons Attribution 4.0 [(CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/) International License.

## Acknowledgements

The following open source software and icons were used under licence:

- [Font Awesome](https://fontawesome.com/) v5 icons under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) licence
- [OpenLayers](https://openlayers.org/) [ol](https://www.npmjs.com/package/ol) NPM module: under the [BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)
- Proj4js [proj4](https://www.npmjs.com/package/proj4) NPM module under the [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md) licence
- OpenLayers LayerSwitcher [ol-layerswitcher](https://www.npmjs.com/package/ol-layerswitcher) NPM module &copy; Matt Walker, under the MIT licence
- OpenLayers OGC GeoPackage Loader [ol-load-geopackage](https://www.npmjs.com/package/ol-load-geopackage) NPM module under the [ISC](https://github.com/richard-thomas/ol-load-geopackage/blob/master/LICENCE.md) licence
- OpenLayers SLD Styler [ol-sld-styler](https://www.npmjs.com/package/ol-sld-styler) NPM module under the [ISC](https://github.com/richard-thomas/ol-sld-styler/blob/main/LICENCE.md) licence
- (Within ol-sld-styler) [@NieuwlandGeo/sldreader](https://www.npmjs.com/package/@nieuwlandgeo/sldreader) NPM module under the [ISC](https://github.com/NieuwlandGeo/SLDReader/blob/master/LICENSE) licence
