let n = +prompt("Nhập số nguyên dương bất kỳ:");
let i=2, j, check;
if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    console.log("các số nguyên tố");
    while(i<=n){
        check=1;
        if(i!=0 && i!=1){
            j = 2;
            while(j <= i/2){
                if(i%j==0){
                    check = 0;
                    break;
                }
                j++;
            }
        } else {
            check = 0;
        }
        if(check==1){
            console.log(i);
        }
        i++;
    }
}