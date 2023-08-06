const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    //res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.weight);
    var num2=Number(req.body.height);
    var result=num1/(num2*num2);

    res.send("Your BMI is "+result);
}); 
app.listen(3000,function(){
    console.log("Server started on port 3000");
});