var check = true; // danh dau xem la dang o trang thai danh so thu1
var a=0;
var b=0;
var abc;
function toanHang(number) {
    if (check) {
        a = a*10+ number;
        // check = false; // danh so trang thai thu 2
    } else {
        b = b*10+ number;
    }
}
function toanTu(o) {
    abc = o;
    check = false;
}
function lamLai() {
    a = null;
    b = null;
    check = true;
    abc = null;
}
function thucHien() {
    switch (abc) {
        case '+':
            alert(a + b);
            break;
        case '-':
            alert(a - b);
            break;
        case '*':
            alert(a * b);
            break;
        case ':':
            alert(a / b);
            break;
    }
    lamLai();
}
