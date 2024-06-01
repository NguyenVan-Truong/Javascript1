
var newWindows;
function openWin() {
    newWindows = window.open(
        '',
        'menubar = yes, menu = yes, width = 800, height = 600',
    );
}
function closeWindow() {
    if (newWindows) {
        newWindows.close();
    }
}
function checkWindow() {
    if (newWindows) {
        if (newWindows.closed) {
            alert('Cửa sổ đã đóng');
        } else {
            alert('Cửa sổ chưa đóng');
        }
    }
}
