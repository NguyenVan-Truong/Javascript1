function gantien() {
    let typeSP = document.querySelector('#typeSP');
    let tong = document.querySelector('#tong');
    if (typeSP.value == 10000) {
        tong.value = typeSP.value
    } else if (typeSP.value == 20000) {
        tong.value = typeSP.value
    } else if (typeSP.value == 30000) {
        tong.value = typeSP.value
    }
}
typeSP.addEventListener("change", function () {
    gantien();
});