function sample_1(){
    var draw = SVG('drawing')
    var rect = draw.rect(100, 100)    
}
function mainSVG(){
    if (SVG.supported) {
	sample_1();
    } else {
	alert('SVG not supported')
    }
}
