var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitinglist-data.js');
var path = require('path');



module.exports = function(app){

	app.get('/api/tables', function(req, res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitListData);
	});


	app.post('/api/tables', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		if(tableData.length < 5 ){
			tableData.push(req.body);
			res.json(true); // KEY LINE
		}

		else{
			waitListData.push(req.body);
			res.json(false); 
		}

	});

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		tableData = [];
		waitListData = [];

		console.log(tableData);
	})
}

