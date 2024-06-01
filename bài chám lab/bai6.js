// dùng để thông báo document.queryselectoer(#id).innerHTML="* nội dung"
let loai = document.querySelector('#loai');
let gia = document.querySelector('#gia');
let soluong = document.querySelector('#soluong');
let diachi = document.querySelector("input[name='diachi']:checked");
let ship = document.querySelector('#ship')
let tong = document.querySelector("#tong");
let btnnhap = document.querySelector('#btnnhap');
let btnHienThi = document.querySelector('#btnHienThi');
let noithanh = document.querySelector('#noithanh');
let ngoaithanh = document.querySelector('#ngoaithanh');
let arr = [];
 var isdiachi=false;

function check() {
    let checkresult = true;

    if (loai.value == "") {
        document.querySelector('#checkloai').innerHTML = "* bắt buộc nhập nội dung"
        checkresult = false;
    } else {
        document.querySelector('#checkloai').innerHTML = ""
        checkresult = true;
    }
    if (soluong.value <= 0) {
        document.querySelector('#checksoluong').innerHTML = " * bắt buộc số lượng lớn hơn 0"
        checkresult = false;
    } else {
        document.querySelector('#checksoluong').innerHTML = ""
        checkresult = true;
    }
    if (diachi == null) {
        document.querySelector('#checkdiachi').innerHTML = " * bắt buộc nhập địa chỉ"
        checkresult = false;
    } else {
        document.querySelector('#checkdiachi').innerHTML = ""
        checkresult = true;
    }
    return checkresult;
}

function phiship() {
    if ("input[name='diachi']:checked=='#noithanh'") {
        ship.value = 0;
        // isdiachi=true
    }

}
function phishipngoaithanh() {
    if ("input[name='diachi']:checked=='#ngoaithanh'") {
        ship.value = 50000;
        // isdiachi=true;
    }
}
noithanh.addEventListener("click", function () {
    
    phiship();
    ganTien();
})
ngoaithanh.addEventListener("click", function () {
   
    phishipngoaithanh();
    ganTien();
})


function ganTien(){
    tong.value=Number(loai.value)*Number(soluong.value)+Number(ship.value);
    let tongtien=0;
    tongtien+=tong.value;
}

loai.addEventListener("change", function () {
    gia.value = loai.value;
    ganTien()
})



soluong.addEventListener("change", function () {
    ganTien();
})
btnnhap.addEventListener("click",function(){
    if(check()==true){
        let sp={
            loai:loai.value,
            gia:gia.value,
            soluong:soluong.value,
            diachi:diachi.value,
            ship:ship.value,
            tong:tong.value
        }
        arr.push(sp);
    }

})



