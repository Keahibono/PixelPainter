var models = require('../models');
var Drawing = models.Drawing;


var colors = [
	{	data: [
			["#000000", "#ffffff", "#000000"],
			["#ffffff", "#000000", "#ffffff"],
			["#000000", "#ffffff", "#000000"]
		]
	},
	{	data: [
			["#ffff00", "#008000", "#ffff00"],
			["#008000", "#ffff00", "#008000"],
			["#ffff00", "#008000", "#ffff00"]
		]
	}
];

Drawing.bulkCreate(colors);
