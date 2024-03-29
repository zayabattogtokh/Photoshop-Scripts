﻿selectAllLayers();

function selectAllLayers() {
  // Select all layers (doesn't include Background)
  try {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    desc.putReference( charIDToTypeID('null'), ref );
    executeAction( stringIDToTypeID('selectAllLayers'), desc, DialogModes.NO );
  } catch(e) {}
  // Add Background Layer to the selection (if possible)
  try {
    activeDocument.backgroundLayer;
    var bgID = activeDocument.backgroundLayer.id;
    var ref = new ActionReference();
    var desc = new ActionDescriptor();
    ref.putIdentifier(charIDToTypeID('Lyr '), bgID);
    desc.putReference(charIDToTypeID('null'), ref);
    desc.putEnumerated( stringIDToTypeID('selectionModifier'), stringIDToTypeID('selectionModifierType'), stringIDToTypeID('addToSelection') );
    desc.putBoolean(charIDToTypeID('MkVs'), false);
    executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
  } catch(e) {}
}