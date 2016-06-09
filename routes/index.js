
exports.login = function(req, res){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	var params = url.parse(req.url, true).query;
	
	var ejs_value = {page:"Login"};
	ejs_value.user = req.session.user;
	
	if (params.timeout) {
		ejs_value.timeout = true;
	}
	
	res.render("pages/login", ejs_value);
};

exports.index = function(req, res){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	var ejs_value = {page:"index"};
	ejs_value.user = req.session.user;
	
	res.render("pages/index", ejs_value);
};









