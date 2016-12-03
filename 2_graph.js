function __core(){
    var draw = SVG('drawing')
    var circle_1 = draw.circle(50).style({ fill: 'red' })
    var circle_2 = draw.circle(50).style({ fill: 'red' })
    var line = draw.line(50, 50, 450, 450).stroke({ width: 1 })
    circle_1.attr({ cx:50, cy:50 })
    circle_2.attr({ cx:450, cy:450 })
}
function mainSVG(){
    if (SVG.supported) {
	__core();
    } else {
	alert('SVG not supported')
    }
}
