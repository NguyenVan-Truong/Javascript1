let user = document.querySelector("#user");
let mk = document.querySelector("#mk");
let nhaplaimk = document.querySelector("#nhaplaimk");
let email = document.querySelector("#email");
let loai = document.querySelector("#loai");
let diachi = document.querySelector("input[name='diachi']:checked");
let phiship = document.querySelector("#phiship");
let tong = document.querySelector("#tong");
let checkuser = document.querySelector("#checkuser");
let checkmk = document.querySelector("#checkmk")
let checkemail = document.querySelector("#checkemail");
let checknhaplaimk = document.querySelector("#checknhaplaimk")
let checkdiachi = document.querySelector("#checkdiachi")
let checkloai = document.querySelector("#checkloai")
let gia = document.querySelector("#gia");
let soluong = document.querySelector("#soluong");
let checksoluong = document.querySelector("#checksoluong")
let btn = document.querySelector("#btn")
let noithanh=document.querySelector("#noithanh");
let ngoaithanh=document.querySelector("#ngoaithanh")
let isdiachi = false;
let arr = []
// let isdiachi=false;
// function emailcheck(){
//     let a=email.value.indexOf("@");
//     let dot=email.value.indexOf(".");
//     if(a<1||dot<a-1){
//         checkemail.innerHTML="email không đúng định dạng"
//         return false;
//     }else{
//         checkemail.innerHTML=""
//         return true;
//     }
// }




function emailcheck() {
    let a = email.value.indexOf("@");
    let dot = email.value.indexOf(".");
    if (a < 1 || dot < a - 1) {
        checkemail.innerHTML = " * email không đúng định dạng"
        return false;
    } else {
        checkemail.innerHTML = ''
        return true;
    }

}



function check() {
    let checkreult = true;

    if (user.value.trim() == "") {
        checkuser.innerHTML = "*Bắt buộc nhập tên"
        checkreult = false;
    } else {
        checkuser.innerHTML = ""
        checkreult = true;
    }

    if (mk.value.trim() == "") {
        checkmk.innerHTML = "*Bắt buộc nhập mk"
        checkreult = false;
    } else {
        checkmk.innerHTML = ""
        checkreult = true;
    }


    if (nhaplaimk.value != mk.value) {
        checknhaplaimk.innerHTML = "*không đúng với mk bạn đã đặt"
        checkreult = false;
    } else if (nhaplaimk.value == mk.value) {
        checknhaplaimk.innerHTML = ""
        checkreult = true;
    }

    if (emailcheck() == true) {
        checkreult = true;
    } else {
        checkreult = false;
    }
    if (soluong.value <= 0) {
        checksoluong.innerHTML = "nhập số lượng lớn hơn 0"
        checkreult = false;
    } else {
        checksoluong.innerHTML = ""
        checkreult = true;
    }
    if (isdiachi) {
        checkdiachi.innerHTML = ''
        checkreult = true
    } else {
        checkdiachi.innerHTML = '* bắt buộc nhập địa chỉ'
        checkreult = false
    }
    if(loai.value==""){
        checkloai.innerHTML='Bắt buocj nhập loại';
        checkreult =false
    }else{
        checkloai.innerHTML='';
        checkreult =true
    }

    return checkreult;
}




// function freeship() {

//     if ("input[name='diachi']:checked=='#noithanh'") {

//         phiship.value = 0;
//         isdiachi = true;
//     }


// }
// function ship() {

//     if ("input[name='diachi']:checked=='#ngoaithanh'") {

//         phiship.value = 50000;
//         isdiachi = true;
//     }


// }
// noithanh.addEventListener("change", function () {
//     freeship();
//     ganTien();
// })
// ngoaithanh.addEventListener("change", function () {
//     ship();
//     ganTien();
// })
// function ganTien() {
//     var tongtien = 0;
//     tong.value = Number(loai.value) * Number(soluong.value) + Number(phiship.value);
//     tongtien += tong.value;
// }
// loai.addEventListener("change", function () {
//     gia.value = loai.value;
//     ganTien();
// })
// soluong.addEventListener("change", function () {
//     ganTien();
// })
function freeship(){
    if("input[name='diachi']:checked=='#noithanh'"){
        
        phiship.value=0;
        isdiachi=true;
    }
}
 function matShip(){
    if("input[name='diachi']:checked=='#ngoaithanh'"){
        
        phiship.value=50000;
        isdiachi=true;
    }
}
noithanh.addEventListener("click",function(){
   freeship();
   ganTien();
})
ngoaithanh.addEventListener("click",function(){
    matShip();
    ganTien();
})

function ganTien(){
    let tongtien=0;
    tong.value=Number(loai.value)*Number(soluong.value)+Number(phiship.value);
    tongtien+=tong.value;
}
loai.addEventListener("change",function(){
    gia.value=loai.value
    ganTien();
})
soluong.addEventListener("change",function(){
    ganTien();
})

btn.addEventListener("click", function () {
    if (check() == true) {
        let taikhoan = {
            user: user.value,
            mk: mk.value,
            nhaplaimk: nhaplaimk.value,
            email: email.value,
            loai: loai.value,
            // diachi: diachi.value,
            phiship: phiship.value,
            tong: tong.value
        }
        alert("thành công")

        arr.push(taikhoan);
        console.log(arr)
    }
})
