let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");

if(isNaN(a) || isNaN(b) || a<0 || b<0){
    console.log("số không hợp lệ");
} else{
    let result = Math.pow(a,b);
    console.log(`kết quả biểu thức là: ${result}`);
}