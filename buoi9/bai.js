let dsSP = [];
let btnNhap = document.querySelector('#btnNhap')
let btnHienThi = document.querySelector('#btnHienThi')
let blockShow = document.querySelector('.block-show')
btnNhap.addEventListener("click", function () {
    let nameSP = document.querySelector('#nameSP')
    let maSP = document.querySelector('#maSP')
    let typeSP = document.querySelector('#typeSP')
    let giaSP = document.querySelector('#giaSP')
    let tongTien = document.querySelector('#tongTien')
    let nsxSP = document.querySelector("input[name='nsx']:checked")// hoc thuoc
    let sanPham = {
        nameSP: nameSP.value,
        maSP: maSP.value,
        typeSP: typeSP.value,
        giaSP: giaSP.value,
        nsxSP: nsxSP.value,
        tongTien: tongTien.value
    }
    dsSP.push(sanPham);
})
console.log(dsSP)
btnHienThi.addEventListener("click", function () {
    // code hien thi danh sach o day
    let UI = "";
    dsSP.forEach(function (item) {
        UI += `
        <h3>Tên sản phẩm : ${item.nameSP}</h3>
        <p>Mã sản phẩm : ${item.maSP}</p>
        <p>Loại sản phẩm : ${item.typeSP}</p>
        <p>Số lượng sản phẩm : ${item.giaSP}</p>
        <p>Nhà sản xuất : ${item.nsxSP}</p>
        <p>Tổng thành tiền : ${item.tongTien}</p>
        `;
    })
    blockShow.innerHTML = UI;
})
function xoá() {
    
}