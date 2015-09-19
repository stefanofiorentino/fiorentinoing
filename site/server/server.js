//var EventEmitter = Meteor.npmRequire('events').EventEmitter;
//var fs = Meteor.npmRequire('fs');
//
//var content;
//
//function readFileIfRequired(cb){
//	if (!content)
//	{
//		fs.readFile('/Users/sfiore/devel/lhfcrep/README.md', 'utf8', function(err, data){
//			content = data;
//			console.log('readFileIfRequiread: readFile');
//			cb(err,content);
//		});
//	}
//	else
//	{
//		process.nextTick(function(){
//			console.log('readFileIfRequired: cached');
//			cb(null, content);
//		});
//	}
//}
//
//readFileIfRequired(function(err,data){
//	console.log('1. Lenght:', data.length);
//	
//	readFileIfRequired(function(err,data2){
//		console.log('2. Length:', data2.length);
//	});
//	
//	console.log('Reading file again...');
//});
//
//console.log('Reading file...');