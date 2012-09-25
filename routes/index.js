
/*
 * GET home page.
 */

exports.index = function(req, res){
  	console.log(req.files);
	res.render('index', { title: 'Express' });
};
