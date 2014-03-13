var path = require('path');
var htmlToText = require('html-to-text');
var fs = require('fs');


// html to text
htmlToText.fromFile(path.join(__dirname, 'test.html'), {
    tables: ['#invoice', '.address']
}, function(err, text) {
    if (err) return console.error(err);
    console.log('\n\n html scraped: \n\n' + text); // loads text in console / terminal window
    fs.writeFile('test.txt', text); //writes the text to test.txt file
});

htmlToText.fromFile(path.join(__dirname, 'recipes.cfm'), {
   //tables: ['#invoice', '.address']
}, function(err, text) {
    if (err) return console.error(err);
    console.log('\n\n html scraped: \n\n' + text); // loads text in console / terminal window
    fs.writeFile('recipe.txt', text); //writes the text to test.txt file
});
//write to file Hello World test
/*
fs.writeFile('helloworld.txt', 'Hello World', function(err){
	if (err) return console.log(err);
	console.log('Hello World' > 'helloworld.txt'); //writes "hello world" to helloworld.txt
	console.log('\n\n Hellow World \n\n');
});
*/
// list all files + folders in current directory
fs.readdir(process.cwd(), function(err,files){
	if(err){
		console.log(err);
		return;
	}
	console.log('\n\nFiles + Folders List: ' + files + '\n\n');
	fs.writeFile('files.txt', files); // write list of files + folders to "files.txt"
});
/*
// change directory to "node_modules"
console.log('\n\n Starting directory: \n\n' + process.cwd());
try{
	process.chdir('node_modules');
	console.log('\n\n New directory: \n\n' + process.cwd());
}
catch(err){
	console.log('\n\n chdir: \n\n' + err);
}

// list all files + folders in "node_modules"
fs.readdir(process.cwd(), function(err,filestoo){
	if(err){
		console.log(err);
		return;
	}
	console.log('\n\nFiles + Folders List: ' + filestoo + '\n\n');
	fs.writeFile('filestoo.txt', filestoo ); // write list of files + folders to "filestoo.txt"
});
*/