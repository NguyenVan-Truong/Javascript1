let img =["nguoinhen1.jpg","nguoinhen2.1.jpg","nguoinhen2.2.jpg","nguoinhen3.jpg","nguoinhen4.jpg","nguoinhen5.jpg","nguoinhencuoi.jpg"];
let indext=0;
var i;
var y;
function next(){
    if(indext<img.length-1){
        indext++;
    }else{
        indext=0;
    }
    document.querySelector("#img").src=img[indext]
}
function nguoc(){
    if(indext>0){
        indext--
    }else{
        indext=img.length-1;
    }
    document.querySelector("#img").src=img[indext]
}
function play(){
    i=setInterval(next,2000);
    clearInterval(y);
}
function chaynguoc(){
    clearInterval(i);
    y=setInterval(nguoc,2000);
}
function stop(){
    clearInterval(i);
    clearInterval(y)
}
play();