var express = require('express');
var router = express.Router();
var User= require('../models/user');


router.get('/',function(req,res){
	User.getAllUsers(err,user)
	if(err){
		res.send(err);
}
	res.json();

});

router.post('/',function(req,res){
	var user =req.body;
	User.addUser(user,function(err, user){

if(err){
	res.send(err);
}
res.send(user);	


	});
});

module.exports = router;