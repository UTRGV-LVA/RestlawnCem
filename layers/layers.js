var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GraveMarkers_1 = new ol.format.GeoJSON();
var features_GraveMarkers_1 = format_GraveMarkers_1.readFeatures(json_GraveMarkers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GraveMarkers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GraveMarkers_1.addFeatures(features_GraveMarkers_1);
var lyr_GraveMarkers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GraveMarkers_1, 
                style: style_GraveMarkers_1,
                popuplayertitle: "Grave Markers",
                interactive: true,
                title: '<img src="styles/legend/GraveMarkers_1.png" /> Grave Markers'
            });
var format_GraveCrosses_2 = new ol.format.GeoJSON();
var features_GraveCrosses_2 = format_GraveCrosses_2.readFeatures(json_GraveCrosses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GraveCrosses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GraveCrosses_2.addFeatures(features_GraveCrosses_2);
var lyr_GraveCrosses_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GraveCrosses_2, 
                style: style_GraveCrosses_2,
                popuplayertitle: "Grave Crosses",
                interactive: true,
                title: '<img src="styles/legend/GraveCrosses_2.png" /> Grave Crosses'
            });
var format_ICFPoints_3 = new ol.format.GeoJSON();
var features_ICFPoints_3 = format_ICFPoints_3.readFeatures(json_ICFPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICFPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICFPoints_3.addFeatures(features_ICFPoints_3);
var lyr_ICFPoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICFPoints_3, 
                style: style_ICFPoints_3,
                popuplayertitle: "ICF Points",
                interactive: true,
                title: '<img src="styles/legend/ICFPoints_3.png" /> ICF Points'
            });
var format_Fence_4 = new ol.format.GeoJSON();
var features_Fence_4 = format_Fence_4.readFeatures(json_Fence_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fence_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fence_4.addFeatures(features_Fence_4);
var lyr_Fence_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fence_4, 
                style: style_Fence_4,
                popuplayertitle: "Fence",
                interactive: true,
                title: '<img src="styles/legend/Fence_4.png" /> Fence'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GraveMarkers_1.setVisible(true);lyr_GraveCrosses_2.setVisible(true);lyr_ICFPoints_3.setVisible(true);lyr_Fence_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GraveMarkers_1,lyr_GraveCrosses_2,lyr_ICFPoints_3,lyr_Fence_4];
lyr_GraveMarkers_1.set('fieldAliases', {'Name': 'Name', 'Hyperlink': 'Hyperlink', });
lyr_GraveCrosses_2.set('fieldAliases', {'Type': 'Type', });
lyr_ICFPoints_3.set('fieldAliases', {'Type': 'Type', });
lyr_Fence_4.set('fieldAliases', {'Type': 'Type', });
lyr_GraveMarkers_1.set('fieldImages', {'Name': '', 'Hyperlink': '', });
lyr_GraveCrosses_2.set('fieldImages', {'Type': '', });
lyr_ICFPoints_3.set('fieldImages', {'Type': '', });
lyr_Fence_4.set('fieldImages', {'Type': '', });
lyr_GraveMarkers_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Hyperlink': 'inline label - always visible', });
lyr_GraveCrosses_2.set('fieldLabels', {'Type': 'inline label - always visible', });
lyr_ICFPoints_3.set('fieldLabels', {'Type': 'inline label - always visible', });
lyr_Fence_4.set('fieldLabels', {'Type': 'inline label - always visible', });
lyr_Fence_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});