var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
/*
var url = 'recipes.cfm';
	request(url, function(err, resp, body){
		if (err)
			throw err;
		$ = cheerio.load(body);
		//console.log($);
	});
	*/
// 1. Sample
/*
$ = cheerio.load('<html><head></head><body><div id="content"><div id="sidebar"></div><div id="main"><div id="breadcrumbs"></div><table id="data"><tr><th>Name</th><th>Address</th></tr><tr><td class="name">John</td><td class="address">Address of John</td></tr><tr><td class="name">Susan</td><td class="address">Address of Susan</td></tr></table></div></div></body></html>');

$('#data .name').each(function() {
    console.log($(this).text());
});
*/

// pull from remote file
/*
var url = 'http://www.kidney.org/patients/kidneykitchen/recipes.cfm';
console.log(url);

request(url, function(err, resp, body){
	if (err)
		throw err;
	$ = cheerio.load(body);
	console.log(url);
	$('#content .title').each(function(){
		console.log($(this).text());
	});
	
	
});
*/

//pull from local file
var file = 'recipes.cfm';
console.log('File Name: ' + file);

fs.readFile(file, function(err, data){
	if (err) throw err;
	// console.log(data);
	$ = cheerio.load(data);
	// console.log(file);
	$('#content > .title').each(function(i, elem){
		cls = $(elem).text(),
		filename = cls + '.txt',
		content = $.html(elem);
		fs.writeFile(filename, content);
		console.log('Titles: ' + $(this).text());
		// fs.writeFile('titles.txt', $(this).html());
	 });
	$('#content').each(function(){
		//filename = +'.txt',
		// console.log('Content: ' + $(this).text());
		//fs.writeFile(filename, $(this).html());
	 });
});



/* 2. sample
pools = {
    'Aloha': 3,
    'Beaverton': 15,
    'Conestoga': 12,
    'Harman': 11,
    'Raleigh': 6,
    'Somerset': 22,
    'Sunset': 5,
    'Tualatin Hills': 2
};
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (pool in pools) {
    var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);
        console.log(pool);
        // TODO: scraping goes here!
    });
}
*/