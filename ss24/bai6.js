let n = +prompt("Nhập số nguyên dương:");
let result = 0, tmp;

if (isNaN(n) || n <= 0) {
    console.log("Số không hợp lệ");
} else {
    while (n > 0) {
        tmp = n % 10;
        result = result * 10 + tmp;
        n = Math.floor(n / 10); // Math.floor để làm tròn số nguyên gần nhất
    }
    console.log("Số đảo ngược là:", result);
}
