var wms_layers = [];

var format_Basemap2017curb_0 = new ol.format.GeoJSON();
var jsonSource_Basemap2017curb_0 = new ol.source.Vector({
    attributions: ' ',
    format: format_Basemap2017curb_0
});var lyr_Basemap2017curb_0 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Basemap2017curb_0, 
    style: style_Basemap2017curb_0,
    interactive: true,
    title: 'Base map 2017: curb'
});

function getBasemap2017curb_0Json(geojson) {
    var features_Basemap2017curb_0 = format_Basemap2017curb_0.readFeatures(geojson);
    jsonSource_Basemap2017curb_0.addFeatures(features_Basemap2017curb_0);
}
var format_Basemap2017fence_1 = new ol.format.GeoJSON();
var jsonSource_Basemap2017fence_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_Basemap2017fence_1
});var lyr_Basemap2017fence_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Basemap2017fence_1, 
    style: style_Basemap2017fence_1,
    interactive: true,
    title: 'Base map 2017: fence'
});

function getBasemap2017fence_1Json(geojson) {
    var features_Basemap2017fence_1 = format_Basemap2017fence_1.readFeatures(geojson);
    jsonSource_Basemap2017fence_1.addFeatures(features_Basemap2017fence_1);
}
var format_Basemap2017footpath_2 = new ol.format.GeoJSON();
var jsonSource_Basemap2017footpath_2 = new ol.source.Vector({
    attributions: ' ',
    format: format_Basemap2017footpath_2
});var lyr_Basemap2017footpath_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Basemap2017footpath_2, 
    style: style_Basemap2017footpath_2,
    interactive: true,
    title: 'Base map 2017: footpath'
});

function getBasemap2017footpath_2Json(geojson) {
    var features_Basemap2017footpath_2 = format_Basemap2017footpath_2.readFeatures(geojson);
    jsonSource_Basemap2017footpath_2.addFeatures(features_Basemap2017footpath_2);
}
var format_Cotedenivel_3 = new ol.format.GeoJSON();
var jsonSource_Cotedenivel_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_Cotedenivel_3
});var lyr_Cotedenivel_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Cotedenivel_3, 
    style: style_Cotedenivel_3,
    interactive: true,
    title: 'Cote de nivel'
});

function getCotedenivel_3Json(geojson) {
    var features_Cotedenivel_3 = format_Cotedenivel_3.readFeatures(geojson);
    jsonSource_Cotedenivel_3.addFeatures(features_Cotedenivel_3);
}
var format_Curbedenivel_4 = new ol.format.GeoJSON();
var jsonSource_Curbedenivel_4 = new ol.source.Vector({
    attributions: ' ',
    format: format_Curbedenivel_4
});var lyr_Curbedenivel_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Curbedenivel_4, 
    style: style_Curbedenivel_4,
    interactive: true,
    title: 'Curbe de nivel'
});

function getCurbedenivel_4Json(geojson) {
    var features_Curbedenivel_4 = format_Curbedenivel_4.readFeatures(geojson);
    jsonSource_Curbedenivel_4.addFeatures(features_Curbedenivel_4);
}
var format_curves_5 = new ol.format.GeoJSON();
var features_curves_5 = format_curves_5.readFeatures(json_curves_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curves_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curves_5.addFeatures(features_curves_5);
var lyr_curves_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_curves_5, 
                style: style_curves_5,
                popuplayertitle: 'curves',
                interactive: true,
                title: '<img src="styles/legend/curves_5.png" /> curves'
            });
var format_capital_constructions_6 = new ol.format.GeoJSON();
var features_capital_constructions_6 = format_capital_constructions_6.readFeatures(json_capital_constructions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capital_constructions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_constructions_6.addFeatures(features_capital_constructions_6);
var lyr_capital_constructions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capital_constructions_6, 
                style: style_capital_constructions_6,
                popuplayertitle: 'capital_constructions',
                interactive: true,
                title: '<img src="styles/legend/capital_constructions_6.png" /> capital_constructions'
            });
var format_border_7 = new ol.format.GeoJSON();
var features_border_7 = format_border_7.readFeatures(json_border_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_border_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_border_7.addFeatures(features_border_7);
var lyr_border_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_border_7, 
                style: style_border_7,
                popuplayertitle: 'border+',
                interactive: true,
                title: '<img src="styles/legend/border_7.png" /> border+'
            });
var format_water_bodies_8 = new ol.format.GeoJSON();
var features_water_bodies_8 = format_water_bodies_8.readFeatures(json_water_bodies_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_bodies_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_bodies_8.addFeatures(features_water_bodies_8);
var lyr_water_bodies_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_bodies_8, 
                style: style_water_bodies_8,
                popuplayertitle: 'water_bodies',
                interactive: true,
                title: '<img src="styles/legend/water_bodies_8.png" /> water_bodies'
            });
var group_Map = new ol.layer.Group({
                                layers: [lyr_curves_5,lyr_capital_constructions_6,lyr_border_7,lyr_water_bodies_8,],
                                fold: "open",
                                title: 'Map'});

lyr_Basemap2017curb_0.setVisible(true);lyr_Basemap2017fence_1.setVisible(true);lyr_Basemap2017footpath_2.setVisible(true);lyr_Cotedenivel_3.setVisible(true);lyr_Curbedenivel_4.setVisible(true);lyr_curves_5.setVisible(true);lyr_capital_constructions_6.setVisible(true);lyr_border_7.setVisible(true);lyr_water_bodies_8.setVisible(true);
var layersList = [lyr_Basemap2017curb_0,lyr_Basemap2017fence_1,lyr_Basemap2017footpath_2,lyr_Cotedenivel_3,lyr_Curbedenivel_4,group_Map];
lyr_Basemap2017curb_0.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'layer': 'layer', 'medium': 'medium', 'z': 'z', 'layer_name': 'layer_name', });
lyr_Basemap2017fence_1.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'layer': 'layer', 'medium': 'medium', 'z': 'z', 'layer_name': 'layer_name', });
lyr_Basemap2017footpath_2.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'layer': 'layer', 'medium': 'medium', 'z': 'z', 'layer_name': 'layer_name', });
lyr_Cotedenivel_3.set('fieldAliases', {'objectid': 'objectid', 'text_angle': 'text_angle', 'text_size': 'text_size', 'textstring': 'textstring', });
lyr_Curbedenivel_4.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'h': 'h', 'styleid': 'styleid', });
lyr_curves_5.set('fieldAliases', {'id': 'id', 'Cota': 'Cota', });
lyr_capital_constructions_6.set('fieldAliases', {'id': 'id', 'House_NR': 'House_NR', 'Type': 'Type', 'Access': 'Access', });
lyr_border_7.set('fieldAliases', {'id': 'id', });
lyr_water_bodies_8.set('fieldAliases', {'id': 'id', });
lyr_Basemap2017curb_0.set('fieldImages', {'gid': '', 'shape_leng': '', 'layer': '', 'medium': '', 'z': '', 'layer_name': '', });
lyr_Basemap2017fence_1.set('fieldImages', {'gid': '', 'shape_leng': '', 'layer': '', 'medium': '', 'z': '', 'layer_name': '', });
lyr_Basemap2017footpath_2.set('fieldImages', {'gid': '', 'shape_leng': '', 'layer': '', 'medium': '', 'z': '', 'layer_name': '', });
lyr_Cotedenivel_3.set('fieldImages', {'objectid': '', 'text_angle': '', 'text_size': '', 'textstring': '', });
lyr_Curbedenivel_4.set('fieldImages', {'objectid': '', 'shape_leng': '', 'h': '', 'styleid': '', });
lyr_curves_5.set('fieldImages', {'id': 'TextEdit', 'Cota': 'TextEdit', });
lyr_capital_constructions_6.set('fieldImages', {'id': '', 'House_NR': '', 'Type': '', 'Access': '', });
lyr_border_7.set('fieldImages', {'id': 'TextEdit', });
lyr_water_bodies_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Basemap2017curb_0.set('fieldLabels', {'gid': 'no label', 'shape_leng': 'no label', 'layer': 'no label', 'medium': 'no label', 'z': 'no label', 'layer_name': 'no label', });
lyr_Basemap2017fence_1.set('fieldLabels', {'gid': 'no label', 'shape_leng': 'no label', 'layer': 'no label', 'medium': 'no label', 'z': 'no label', 'layer_name': 'no label', });
lyr_Basemap2017footpath_2.set('fieldLabels', {'gid': 'no label', 'shape_leng': 'no label', 'layer': 'no label', 'medium': 'no label', 'z': 'no label', 'layer_name': 'no label', });
lyr_Cotedenivel_3.set('fieldLabels', {'objectid': 'no label', 'text_angle': 'no label', 'text_size': 'no label', 'textstring': 'no label', });
lyr_Curbedenivel_4.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'no label', 'h': 'no label', 'styleid': 'no label', });
lyr_curves_5.set('fieldLabels', {'id': 'no label', 'Cota': 'no label', });
lyr_capital_constructions_6.set('fieldLabels', {'id': 'no label', 'House_NR': 'no label', 'Type': 'no label', 'Access': 'no label', });
lyr_border_7.set('fieldLabels', {'id': 'no label', });
lyr_water_bodies_8.set('fieldLabels', {'id': 'no label', });
lyr_water_bodies_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});