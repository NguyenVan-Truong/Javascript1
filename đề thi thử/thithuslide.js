let arr=["nguoinhen1.jpg","nguoinhen2.1.jpg","nguoinhen2.2.jpg","nguoinhen3.jpg","nguoinhen4.jpg","nguoinhen5.jpg","nguoinhencuoi.jpg",]
let index=0;
let x;
let y;
function next(){
    if(index<arr.length-1){
        index++;
    }else{
        index=0;
    }
    document.querySelector("#img").src=arr[index]
    console.log(arr[index])
}
function play(){
    clearInterval(x);
    y=setInterval(next,2000);
}
function stop(){
    clearInterval(y);
    clearInterval(x);
}
function quaylai(){
    if(index>0){
        index--;
    }else{
        index=arr.length-1;
    }
    document.querySelector("#img").src=arr[index];
}
function chaynguoc(){
    clearInterval(y);
    x=setInterval(quaylai,2000);
}
play();