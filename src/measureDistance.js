/**
 * @module measureDistance
 * @overview OpenLayers distance measuring control
 * (code based on qgis2web https://github.com/tomchadwin/qgis2web)
 *
 * Use class measure-control for CSS positioning of button
 */

import ol_source_Vector from 'ol/source/Vector';
import ol_geom_LineString from 'ol/geom/LineString';
import {transform as ol_proj_transform} from 'ol/proj';
import {getDistance as ol_sphere_getDistance} from 'ol/sphere';
import {unByKey as ol_Observable_unByKey} from 'ol/Observable';
import ol_interaction_Draw from 'ol/interaction/Draw';
import ol_control_Control from 'ol/control/Control';


import ol_Overlay from 'ol/Overlay';
import ol_style_Style from 'ol/style/Style';
import ol_style_Stroke from 'ol/style/Stroke';
import ol_style_Fill from 'ol/style/Fill';
import ol_style_Circle from 'ol/style/Circle';

import ol_layer_Vector from 'ol/layer/Vector';

// -------- Private Variables / Classes --------

var measuring = false;
var sketch;
var draw; // global so we can remove it later
var measureOlSource;
var map_;

class distMeasureControl extends ol_control_Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
        const options = opt_options || {};

        const button = document.createElement('button');
        button.title = 'Measure distance';
        button.className += ' fas fa-ruler ';

        const element = document.createElement('div');
        element.className = 'measure-control ol-unselectable ol-control';
        element.appendChild(button);

        super({
            element: element,
            target: options.target,
        });

        button.addEventListener('click', handleMeasureButton.bind(this), false);
    }
}

// -------- Public Functions --------

/**
 * Create OpenLayers distance measuring widget
 * @param {string} map - OpenLayers Map canvas
 * @param {string} displayProjection - Map display projection
 * @returns {ol_control_Control} OpenLayers map control
 */
export default function (map, displayProjection) {
    map_ = map;
    measureOlSource = new ol_source_Vector();
    var measureLayer = new ol_layer_Vector({
        source: measureOlSource,
        style: new ol_style_Style({
            fill: new ol_style_Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol_style_Stroke({
                color: '#ffcc33',
                width: 3
            }),
            image: new ol_style_Circle({
                radius: 7,
                fill: new ol_style_Fill({
                    color: '#ffcc33'
                })
            })
        })
    });
    map.addLayer(measureLayer);

    // Add OpenLayers "interaction" for drawing line measurements
    draw = new ol_interaction_Draw({
        stopClick: true,
        source: measureOlSource,
        type: 'LineString',
        style: new ol_style_Style({
            fill: new ol_style_Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol_style_Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2
            }),
            image: new ol_style_Circle({
                radius: 5,
                stroke: new ol_style_Stroke({
                color: 'rgba(0, 0, 0, 0.7)'
                }),
                fill: new ol_style_Fill({
                color: 'rgba(255, 255, 255, 0.2)'
                })
            })
        })
    });

    var listener;
    draw.on('drawstart', function(evt) {
        sketch = evt.feature;
        var tooltipCoord = evt.coordinate;
        listener = sketch.getGeometry().on('change', function(evt) {
            var geom = evt.target;
            var output;
            output = formatLength(geom, displayProjection);
            tooltipCoord = geom.getLastCoordinate();
            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tooltipCoord);
        });
    }, this);

    draw.on('drawend', function() {
        measureTooltipElement.className = 'tooltip tooltip-static';
        measureTooltip.setOffset([0, -7]);
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip(map);
        ol_Observable_unByKey(listener);
    }, this);

    // Add help tooltip by the cursor
    map.on('pointermove', function(evt) {
        var helpMsg = 'Click to start drawing';
        if (evt.dragging) {
            return;
        }
        if (measuring) {
            if (sketch) {
                var geom = sketch.getGeometry();
                if (geom instanceof ol_geom_LineString) {
                    helpMsg = 'Click to continue drawing the line';
                }
            }
            helpTooltipElement.innerHTML = helpMsg;
            helpTooltip.setPosition(evt.coordinate);
        }
    });

    // Create "Measure distance" button
    return new distMeasureControl;
}

// -------- Private Functions --------

/**
 * The help tooltip element.
 * @type {Element}
 */
var helpTooltipElement;

 /**
  * Overlay to show the help messages
  * @type {ol_Overlay}
  */
var helpTooltip;

 /**
  * The measure tooltip element
  * @type {Element}
  */
var measureTooltipElement;

 /**
  * Overlay to show the current measurement
  * @type {ol_Overlay}
  */
var measureTooltip;


 /**
  * Creates a new help tooltip
  */
function createHelpTooltip(map) {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol_Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
}

/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip(map) {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol_Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
    });
    map.addOverlay(measureTooltip);
}

/**
 * Format measured length output for selected display projection
 * @param {ol_geom_LineString} line OpenLayers polyline geometry
 * @param {string} displayProjection map display projection
 * @returns {string} measured length in metres or kilometres
 */
function formatLength(line, displayProjection) {
    var length;
    var coordinates = line.getCoordinates();
    length = 0;
    for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
        var c1 = ol_proj_transform(coordinates[i],
            displayProjection, 'EPSG:4326');
        var c2 = ol_proj_transform(coordinates[i + 1],
            displayProjection, 'EPSG:4326');
        length += ol_sphere_getDistance(c1, c2);
    }
    var output;
    if (length > 100) {
        output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
    } else {
        output = (Math.round(length * 100) / 100) + ' ' + 'm';
    }
    return output;
}

// Measure Button click handler (turns measuring on/off)
function handleMeasureButton() {
    var elem = document.getElementsByClassName('measure-control')[0];
    if (!measuring) {
        map_.addInteraction(draw);
        createHelpTooltip(map_);
        createMeasureTooltip(map_);
        measuring = true;
        elem.classList.add('buttonActive');
    } else {
        map_.removeInteraction(draw);
        measuring = false;
        map_.removeOverlay(helpTooltip);
        map_.removeOverlay(measureTooltip);
        elem.classList.remove('buttonActive');
    }
}