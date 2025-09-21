// Define all Map base layers (return a single group)
/* eslint no-unused-vars: 1 */

import ol_layer_Group from 'ol/layer/Group';
import ol_layer_Tile from 'ol/layer/Tile';
import ol_source_XYZ from 'ol/source/XYZ';
import ol_source_TileWMS from 'ol/source/TileWMS';
// Simplification option when we move to OL8
//import ol_source_StadiaMaps from 'ol/source/StadiaMaps';
import ol_source_OSM from 'ol/source/OSM';
import ol_source_Raster from 'ol/source/Raster';
import ol_layer_Image from 'ol/layer/Image';

/**
 *
 * @param {boolean} hideAtStartup - turn off base layer at start up?
 * @param {boolean} foldAtStartup - close fold of base layers at start up?
 * @returns {ol_layer_Group} OpenLayers Group of base layers
 */
export default function (hideAtStartup, foldAtStartup) {
    const bingApiKey = 'ArU2vlCG7nlfwgmoMXAPdq0PaCpjPWoaBKyzdxN47o2CCPJfZ0w5wDG7SnBcxoIW';

    const lyrStamenTonerLite = new ol_layer_Tile({
        title: 'Stamen Toner Lite',
        opacity: 0.35,
        source: new ol_source_XYZ({
                url: 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}@2x.png',
            attributions: [
            '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>',
            '&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>',  // Required for Stamen styles
            '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',
            '&copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>'
            ]
        })
/*
        // Simplification option when we move to OL8 (new StadiaMaps module)
        source: new ol_source_StadiaMaps({
            layer: 'stamen_toner_lite'
        })
*/
    });

    var lyrOsmMapnik = new ol_layer_Tile({
        title: 'OpenStreetMap (Mapnik)',
        opacity: 0.45,
        source: new ol_source_OSM()
    });

    var lyrCompositeDTM1mHillshade = new ol_layer_Tile({
        source: new ol_source_TileWMS(({
            url: 'https://environment.data.gov.uk/spatialdata/lidar-composite-digital-terrain-model-dtm-1m/wms',
            attributions: '&copy; Environment Agency copyright and/or database right 2023. ' +
                'All rights reserved. ' +
                '<a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"' +
                ' target="_blank" title="Open Government Licence">OGL</a>',
            params: {
                "LAYERS": "Lidar_Composite_Hillshade_DTM_1m",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
        title: 'DTM Hillshade (1m resolution, 2023)'
    });

    var lyrCompositeDSM1mHillshade = new ol_layer_Tile({
        source: new ol_source_TileWMS(({
            url: 'https://environment.data.gov.uk/spatialdata/lidar-composite-digital-surface-model-first-return-dsm-1m/wms',
            attributions: '&copy; Environment Agency copyright and/or database right 2023. ' +
                'All rights reserved. ' +
                '<a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"' +
                ' target="_blank" title="Open Government Licence">OGL</a>',
            params: {
                "LAYERS": "Lidar_Composite_Hillshade_FZ_DSM_1m",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
        title: 'DSM Hillshade (1m resolution, 2023)'
    });

    var lyrAerialPhotoLabelledBing = new ol_layer_Tile({
        title: 'Aerial Photo Labelled (Bing)',
        source: new ol_source_XYZ({
            attributions: 'Copyright &copy; Ordnance Survey',
            crossOrigin: 'Anonymous',
            maxZoom: 20,
            tileUrlFunction: function (tileCoord) {
                var z = tileCoord[0];
                var x = tileCoord[1];
                var y = tileCoord[2];
                return 'http://ak.dynamic.t0.tiles.virtualearth.net/comp/ch/' +
                    quadkey(x, y, z) + '?mkt=en-US&it=A,G,L&og=967&n=z&key=' +
                    bingApiKey
            }
        })
    });

    var lyrAerialPhotographyBing = new ol_layer_Tile({
        title: 'Aerial Photography (Bing)',
        source: new ol_source_XYZ({
            attributions: 'Copyright &copy; Ordnance Survey',
            crossOrigin: 'Anonymous',
            maxZoom: 20,
            tileUrlFunction: function (tileCoord) {
                var z = tileCoord[0];
                var x = tileCoord[1];
                var y = tileCoord[2];
                return 'http://ecn.t3.tiles.virtualearth.net/tiles/a' +
                    quadkey(x, y, z) + '.jpeg?g=0&dir=dir_n';
            }
        })
    });

    var srcBingOS = new ol_source_XYZ({
        attributions: 'Copyright &copy; Ordnance Survey',
        crossOrigin: 'Anonymous',
        maxZoom: 17,
        tileUrlFunction: function (tileCoord) {
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];
            return 'https://ecn.t0.tiles.virtualearth.net/tiles/r' +
                quadkey(x, y, z) + '?g=8662&lbl=l1&productSet=mmOS&key=' +
                bingApiKey;
        }
    });

    var lyrOrdnanceSurveyBing = new ol_layer_Tile({
        title: 'Ordnance Survey (Bing)',
        opacity: 0.35,
        source: srcBingOS
    });

    // Convert Bing OS map source to greyscale
    var srcBingOSgreyscale = new ol_source_Raster({
        sources: [srcBingOS],
        threads : 0, // ol BUG 13206 workaround: this stops memory leak
            // https://github.com/openlayers/openlayers/issues/13206
        operation: (pixels) => {
            var pixel = pixels[0];
            var lightness = (pixel[0] * 0.3 + pixel[1] * 0.59 + pixel[2] * 0.11);
            return [lightness, lightness, lightness, pixel[3]];
        }
    });
    var lyrOrdnanceSurveyBingGrey = new ol_layer_Image({
        title: 'Ordnance Survey (Bing) Greyscale',
        opacity: 0.35,
        source: srcBingOSgreyscale
    });

    // Bing Roads with DTM shading:
    // In order to get detailed DTM shading on Bing Maps, cannot use the
    // OpenLayers Bing library, so have to call the Bing servers direct, after
    // getting the URL from the Bing Metadata server:
    //   https://dev.virtualearth.net/REST/V1/Imagery/Metadata/RoadOnDemand?uriScheme=https&output=json&key=
    // then replacing "shading=hill" with "shading=t".
    // TBD: call the metadata server to get the URL on every run.

    var lyrRoadDtmBing = new ol_layer_Tile({
        'title': 'Roads with DTM shading (Bing)',
        source: new ol_source_XYZ({
            attributions: 'Copyright &copy; 2021 Microsoft and its suppliers. ' +
                'All rights reserved. <a class="ol-attribution-bing-tos" ' +
                'href="https://www.microsoft.com/maps/product/terms.html" ' +
                'target="_blank">Terms of Use</a>',
            maxZoom: 21,
            tileUrlFunction: function (tileCoord) {
                var z = tileCoord[0];
                var x = tileCoord[1];
                var y = tileCoord[2];
                return 'https://t0.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/' +
                    quadkey(x, y, z) + '?mkt=en-US&it=G,L' +
                    '&shading=t&og=1677&n=z&key=' + bingApiKey;
            }
        })
    });

    // Quadkey generation for explicit Bing XYZ map source
    function quadkey(x, y, z) {
        var quadKey = [];
        for (let i = z; i > 0; i--) {
            var digit = '0';
            var mask = 1 << (i - 1);
            if ((x & mask) != 0) {
                digit++;
            }
            if ((y & mask) != 0) {
                digit++;
                digit++;
            }
            quadKey.push(digit);
        }
        return quadKey.join('');
    }

    // Layer Group: 'Environment Agency LiDAR'
    var layersEnvironmentAgencyLiDAR = [
        lyrCompositeDTM1mHillshade,
        lyrCompositeDSM1mHillshade];
    var group_EnvironmentAgencyLiDAR = new ol_layer_Group({
        layers: layersEnvironmentAgencyLiDAR,
        'fold': 'open',
        title: 'LiDAR Elevation (Environment Agency)'
    });

    // Layer Group: Contemporary Base Maps
    var layersContemporaryBasemaps = [
        lyrStamenTonerLite,
        lyrOsmMapnik,
        lyrAerialPhotoLabelledBing,
        lyrAerialPhotographyBing,
        lyrRoadDtmBing,
        lyrOrdnanceSurveyBingGrey,
        lyrOrdnanceSurveyBing];
    var group_ContemporaryBasemaps = new ol_layer_Group({
        layers: layersContemporaryBasemaps,
        'fold': 'open',
        title: 'Contemporary Base Layers'
    });

    // Set common base layer properties
    var baseLayersList = layersEnvironmentAgencyLiDAR.concat(
        layersContemporaryBasemaps);
    for (let lyr of baseLayersList) {
        lyr.setVisible(false);
        lyr.setProperties({
            'type': 'base'
        });
    }

    // Select single initially visible base layer
    //lyrOrdnanceSurveyBingGrey.setVisible(true);
    lyrStamenTonerLite.setVisible(true);

    var baseGroupsList = [group_ContemporaryBasemaps,
        group_EnvironmentAgencyLiDAR];
    var groupBaseLayers = new ol_layer_Group({
        layers: baseGroupsList,
        'fold': 'open',
        title: 'Map Base Layer (select one):'
    });
    if (hideAtStartup) {
        groupBaseLayers.setVisible(false);
    }
    if (foldAtStartup) {
        groupBaseLayers.setProperties({'fold': 'close'});
    }
    return groupBaseLayers;
}