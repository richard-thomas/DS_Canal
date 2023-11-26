// Map configuration: all map-specific settings should reside here
/* eslint no-unused-vars: 0 */

var mapConfig = {
    pageTitle: 'Dorset & Somerset Canal',

    // Vector data layers (+ styles) imported from QGIS in OGC GeoPackage format.
    // (Generated directly in QGIS using Processing > Package Layers)
    gpkgFiles: ['DSC_QGIS_Packaged_Layers.gpkg',
        'OS Open Data (clipped) & styles.gpkg'],

    // Any additional SLD files
    sldFiles: ['sld/Probable path (10m nominal width).sld'],

    // Map View Projection
    displayProjection: 'EPSG:3857',
    //displayProjection: 'EPSG:27700',

    // Initial map view [xmin, ymin, xmax, ymax]
    initialMapExtent: [-279792, 6660533, -255946, 6668607], // EPSG:3857 (WGS84 Web Mercator)
    //initialMapExtent: [371552, 149064, 377362, 150790], // EPSG:27700 (BNG)

    // Radius of map click selection circle in pixels
    selectionHitTolerance: 5,

    // Increase to make (mobile) map click easier (but dragging less subtle)
    clickVsMoveTolerance: 2,

    // (Optional) Turn off visibility/fold map base layer selector at startup
    //baseLayerHideAtStartup: true,
    //baseLayerFoldAtStartup: true,

    // (Optional) DEBUG: Display (in console) template data for this file,
    // i.e. all tables in each Gpkg and their attributes
    //debugShowTableJson: true,

    // (Optional) DEBUG: display (in console) raw SLD for all layer_style tables
    //debugShowSLD: true,

    // Order, grouping and configuration of data layers
    dataLayersConfig: [
        {
            label: 'Digitizing (Dorset & Somerset Canal)',
            group: [
                {
                    table: 'Notable features',
                    popupAttr: [['title'], ['description']],
                },
                {
                    table: 'Probable path evidence',
                    popupAttr: [['ID'], ['Confidence', 'Confidence (0-10)'],
                       ['Confidence justification'], ['Map evidence rating'],
                       ['Map evidence'], ['Lidar DTM evidence rating'],
                       ['Lidar DTM evidence'], ['Visible evidence'], ['Notes']]
                },
                {
                    table: 'Probable path evidence',
                    label: 'Probable path (10m nominal width)',
                    styleName: 'Probable path (10m nominal width)',
                    selectable: false
                },
            ]
        },
        {
            table: 'Planned route (1796 Parliament Act map)',
            popupAttr: [['Title']],
        },
        {
            label: 'Digitizing Env Agency LIDAR DTM',
            group: [
                {
                    table: 'Possible infrastructure',
                    popupAttr: [['Title'], ['Description']]
                },
                {
                    table: 'Possible canal centreline',
                    visible: false,
                    popupAttr: [['Description'],
                        ['likelihood_1_to_10', 'Likelihood (1-10)']]
                },
            ]
        },
        {
            label: 'Traced Map Features',
            group: [
                {
                    table: '1840s Tithe (boundary lines)',
                    popupAttr: [['id'], ['Type'], ['Description']]
                },
                {
                    table: '1840s Tithe (canal)',
                    popupAttr: [['id'], ['Type'], ['Description']]
                },
                {
                    table: 'OS 1st edition',
                    popupAttr: [['id'], ['Type'], ['Title'], ['Description']],
                },
                {
                    table: 'OS 2nd edition',
                    visible: false,
                    popupAttr: [['id'], ['Type'], ['Title'], ['Description']]
                },
                {
                    table: 'OS Provisional edition',
                    visible: false,
                    popupAttr: [['id'], ['Type'], ['Title'], ['Description']]
                },
            ],
        },
        {
            table: 'Mapping extent',
            selectable: false,
        },
        {
            table: 'Contour lines (10m) - OS Terrain 50',
            visible: false,
            selectable: false
        },
        {
            label: 'OS Open Data (context if no base map)',
            visible: false,
            fold: 'close',
            group: [
                {
                    label: 'Place names',
                    table: 'OS Open Zoomstack - names',
                    olLayerOptions: {declutter: true},
                    selectable: false
                },
                {
                    label: 'Local buildings',
                    table: 'OS Open Zoomstack - local buildings',
                    selectable: false
                },
                {
                    label: 'Surface water',
                    table: 'OS Open Zoomstack - surface water',
                    forceSingleSymbol: true,
                    selectable: false
                },
                {
                    label: 'Woodland',
                    table: 'OS Open Zoomstack - woodland',
                    forceSingleSymbol: true,
                    selectable: false
                },
            ],
        }
    ],

    // Configuration of layer styling, for debug and for (optionally)
    // generating symbology icons for Legend and/or Layer Switcher
    sldStylerOptions: {
        // (Optional) Generate symbols for Layer Switcher and/or Legend
        addLayerSwitcherSymbols: true,
        showLegend: true,

        // (Optional) Symbol size overrides for Layer Switcher and/or Legend
        lyrSwiSymbolSizing: {
            width: 25,
            height: 18,
            margin: 2
        },
        legendSymbolSizing: {
            width: 20,
            height: 15,
            margin: 2
        },

        // (Optional) DEBUG: display (in console) for all SLD-styled layers the
        // "featureTypeStyle" (i.e. styling from the SLD after parsing)
        //debugShowFeatureTypeStyle: true,

        // (Optional) custom tweaks to "featureTypeStyle" extracted from QGIS
        // "layer_styles" SLD style information in OGC GeoPackage
        tweakFeatureTypeStyle: function(styleName, featureTypeStyle) {
            switch (styleName) {
                case 'Contour lines (10m) - OS Terrain 50':
                    // Fix for erroneous SLD exported by QGIS "Package Layers"
                    // (Scale dependent visibility not carried across to label)
                    featureTypeStyle.rules[1].maxscaledenominator =
                        featureTypeStyle.rules[0].maxscaledenominator;
                    break;

                case 'OS Open Zoomstack - names':
                    // Fixes for erroneous SLD exported by QGIS "Package Layers"

                    // Remove final (text symbolizer) rule which is erroneously
                    // applied globally at all zoom levels
                    var textRule = featureTypeStyle.rules.pop();

                    // Replace "not implemented yet" text label:
                    // "SE Export for CASE WHEN type = 'Motorway Junctions' THEN 'J ' || name1 ELSE name1 END not implemented yetPlaceholder",
                    var namesTextSymbolizer = textRule.textsymbolizer;
                    namesTextSymbolizer.label
                        = {"type":"expression","children":[{"type":"propertyname","value":"name1"}]};

                    // Replace spurious pointSymbolizers with textSymbolizer
                    // (will only be visible at required zoom levels)
                    for (let i = 0; i < featureTypeStyle.rules.length; i++) {
                        delete featureTypeStyle.rules[i].pointsymbolizer;
                        featureTypeStyle.rules[i].textsymbolizer = namesTextSymbolizer;
                    }
                    break;

                // Scale stroke dasharrays by stroke width to overcome bug in QGIS
                // "package layers" export of predefined (not custom) dash patterns
                case 'Probable path evidence':
                case 'Mapping extent':
                case 'Possible infrastructure':
                case 'Possible canal centreline':
                    scaleLineSymbolizerDashArray(featureTypeStyle);
                    break;
            }
            return featureTypeStyle;

            /**
             * Scale all stroke dasharrays in FeatureTypeStyle by stroke width
             * (helper function to overcome bug in QGIS "package layers" export
             *  when using predefined (not custom) dash patterns)
             * @param {object} o - FeatureTypeStyle object
             */
            function scaleLineSymbolizerDashArray(o) {
                if (o.strokeDasharray && o.strokeWidth > 1) {
                    o.strokeDasharray = o.strokeDasharray.split(' ')
                        .map(x => parseFloat(x) * o.strokeWidth).join(' ');
                }
                for (var p in o) {
                    if (Object.prototype.hasOwnProperty.call(o, p) &&
                        typeof o[p] === 'object' ) {
                        scaleLineSymbolizerDashArray(o[p]);
                    }
                }
            }
        },

        // (Optional) overrides to olStyle for things not possible to define
        // in "featureTypeStyle" itself. Gets called for every visible feature
        // (i.e. olStyle array will not be empty)
        // Args:
        //  featureTypeStyle: symbol style definition
        //  olStyle: OpenLayers Styles array
        //  styleName: styleName (or if not defined: table) from dataLayersConfig
        //  feature: current Openlayers Feature (or example feature if createSymbol true)
        //  resolution: (real) resolution in metres/pixel
        //  resolutionChanged: has resolution changed for any styles used by current feature
        //  createSymbol: call is only to create a symbol for Layer Switcher / Legend
        //  symbolLabel: symbol label (only defined when createSymbol true)
        tweakOlStyle: function(featureTypeStyle, olStyle, styleName, feature,
            resolution, resolutionChanged, createSymbol, symbolLabel) {

            // Current layers only need adjusting when resolution (zoom) changes
            if (!resolutionChanged) {
                return olStyle;
            }

            switch (styleName) {
                case 'Notable features':
                    // Set Point Symbolizer displacement from SLD values
                    // exported by QGIS (currently ignored by sldreader)
                    setIconDisplacement(
                        featureTypeStyle.rules[0].pointsymbolizer.graphic.displacement,
                        olStyle[0].getImage());
                    break;

                // Scale width from pixels to metres
                // (for a projected SRS, resolution = metres/pixel)
                case 'Probable path (10m nominal width)':
                    if (createSymbol) {
                        resolution = 3.0;
                    }
                    olStyle[0].stroke_.width_ = featureTypeStyle.rules[0]
                        .linesymbolizer.stroke.styling.strokeWidth / resolution;
                    break;

                // Scale (for resolution) sizing of hachure width and spacing
                case 'OS 1st edition':
                case 'OS 2nd edition':
                case 'OS Provisional edition':
                    if (createSymbol) {
                        // For legend / layer switcher hand-craft resolution
                        // (symbolLabel will be provided)
                        resolution = 0.3;
                    } else {
                        var props = feature.getProperties();
                        symbolLabel = props.Type;
                    }
                    if (symbolLabel === 'Hachure') {
                        var hachureLineSymbolizers =
                            featureTypeStyle.rules[0].linesymbolizer;
                        if (!Array.isArray(hachureLineSymbolizers)) {
                            hachureLineSymbolizers = [hachureLineSymbolizers];
                        }
                        for (var i=0; i < hachureLineSymbolizers.length; i++) {

                            // Scale width from pixels to metres (min 3 pixels)
                            // (for a projected SRS, resolution = metres/pixel)
                            var pixelWidth = hachureLineSymbolizers[i].stroke
                                .styling.strokeWidth / resolution;
                            pixelWidth = (pixelWidth < 3) ? 3 : pixelWidth;
                            olStyle[i].stroke_.width_ = pixelWidth;

                            // Scale any linedash spacing (within limits)
                            var lineDashDef = hachureLineSymbolizers[i].stroke
                                .styling.strokeDasharray;
                            if (lineDashDef) {
                                var linePx = 1;
                                // OS 1st edition style 0 is a background "halo"
                                if (styleName === 'OS 1st edition' && i === 0) {
                                    olStyle[0].stroke_.lineDashOffset_ = 1;
                                    linePx = 3;
                                }
                                var repeatPx = Math.max(3,
                                    Math.min(0.5/resolution, 25));
                                if (linePx >= repeatPx) {
                                    linePx = 1;
                                }
                                var gapPx = repeatPx - linePx;
                                var lineDash = [linePx, gapPx];
                                olStyle[i].stroke_.lineDash_ = lineDash;
                            }
                        }
                    }
                    break;
            }
            return olStyle;

            /**
             * Set Point Symbolizer displacement from SLD displacement values
             * (as exported by QGIS) but currently ignored by sldReader
             * (Uses new setDisplacement() method introduced in OL 6.10.0)
             * @param {object} displacement - Feature Type Style rule
             *      pointsymbolizer.graphic.displacement object
             * @param {object} olStyleIcon - OpenLayers Style Icon Image object
             */
            function setIconDisplacement(displacement, olStyleIcon) {
                // Only define displacement once
                if (olStyleIcon.displacementDefined) {
                    return;
                }
                // Note that QGIS/GeoServer define Point Symbolizer Y
                // displacement as downwards positive, so we negate it here.
                // (It was not defined in SLD 1.0.0 specification, though
                //  SLD SE 1.1.0 unfortunately defined it as upwards positive.)
                var olDispX = Number(displacement.displacementx);
                var olDispY = -Number(displacement.displacementy);
                olStyleIcon.setDisplacement([olDispX, olDispY]);
                olStyleIcon.displacementDefined = true;
            }
        }
    }
};
