for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninner=this.innerHTML;
    makesound(buttoninner);
    buttonanimation(buttoninner);
});
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

function buttonanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

function makesound(key){
    switch(key){
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom=new Audio("sounds/tom-1.mp3");
            tom.play();
        break;
        case "i":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "j":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "k":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
            console.log(buttoninner);
    }
}