var truong=document.getElementById("hayho");
var conten= truong.getContext(`2d`);
var con=truong.getContext('2d');
con.font="30px Arial "; 
con.fillText("Trường Hay Ho",1050,50);  
function end(){
    // con.font="30px Arial "; 
    // con.fillText("Trường Hay Ho",1050,50); 
    con.fillStyle='red';
}
nhanvat = {
    x:100,y:500
}
setInterval(start,50);
setInterval(end,100);
function start(){
    conten.clearRect(0,0,1000,1000);
    conten.fillRect(nhanvat.x,nhanvat.y,40,40);
    conten.fillStyle=`black`;
}
function len(){
    nhanvat.y-=30;
}
function xuong(){
    nhanvat.y+=30;
}
function trai(){
    nhanvat.x-=30;
}
function phai(){
    nhanvat.x+=30;
}
function troVe(){
    nhanvat.x=100
    nhanvat.y=100
}
function tudong(){
    nhanvat.y *=30;
}

// document.addEventListener("keydown",key=>{
//     switch(key.keycode){
//         case 37:
//             nhanvat.x -=5;
//             break;
//         case 38 :
//             nhanvat.y -=5;
//             break
//         case 39:
//             nhanvat.x +=5;
//             break;
//         case 40:
//             nhanvat.y +=5;
//             break;

//     }

// });