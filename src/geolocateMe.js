/**
 * @module geolocateMe
 * @overview OpenLayers self-geolocation control
 *
 * Use class geolocate-control for CSS positioning of button
 */

import ol_source_Vector from 'ol/source/Vector';
import ol_geom_Point from 'ol/geom/Point';
import ol_control_Control from 'ol/control/Control';
import ol_Geolocation from 'ol/Geolocation';
import ol_Feature from 'ol/Feature';
import ol_style_Style from 'ol/style/Style';
import ol_style_Stroke from 'ol/style/Stroke';
import ol_style_Fill from 'ol/style/Fill';
import ol_style_Circle from 'ol/style/Circle';
import ol_layer_Vector from 'ol/layer/Vector';

// -------- Private Variables / Classes --------

var isTracking;
var map_;
var centreViewOnLocation;
var geolocation;
var geolocateOverlay;

class geolocateControl extends ol_control_Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
        const options = opt_options || {};

        const button = document.createElement('button');
        button.title = 'Pan to my location';
        button.className += ' fas fa-location-arrow ';

        const element = document.createElement('div');
        element.className = 'geolocate-control ol-unselectable ol-control';
        element.appendChild(button);

        super({
            element: element,
            target: options.target,
        });

        button.addEventListener('click', handleGeolocateButton.bind(this), false);
    }
}

// -------- Public Functions --------

/**
 * Create OpenLayers self-geolocation widget
 * @param {string} map - OpenLayers Map canvas
 * @param {string} displayProjection - Map display projection
 * @returns {ol_control_Control} OpenLayers map control
 */
export default function (map, displayProjection) {
    map_ = map;
    centreViewOnLocation = false;
    isTracking = false;

    geolocation = new ol_Geolocation({
        projection: displayProjection,
        trackingOptions: {
            enableHighAccuracy: true
        }
    });

    // Small circle at detected location
    const positionFeature = new ol_Feature();
    positionFeature.setStyle(new ol_style_Style({
        image: new ol_style_Circle({
            radius: 6,
            fill: new ol_style_Fill({
                color: '#3399CC'
            }),
            stroke: new ol_style_Stroke({
                color: '#fff',
                width: 2
            })
        })
    }));

    // Feature will use standard OpenLayers getAccuracyGeometry()
    // (a circle with radius indicating accuracy)
    const accuracyFeature = new ol_Feature();

    geolocateOverlay = new ol_layer_Vector({
        source: new ol_source_Vector({
            features: [accuracyFeature, positionFeature]
        })
    });

    // Handle geolocation errors
    // (Quite likely if blocked by user or by browser if HTTPS not used)
    geolocation.on('error', function(error) {
        alert('Geolocation Error: ' + error.message);
    });

    // Update centre dot on change of position
    geolocation.on('change:position', function() {
        const coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
            new ol_geom_Point(coordinates) : null);

        // Only centre view on detected location when just turned on
        if (centreViewOnLocation) {
            map_.getView().setCenter(geolocation.getPosition());
            centreViewOnLocation = false;
        }
    });

    // Update range circle on change of accuracy
    geolocation.on('change:accuracyGeometry', function() {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    // Create "Measure distance" button
    return new geolocateControl;
}

// -------- Private Functions --------

// Geolocate Button click handler (turns geolocation on/off)
function handleGeolocateButton() {
    var elem = document.getElementsByClassName('geolocate-control')[0];
    if (!isTracking) {
        map_.addLayer(geolocateOverlay);
        elem.classList.add('buttonActive');

        // Centre view on initially detected location
        centreViewOnLocation = true;
    } else {
        map_.removeLayer(geolocateOverlay);
        elem.classList.remove('buttonActive');
    }
    isTracking = !isTracking;
    geolocation.setTracking(isTracking);
}