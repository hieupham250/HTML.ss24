let n = +prompt("Nhập nguyên dương bất kỳ:");

if(isNaN(n)){
    console.log("Số không hợp lệ");
} else {
    for(let i=1;i<=n;i++){
        if(i%2===0){
            console.log(`Bình phương số ${i} = ${i*i}`);
        }
    }
}