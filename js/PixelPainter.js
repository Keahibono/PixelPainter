var gridSize = prompt("How Big Do You Want The Grid?", 6);

var colorString = "000000 000033 000066 000099 0000CC 0000FF 009900 009933 009966 009999 0099CC 0099FF 00FF00 00FF33 00FF66 00FF99 00FFCC 00FFFF CC0000 CC0033 CC0066 CC0099 CC00CC CC00FF 33FF00 33FF33 33FF66 33FF99 33FFCC 33FFFF 666600 666633 666666 666699 6666CC 6666FF 66FF00 66FF33 66FF66 66FF99 66FFCC 66FFFF 996600 996633 996666 996699 9966CC 9966FF 99FF00 99FF33 99FF66 99FF99 99FFCC 99FFFF CC6600 CC6633 CC6666 CC6699 CC66CC CC66FF CCFF00 CCFF33 CCFF66 CCFF99 CCFFCC CCFFFF FF6600 FF6633 FF6666 FF6699 FF66CC FF66FF FFFF00 FFFF33 FFFF66 FFFF99 FFFFCC FFFFFF";

var colorArray = colorString.split(" ");
var rGB = ""
var color = 'white';

$(document).ready(function(){

$body = $('body');
$leftSidebar = $('<div/>', {
'id': "leftSidebar"
});
$body.prepend($leftSidebar);

for (var x = 0; x < colorArray.length; x++){
rGB = "#" + colorArray[x];
$colorSquare = $('<div/>', {
'class': "colorSquare",
'id': rGB,
css: {
backgroundColor: rGB
}
}).prependTo($leftSidebar);
}

$erase = $('<button/>', {
'class': 'erase',
text: 'Erase'
});
$clear = $('<button/>', {
'class': 'clear',
text: 'Clear'
});
$save = $('<button/>', {
'class': 'save',
text: 'Save'
});

$leftSidebar.append($erase, $clear, $save);


for (var i = 0; i < gridSize; i++){
	$('<div/>', {
		'id': "row" + i
	}).appendTo('#pixelPainter');

	for (var k = 0; k < gridSize; k++){
		$('<div/>',{
			'id': "column" + k,
			'class': "square"
		}).appendTo('#row' + i);
	}
}

$('.colorSquare').click(function(){
	color = this.id;
})


$('.square').click(function(){
	$(this).css("backgroundColor", color);
})

$('.erase').click(function(){
	color = "white";
})

$('.clear').click(function(){
	$('.square').css("backgroundColor", 'white');
})

$('.save').click(function(){

})

});