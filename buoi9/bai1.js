let dsSP = [];
let btnNhap = document.querySelector('#btnNhap');
let btnHienThi = document.querySelector('#btnHienThi');
let blockShow = document.querySelector('.block-show');


function gantien() {
    let typeSP = document.querySelector('#typeSP');
    let soluong = document.querySelector('#soluong');
    let tong = document.querySelector('#tong');
    if (typeSP.value == 10000) {
        tong.value = soluong.value * typeSP.value
    } else if (typeSP.value == 20000) {
        tong.value = soluong.value * typeSP.value
    } else if (typeSP.value == 30000) {
        tong.value = soluong.value * typeSP.value
    }
}
typeSP.addEventListener("change", function () {
    gantien();
});
soluong.addEventListener("change", function () {
    gantien();
})
function xoa() {
    let nameSP = document.querySelector('#nameSP');
    let maSP = document.querySelector('#maSP');
    let typeSP = document.querySelector('#typeSP');
    let soluong = document.querySelector('#soluong');
    let nsxSP = document.querySelector("input[name='nsx']:checked");
    let tong = document.querySelector('#tong');
    nameSP.value = "";
    maSP.value = "";
    typeSP.value = "";
    soluong.value = null;
    nsxSP.checked = false;
    tong.value = ``;
}
function check() {
    let checkresult = false;
    let nameSP = document.querySelector('#nameSP');
    let maSP = document.querySelector('#maSP');
    let typeSP = document.querySelector('#typeSP');
    let soluong = document.querySelector('#soluong');
    let nsxSP = document.querySelector("input[name='nsx']:checked");
    if (nameSP.value.trim() == "") {
        alert("bắt buộc nhập tên sản phẩm!");
        checkresult = true;
    }
    if (maSP.value.trim() == "") {
        alert("bắt buộc nhập mã sản phẩm!");
        checkresult = true;
    }
    if (soluong.value.trim() == null) {
        alert("bắt buộc số lượng sản phẩm!");
        checkresult = true;
    }
    if ((typeSP.value == "") || (typeSP.value == 0)) {
        alert("bắt buộc loại sản phẩm!");
        checkresult = true;
    }
    if (nsxSP == null) {
        alert("bắt buộc nsx sản phẩm!");
        checkresult = true;
    }
    return checkresult;
}
btnNhap.addEventListener("click", function () {
    let nameSP = document.querySelector('#nameSP');
    let maSP = document.querySelector('#maSP');
    let typeSP = document.querySelector('#typeSP');
    let soluong = document.querySelector('#soluong');
    let nsxSP = document.querySelector("input[name='nsx']:checked"); //học thuộc
     // chọn 1 trong 2 
    let tong = document.querySelector('#tong');
    // check()
    if (check() == false) {
        let sanPham = {
            nameSP: nameSP.value,
            maSP: maSP.value,
            typeSP: typeSP.value,
            soluong: soluong.value,
            nsxSP: nsxSP.value,
            tong: tong.value
        }   
        dsSP.push(sanPham);
       
    }
    console.log(dsSP);
    xoa();
})
btnHienThi.addEventListener("click", function(){
    let UI=``;
    dsSP.forEach(function (item) {
        UI+=`
        <h3>Tên sản phẩm: ${item.nameSP}</h3>
        <p>Mã sản phẩm: ${item.maSP}</p>
        <p>Loại Sản phẩm: ${item.typeSP}</p>
        <p>số lượng Sản phẩm:${item.soluong}</p>
        <p>Nhà Sản Xuất: ${item.nsxSP}</p>
        <p>tổng tiền :${item.tong}</p>
        `;
    })
    blockShow.innerHTML=UI;
})