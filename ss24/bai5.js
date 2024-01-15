let n = +prompt("Nhập số nguyên dương:");
let S = 0;
if(isNaN(n)){
    console.log("số không hợp lệ");
} else {
    for(let i=1;i<=n;i++){
        S += 1/(Math.pow(i,3));
    }
    console.log(S);
}