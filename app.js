var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var passport=require('passport');
var LocalStrategy=require('passport-local');

mongoose.connect("mongodb://localhost/solace", { useNewUrlParser: true , useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, '/public')));
//passport config
app.use(require("express-session")({
	secret:"divesh abhishek kheman",
	resave:false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()) );
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());



app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,process.env.IP,function(){
	console.log("server started.");
});

app.get("/",function(req,res){
	res.render("index.ejs");
});
app.get("/contact",function(req,res){
    res.render("contact.ejs");
});
app.get("/notification",function(req,res){
    res.render("notification.ejs");
});
app.get("/hbed",function(req,res){
    res.render('hospitalbed.ejs');
});
app.get("/mbed",function(req,res){
    res.render('medicalbeds.ejs');
});