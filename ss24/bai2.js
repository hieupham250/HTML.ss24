let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
let sum=0;
if(isNaN(a) || isNaN(b) || a<0 || b<0){
    console.log("số không hợp lệ");
} else {
    for(let i=a;i<=b;i++){
        sum += i;
    }
    console.log(`Tổng: ${sum}`);
}