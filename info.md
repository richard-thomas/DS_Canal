# Dorset & Somerset Canal Evidences

[<button>View the map</button>](https://richard-thomas.github.io/DS_Canal/dist) - click to open the interactive web map; you can always come back to view this information page from within the web map by clicking the ( i ) icon at the top left of the map.

_(Author: [Richard Thomas](https://richard-thomas.github.io/), March 2022)_

Table of Contents:

- **[Introduction](#introduction)**
- **[Web Map Instructions](#web-map-instructions)**: how to use the interactive web map
- **[Source Maps & Aerial Data](#source-maps--aerial-data)**: details of all source spatial data and how it was used
- **[Web Map Layer Descriptions](#web-map-layer-descriptions)**: content of each map layer
- **[Methodology Used to Re-align Map Features](#methodology-used-to-re-align-map-features)**: how information from the different spatial data sources were combined
- **[Summary of Results](#summary-of-results)**: an overview of what this web map does (and doesn't) show
- **[This Web Map: Open Data & Open Source code](#this-web-map-open-data--open-source-code)**: you are free to re-use the data and web coding in this web map
- **[Acknowledgements & References](#acknowledgements--references)**: data sources used, licensing and related further sources

## Introduction

_"One bomb fell on Wincanton during the last war and destroyed almost all known records of the Dorset & Somerset Canal"_ - Kenneth R. Clew (1970)

This project is to map the most likely path and features of the only part of the Dorset and Somerset Canal that was ever (partially) built - the branch line from Frome to Nettlebridge in Somerset. The project's primary aims are:

- to gather (and align as accurately as possible) all the map features that may relate to the canal (its sides, locks, basins, embankments, cuttings) from all available detailed maps
- where clear mapping of the canal exists, to combine the most detailed mapping available for each time period with modern aerial survey data to mark the path as accurately as possible
- where such evidence is missing, unclear or contradictory, to predict the most likely path(s) from the available maps and modern aerial survey data
- to present the evidences in an interactive web map viewable on a desktop computer, a tablet or a mobile phone.

An overview of the whole canal and its history can be found at the [Dorset & Somerset Canal](http://www.dorandsomcanal.org/) website.

## Web Map Instructions

The web map (if not already opened) can be opened with the **[View the map]** button at the top of this page.

**Layer Control pane** (on the right hand side): use this to select the data layers to display/hide. Note that layer name text will be greyed out and italicized if it is not being rendered because it is out of range (zoom in more for it to appear). At the bottom of this (scrollable) pane a single base layer can be selected (map, aerial photography, LiDAR elevation) to display under the data. This pane can be hidden with the [&raquo;] icon at the top right.

**Click/Touch a feature**: display its attributes in a popup window. Specifically, if a section of the canal path is clicked (i.e. the "probable path evidence" layer) the evidence for why that section is thought to be located there is presented.

**Map buttons** (down the left hand side):

- ( i ) (information icon) show this information page within the map (click again to hide the page)
- [+] zoom in (or use scroll wheel, pinch-zoom or double-click)
- [-] zoom out (or use scroll wheel, pinch-zoom)
- [&#x21D1;] (hidden unless map has been rotated): re-align north to up
- [&#x22B3;] display a map marker at your current location
- [&#x2AFD;] (ruler) switch on/off distance measuring tool (then click location to start measuring, double-click to end)
- [&equiv;] (at bottom of map): toggle the map key display on/off

**Other Mouse/Touch controls**:

- To rotate the map (on a desktop): Alt + Shift + (drag with mouse)
- To rotate the map (on a phone or tablet): use 2 fingers with a twisting action
- To scroll the layer control pane (on a desktop): use the scrollbar, or use mouse wheel while hovering over it

**"BNG Coords" display** (at the top left): gives the British National Grid (Easting, Northing) coordinates (in metres) of the cursor (or finger position on touch displays). To convert to a 6-digit OS Grid Reference, take digits 2-4 of each coordinate and prefix with "ST" - for example (366847,148822) = ST668488.

**Initial Data Loading**: note that with a slow network connection, the data layers may initially take a while to load as all data is loaded into the web browser at start-up. However, after that point (and on future visits to the web page if the data is still in the browser cache), the only data loaded over the network will be imagery for any base layer that is turned on, so data layer features should render quickly.

**Offline Map Usage**: Because the data layers are all loaded at start-up, if you keep the web map browser tab open (or if you re-visit the website and it is still in your browser cache), you can continue to use the web map when you do not have a network connection. You would only need a network connection to update any base layer imagery. In this situation it is recommended to turn off base layers (untick "Map Base Layer") and to turn on the data layer group "OS Open Data (context if no base map)".

## Source Maps & Aerial Data

Outlined below are all the source maps and aerial photography/LiDAR data used in researching this project, with a note on how useful (or otherwise) each source was. For permissions reasons, most of these sources cannot be directly viewed in the web map but detailed canal features have been traced from many of them (licensing details given in the later [Acknowledgements & References](#acknowledgements--references) section). However, links are provided (where available) to websites where these maps can be directly viewed.

### Historic maps

- **Parliament Act map (1796)**: this map was used only to extract the proposed canal path. Although the map is not drawn to scale and only shows land close to the canal, because it shows all adjacent field boundary lines we can (with help of in particular the later 1840s Tithe map) "warp" the map to reasonably accurately plot the planned path.
- **Edmund Crocker (1808) map** [(map image)](https://britishlibrary.georeferencer.com/maps/80517dd5-3bd7-567f-be4a-4bb54b56dbf6/): no features were traced from this map (licensing is very restrictive). However, it does give some good indications of which parts of the can were actually built and even labels it _"The unfinished Dorset & Somerset Canal"_
- **Ordnance Survey First Series (1817)** [(view map)](https://www.visionofbritain.org.uk/maps/series?xCenter=3172813.46805&yCenter=2786460.29441&scale=63360&viewScale=181417.4208&mapLayer=nineteenth&subLayer=first_edition&title=Ordnance%20Survey%20and%20Ordnance%20Survey%20of%20Scotland%20First%20Series&download=true): quite a small scale map so detail is limited, though it does give good indications as to what was built
- **Tithe Maps (1840s)** [(view map via "Basemaps")](https://maps.bristol.gov.uk/kyp/?edition=som): first large scale and detailed maps available for the region, with significant sections of the canal shown that are not in existence on later maps.
- **Ordnance Survey 25-inch 1st Edition (1873-1888)** [(view map via "Basemaps")](https://maps.bristol.gov.uk/kyp/?edition=som): where canal evidence exists at this date, this provides the best quality historic mapping
- **Ordnance Survey 25-inch 2nd Edition (1892-1914)** [(view map via "Basemaps")](https://maps.bristol.gov.uk/kyp/?edition=som): very similar to the 1st edition, but interesting to see where some parts of the canal are starting to disappear
- **Ordnance Survey 6-inch "Provisional" Edition (1935+)** [(view map)](https://maps.nls.uk/os/6inch-england-and-wales/), [(info from OpenStreetMap)](https://wiki.openstreetmap.org/wiki/Provisional/First_Edition): produced as part of the [retriangulation to "National Grid" (OSGB1936)](https://en.wikipedia.org/wiki/Retriangulation_of_Great_Britain). In theory this should provide better location accuracy, but these maps are at a smaller scale than the earlier OS maps. However, it does give some additional clues (typically new hachure) and is also interesting to see further disappearance of the canal.

### Contemporary Maps

The following maps were consulted both to check on the alignment of the historic maps and to see if they revealed any extra clues to the path of the canal:

- **Bristol City Council OS MasterMap-derived map** [(view map)](https://maps.bristol.gov.uk/kyp/?edition=som): MasterMap data is the most detailed and accurate present day Ordnance Survey mapping. Although the BCC styling omits some of the features for clarity, it provides an excellent reference for checking historic map alignment as well as showing positions of some of the remaining canal features.
- **OpenStreetMap** [(view map)](https://www.openstreetmap.org/#map=12/51.2212/-2.4118): although no additional information was gleaned from this, the various different stylings provide very good open source base layer mapping at all map scales.
- **Ordnance Survey 1:25000** [(view map c/o Bing)](https://www.bing.com/maps?osid=21b6a2e2-cbf8-486e-96dc-c0c1656406ec&cp=51.232539~-2.415258&lvl=13&style=s&v=2&sV=2&form=S00027): this very clear and familiar map provides excellent context and content, although due to it's large scale it is relatively poor for accurately positioning canal features.

### Environment Agency LiDAR Elevation Data

- **Digital Surface Model (DSM) 1m resolution 2017**: The very fine horizontal and vertical resolution of this elevation data was invaluable in locating depressions that might correspond with the canal centreline, even in the middle of fields where no obvious visible traces of the canal remain. It was also helpful in aligning hachure in maps corresponding to embankments or cuttings.
- **Digital Terrain Model (DTM) 1m resolution 2019** [(view map)](https://environment.maps.arcgis.com/apps/webappviewer/index.html?id=f765c2a97d644f08927d5cd5abe58d87): The DTM is the result of post-processing of the DSM to remove surface features such as buildings, trees or walls. When this works well it can reveal features hidden in the clutter of the DSM. However, sometimes this post-processing can lead to misleading results.

(Note that "hillshade" (i.e. simulated shadows) renderings of this LiDAR data can be directly viewed within the web map as base layers. However, for tracing it was often more revealing to use a height colour-coded rendering to emphasize locations of notable changes in elevation).

### Aerial Photography

- **Environment Agency (2009, 20cm resolution):** Although there were only small fragments of the canal path covered by this dataset (mainly just north of Frome), its very high resolution and vertical angle made it a very reliable source for aligning some map features.
- **Bing** [(view)](https://www.bing.com/maps?osid=4f082185-c116-452b-af19-1556e4850a8e&cp=51.232539~-2.415258&lvl=13&style=h&v=2&sV=2&form=S00027): The complete coverage of this aerial photography provides a good context for the map (and is available as a base layer in the web map). It helped explain some landscape features which were unclear or ambiguous in maps and is often used (and licensed) for feature location in OpenStreetMap. Note however that both Bing and Google aerial imagery is likely to suffer from some horizontal displacement in hilly terrain due to the oblique angles it may be photographed from.
- **Google** [(view)](https://goo.gl/maps/oRZkpyfq1EbtKWKFA): Similar to the Bing aerial photography, but generally higher resolution or just clearer so useful for comparing with map features. However, for licensing reasons this cannot be displayed in the web map.

## Web Map Layer Descriptions

Details of each layer shown in the Layer Selector Pane:

- **Notable features**: key places of interest (mostly those locations described on the Dorset & Somerset Canal website [features page](http://www.dorandsomcanal.org/features.htm)) - not all of these are publicly accessible
- **Probable path evidence**: estimated canal path location (split into sections by evidence). Layer attributes (shown in popup on clicking):
  - ID [Number]: canal path section identifier
  - Confidence [Number 0-10]: level of certainty of the location displayed for that canal section:
    - 2-10: Probable path (with increasing certainty towards 10)
    - 1: Possible path (if built): typically this section is just a short link (following contours) between 2 known sections
    - 0: (Possible link): straight line indicating possible logical connection
  - Confidence justification [Text]: summary of the sources of evidence that point to the confidence level
  - Map evidence rating [Number 0-10]: confidence level derived from maps
  - Map evidence [Text]: which maps provided the key evidence
  - Lidar DTM evidence rating [Number 0-10]: confidence level derived from LiDAR elevation data (1 indicates just the use of contours)
  - Lidar DTM evidence [Text]: description of information gleaned from LiDAR
  - Visible evidence [Text]: evidence justifying line of canal (not details of features at this location)
  - Notes [Text]: any other comments on this canal section
- **Probable path (10m nominal width)**: using the same underlying data as "Probable path evidence" but rendered to scale so as always 10 metres wide at any zoom level. Although the canal varied in width, this should give a better indication of how the canal is likely to relate to surrounding features.
- **Planned route (1796 Parliament Act map)**: proposed canal routing as traced from the map in the 1796 Parliament Act
- **Digitizing Env Agency LIDAR DTM**: Possible features suggested by the Environment Agency LiDAR elevation data (the raw DTM imagery can be viewed by switching on that base layer option)
  - **Possible infrastructure**: possible canal infrastructure (aqueduct, basin) suggested by the DTM data
  - **Possible canal centreline**: linear depressions visible in the DTM that might indicate the canal path (but note there are many spurious ones)
- **Traced Map Features**: Canal features traced from the source maps and re-aligned where necessary (see next section for details). Note that although all canal features were traced from the OS 1st edition map, this was not always done with the 2nd edition (and especially not the Provision edition) unless they added extra clues. Traced features were split into separate layers by source map:
  - **1840s Tithe (boundary lines)**: potentially relevant field or road boundaries shown on 1840s Tithe map
  - **1840s Tithe (canal)**: canal area polygons (sometimes ambiguous when not coloured in blue)
  - **OS 1st edition**: Ordnance Survey 25-inch 1st Edition map (1873-1888)
  - **OS 2nd edition**: Ordnance Survey 25-inch 2nd Edition map (1892-1914)
  - **OS Provisional edition**: Ordnance Survey 6-inch "Provisional" Edition map (1935+), also known as "First Series"
- **Mapping extent**: geographic limits beyond which data for this project was clipped
- **Contour lines (10m) - OS Terrain 50**: most detailed Ordnance Survey contour lines that are available as Open Data
- **OS Open Data (context if no base map)**: place names plus generalised coloured polygons with labels for local buildings, surface water and woodland

## Methodology Used to Re-align Map Features

The process of re-aligning (groups of) map features was a major challenge in accurately estimating the canal path. Although organisations like the National Library of Scotland and Bristol City Council have done a remarkable job in aligning their streaming digital scans of old maps to a modern coordinate system there are many sources of inaccuracies:

- survey measurements (particularly with the older pre-OS 1st Edition maps) where small relative errors often accumulate over distance
- cartography: the vagueness of how some features were drawn (especially hachure for embankments and cuttings)
- warping, joins (or tears!) in the paper maps
- digital scanner distortions (especially where maps are not completely flat)
- transformations of original mapping reference points (e.g. triangulation points) to present day reference points and coordinate systems
- transformation of the different sources of data to the common coordinate reference system (EPSG3857 "WGS84 Web Mercator") used in this map - often from EPSG27700 "British National Grid"

The re-alignment method used for most maps was to initially digitally trace all relevant map features and for LiDAR features to trace boundaries or centre-lines of any possibly relevant hollows. For the historic maps, it was then a case of using as reference points nearby well-defined features that still exist in current maps or aerial data to determine if (groups of) traced features should be shifted when generating a new "aligned" data set. For the reasons given above, these alignment shifts were often quite different at different places in a single map source:

- **Ordnance Survey 1st edition maps (and onwards)**: there were usually many common points of reference with contemporary maps making the alignment process relatively straightforward.
- **1840s Tithe Maps**: although many more fragments of the canal still existed on these maps, often the only common points of reference are some field boundaries and especially any distinctive meanders in the path of the often nearby river.

For the earlier maps, the variability in accuracy was so great that it was necessary to first "warp" the whole map before tracing features by using point features still shown on contemporary maps as Ground Control Points (GCPs):

- **OS First Series (1817)**: as quite a small scale map, this has too little in the way of reference points to be able to accurately chart the canal path in any helpful way. However, distinctive road junctions or sharp bends proved suitable to use as GCPs to "warp" the map which was still considered worth trying as it does give good indicators as to what was built.
- **Edmund Crocker (1808) map**: drawn at a similar scale and level of detail to the 1817 map, this could be warped by the same method but was similarly only useful as an indication of how much of the canal was built.
- **1796 Parliament Act map**: although much more detailed, this was not even drawn to scale and only included land a short distance either side of the canal. However, many of the field boundaries shown were still in existence (particularly on the 1840s Tithe Maps), so these could be used as GCPs.

This map "warping" was achieved with the [QGIS Georeferencer plugin](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_raster/georeferencer.html), using the Thin Plate Spline (TPS) algorithm to "rubber sheet" the raster using multiple local polynomials to match the GCPs specified.

## Summary of Results

Much of the routing of the canal (as built) is very clear and I believe that combining field undulations still visible in LiDAR with contemporary maps and (carefully re-aligned) historic maps has enabled the probable path to be mapped here to a significantly greater accuracy than previously done - to within a few metres in most places. Details of the mapping confidence for each segment of the canal can be viewed by clicking on each section of the canal in the web map. The resultant "popup" will explain the evidence for that segment from each data source and also the distance of any re-alignment shifting done on historic maps at that location.

Where there are very small gaps in evidence for the canal path, short links between known sections can be inferred with reasonable confidence. However, from the maps it is very unclear where the canal was/would be routed from the site of the bottom of the staircase of balance locks on the west side (section 94) to Elliots on the east side (section 103) - the earliest two maps (from 1808 and 1817) imply that this section was never built. However, features on the later maps suggest there might have been some canal workings here (sections 97-101), although much would have been lost by the building of the railway through this area not long after. If this was indeed the (intended) path of the canal, then the connecting path to the bottom of the balance locks (sections 95-96) is suggested based only on contour lines and hints from field boundaries. Where there are no further clues, the web map just shows dotted straight lines to indicate the possible logical links. Whichever route was intended to be taken here would require more than one additional balance lock as there is quite a large drop in height travelling east. The proposed route drawn in the 1796 Parliament Act is not helpful in this area as it diverges from the balance locks section by over 500 metres to the south-west.

The final (intended) eastern section of the branch line down into Frome also becomes progressively unclear. The earliest (1808 and 1817) maps imply the canal was only built as far as Whatcombe Farm (section 118), though an extension line (section 119) has been added based on following contours, enclosure boundaries and with reference to the proposed route in the 1796 Parliament Act.

The map does not attempt to combine features from the different maps other than the canal centre-line. However, it might be helpful to try to extract the most likely locations and outlines of balance locks, apparent canal basins or other canal widening.

Note that evidence presented in this web map is currently just from maps, LiDAR and aerial photography - additional confirmation/refutation of the marked "probable path" could be ascertained from physical evidence viewed by walking the route. Mapping of such additional evidence would ideally be done with either absolute locations measurement (e.g. with an accurate GPS measuring device) or relative measurements of distance from existing known features. Perhaps that is the next step for this project...

## This Web Map: Open Data & Open Source code

The raw spatial data created for this web map is freely available as Open Data for re-use/re-work. It is contained in a single file in the [OGC GeoPackage](https://www.geopackage.org/) format which is readable by almost all GIS software. Data licensing:

- Copyright &copy; 2022 [Richard Thomas](https://richard-thomas.github.io/). This work is licensed under the Creative Commons Attribution 4.0 [(CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/) International License.
- Licensing also depends on including the appropriate acknowledgements to the data it was derived from shown in the following _"Acknowledgements & References"_ section. Alternatively, you could just include a direct link to that section:
  - [https://richard-thomas.github.io/DS_Canal/info#acknowledgements--references](https://richard-thomas.github.io/DS_Canal/info#acknowledgements--references)

All of the software and web source code used in producing this web map are Open Source.

Further details of the software/code/data are provided in the <a href="https://github.com/richard-thomas/DS_Canal/#readme" target="_blank">README</a> page of the associated DS_Canal GitHub Repository.

## Acknowledgements & References

Special thanks to Derrick Hunt of the Dorset & Somerset Canal Society for information, inspiration and various map images including earlier estimates of the canal path based on his extensive walking of the route. He is also the key author of the [Dorset & Somerset Canal website](https://www.dorandsomcanal.org/) (with web design by Liz Tuddenham) from which most of the locations in the "Notable Features" data layer in this web map are taken.

Source maps and aerial imagery used for this mapping project:

- **National Library of Scotland**: [Ordnance Survey 25-inch 1st & 2nd edition maps](https://maps.nls.uk/os/25inch-england-and-wales/index.html), [Ordnance Survey 6-inch "provisional" edition map](https://maps.nls.uk/os/6inch-england-and-wales/) - used for tracing of canal features
  - Reproduced with the permission of the National Library of Scotland
  - Use of these digitised maps for non-commercial purposes is permitted under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International [(CC-BY-NC-SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/) licence.
- **Bristol City Council**: 1840s Tithe map [(metadata link)](https://data.bristol.gov.uk/geonetwork/srv/eng/catalog.search#/metadata/31df12c1-a843-4d1e-9abb-687eecbc4143) viewable within [Know Your Place](https://maps.bristol.gov.uk/kyp/?edition=som) - used for tracing of canal features
  - Use of these digitised maps for non-commercial purposes has been granted for this project under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International [(CC-BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/) licence.
- **Vision of Britain**: OS First Series (1817) [sheet 19](https://www.visionofbritain.org.uk/maps/sheet/first_edition/lm_19) or ["slippy map" centred on Frome](https://www.visionofbritain.org.uk/maps/series?xCenter=3172813.46805&yCenter=2786460.29441&scale=63360&viewScale=181417.4208&mapLayer=nineteenth&subLayer=first_edition&title=Ordnance%20Survey%20and%20Ordnance%20Survey%20of%20Scotland%20First%20Series&download=true) - used as an indicator of how much of the canal was actually built
  - This work is based on data provided through [www.VisionofBritain.org.uk](https://www.visionofbritain.org.uk/) and uses historical material which is copyright of the Great Britain Historical GIS Project and the University of Portsmouth
  - Copyright &copy; 2004-2015 of the Great Britain Historical GIS Project and the University of Portsmouth. This work is licensed under the Creative Commons Attribution 4.0 [(CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/) International License.
- **British Library**: [Edmund Crocker Frome map (1808)](https://britishlibrary.georeferencer.com/maps/80517dd5-3bd7-567f-be4a-4bb54b56dbf6/) - used as an indicator of how much of the canal was actually built
  - Part of the British Library collection: [Terms & Conditions](https://www.bl.uk/about-us/terms-and-conditions/websites-and-online-services)
  - Georeferencing: Copyright &copy; 2019 [Klokan Technologies GmbH](http://klokantech.com/)
- **UK Parliament Archives**: William Bennet’s 1795 survey of entire canal [Abstract at UK Parliamentary Archives](https://archives.parliament.uk/collections/getrecord/GB61_HL_PO_PB_3_plan5) - planned route traced from a georeferenced copy of the map
  - permission to trace the canal path within this map granted for this project (publishing of the original map would require explicit licensing)
  - (map not available online, but can be viewed in person by arrangement)
- **Environment Agency**: LiDAR elevation data & Vertical Aerial Photography datasets - used for locating unmapped fragments of the canal and for accurately aligning mapped features; WMS LiDAR data streaming is also used directly in the web map to provide alternative web map base layers
  - &copy; Environment Agency copyright and/or database right 2021 All rights reserved
  - [Open Data from the Environment Agency Geomatics Team](https://experience.arcgis.com/experience/753ad2ebd3554fa696885b8c366c3049) used under the [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
  - These datasets and others can be viewed with the [Environment Agency Survey Open Data Index Catalogues](https://environment.maps.arcgis.com/apps/webappviewer/index.html?id=f765c2a97d644f08927d5cd5abe58d87)
  - Links for downloading or streaming datasets can be found on the [Defra Data Services Platform](https://environment.data.gov.uk/)

Other sources used:

- Book: "The Dorset & Somerset Canal", Kenneth R. Clew, 1971

Related further information on the Dorset & Somerset Canal (not directly used in this project):

- Somerset Historic Environment Records:
  - 23312: [Dorset and Somerset Canal](https://www.somersetheritage.org.uk/record/23312)
  - 15567: [Fussell balance lock trial site, Mells](https://www.somersetheritage.org.uk/record/15567)
  - 26100: [Excavation (2007), Balance Lock, Newbury Firs, Mells](https://www.somersetheritage.org.uk/record/26100)
  - 15568: [Fussell balance locks, Great Elm](https://www.somersetheritage.org.uk/record/15568)
  - 29301: [Murtry Aqueduct, Murtry Bottom](https://www.somersetheritage.org.uk/record/29301)
- Historic England listing:
  - 1174214: [Murtry Aqueduct](https://historicengland.org.uk/listing/the-list/list-entry/1174214)
- South west Heritage Trust: Somerset Archive Catalogue: [Map of Mells](https://somerset-cat.swheritage.org.uk/records/DD/SAS/C549/17) (apparently showing the tunnel at Goodeaves Farm)
- BBC Open Country: episode ["The Canal That Never Was"](https://www.bbc.co.uk/sounds/play/b01p42w4)
- Narrowboat Magazine article: [Dorset & Somerset Canal](https://narrowboatmagazine.com/converted/33910) (Richard Dean, 2007) - full article only visible to magazine subscribers
- Peter Hardcastle _"Canals and Waterways: Roots & Routes"_ article: [Dorset & Somerset Canal](https://web.archive.org/web/20121010151951/http://www.canals.btinternet.co.uk/canals/dorsetandsomersetcanal.htm) - now only available with photos via this Internet Archive link
- Wikipedia: [Dorset and Somerset Canal](https://en.wikipedia.org/wiki/Dorset_and_Somerset_Canal)
