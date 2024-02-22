showAllHiddenLayers();

function showAllHiddenLayers() {
  try {
        var doc = app.activeDocument;
        for(var i = 0 ; i < doc.layers.length;i++){
            doc.layers[i].visible = true;
            doc.activeLayer = doc.layers[i];
            quickSel(5,5,0);
            doc.selection.clear();
        }
      } catch(e) {}
}

function hideAllLayers() {
  try {
    var doc = app.activeDocument;
    for(var i = 0 ; i < doc.layers.length;i++){
        doc.layers[i].visible = false;
    }
  } catch(e) {}
}

function quickSel (x, y, tol){
var idsetd = charIDToTypeID( "setd" );
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref1.putProperty( idChnl, idfsel );
    desc2.putReference( idnull, ref1 );
    var idT = charIDToTypeID( "T   " );
        var desc3 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc3.putUnitDouble( idHrzn, idPxl, x );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc3.putUnitDouble( idVrtc, idPxl, y);
    var idPnt = charIDToTypeID( "Pnt " );
    desc2.putObject( idT, idPnt, desc3 );
    var idTlrn = charIDToTypeID( "Tlrn" );
    desc2.putInteger( idTlrn, tol);
    var idAntA = charIDToTypeID( "AntA" );
    desc2.putBoolean( idAntA, true );
    var idCntg = charIDToTypeID( "Cntg" );
    desc2.putBoolean( idCntg, true );
    executeAction( idsetd, desc2, DialogModes.NO );        
};

function saveAsGif() {
    // create frame animation
    var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
    executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );
    // create animation from layers
    var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
    var desc32 = new ActionDescriptor();
    executeAction( idanimationFramesFromLayers, desc32, DialogModes.NO );
}

function SaveForWebGIF(saveFile) {  
var sfwOptions = new ExportOptionsSaveForWeb();   
   sfwOptions.format = SaveDocumentType.COMPUSERVEGIF;
   sfwOptions.transparency = 1;  
   sfwOptions.includeProfile = false;   
   sfwOptions.interlaced = 1;   
   sfwOptions.optimized = true;
   sfwOptions.ColorReductionType = ColorReductionType.SELECTIVE;
   sfwOptions.dither = Dither.NONE;  
   sfwOptions.ditherAmount = 80;
   sfwOptions.webSnap = 0;
   sfwOptions.colors = 128; 
activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, sfwOptions);  
}