/*
var express = require('express');
var router = express.Router();
var session = require('express-session');
var path = require("path");
var fs = require("fs");
var crypto = require("crypto");
var mailer = require('nodemailer');
*/

exports.index = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('index', { 
		  title: 'main' 
		});
};
exports.qna = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('qna', { 
		  title: 'qna' 
		});
};
exports.new_letter = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('new_letter', { 
		  title: 'new_letter' 
		});
};
exports.magnet = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('magnet', { 
		  title: 'magnet' 
		});
};
exports.videntifier = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('videntifier', { 
		  title: 'videntifier' 
		});
};
exports.netclean = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('netclean', { 
		  title: 'netclean' 
		});
};
exports.media_analyze = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('media_analyze', { 
		  title: 'media_analyze' 
		});
};
exports.image_analyze = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('image_analyze', { 
		  title: 'image_analyze' 
		});
};
exports.copyright_analyze = function(req, res,  next){
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	
	
	res.render('copyright_analyze', { 
		  title: 'copyright_analyze' 
		});
};

/*
router.post('/demo', function(req, res, next){
	var name=req.body.name;
	var phone=req.body.phone;
	var email=req.body.email;
	var product=req.body.product;
	var transporter = mailer.createTransport();
	transporter.sendMail({
	    from: email,
	    to: 'insec@insec.co.kr,verbalk@insec.co.kr',
	    subject: '[ GRIFFEYE 데모요청 ] '+name+'님의 등록 요청 입니다',
	    html: '<p>이름 : '+name+'</p>'+
	    	'<p>연락처 : '+phone+'</p>'+
	    	'<p>이메일 : '+email+'</p>'+
	    	'<p>관심제품 : '+product+'</p>'
	},function(err,msg){
		if(!err){
			res.send("<script type='text/javascript'>alert('제품문의가 완료되었습니다.'); window.location.replace('/');</script>");
		}else{
			res.send("<script type='text/javascript'>alert('알 수 없는 이유로 전송에 실패했습니다. 다시 시도해주세요.'); window.location.replace('/');</script>");
		}
	});
});

*/
