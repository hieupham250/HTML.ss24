let n = +prompt("Nhập số nguyên dương bất kỳ:");
let i, check=0;
if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%2==0){
            check++;
        }
    }
    if(check==0){
        console.log(`${n} là số nguyên tố`);
    } else {
        console.log(`${n} ko là số nguyên tố`);

    }
}
