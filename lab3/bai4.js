function getRPS(value) {
    var arrRPS = ['Đấm', 'Lá', 'Kéo'];
    var s = arrRPS[Math.floor(Math.random() * arrRPS.length)];
    var c = arrRPS[value];
    if (c == s) {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Hòa`);
    } else if (c == 'Lá' && s == 'kéo') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thắng`);
    } else if (c == 'Lá' && s == 'Đấm') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thua`);
    } else if (c == 'Đấm' && s == 'Lá') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thắng`);
    } else if (c == 'Đấm' && s == 'Kéo') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thua`);
    } else if (c == 'Kéo' && s == 'Đấm') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thắng`);
    } else if (c == 'Kéo' && s == 'Lá') {
        alert(`Máy: ${s}; Bạn: ${c}; Kết quả: Bạn thua`);
    }
}
