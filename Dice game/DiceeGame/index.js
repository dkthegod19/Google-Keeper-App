function randomgeneration(){
    var randomnumber=Math.random(); 
    randomnumber=Math.floor(randomnumber*6)+1;
    var randomdiceimage="images/dice"+randomnumber+".png";
    return randomdiceimage;
}
var image1=randomgeneration();
var image2=randomgeneration();

document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(image1>image2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(image2>image1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}