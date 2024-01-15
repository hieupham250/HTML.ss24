function UCLNN(x, y){
    while(x*y != 0){
        if(x > y){
            x %= y;
        } else {
            y %= x;
        }
    }
    return x+y;
}

let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");
let d = +prompt("Nhập d:");
if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || (a,b,c)<0){
    console.log("Số không hợp lệ");
} else {
    let result = UCLNN(a, b);
    result = UCLNN(result, c);
    result = UCLNN(result, d);
    console.log(`ƯCLN của ${a}, ${b}, ${c}, ${d} là: ${result}`);
}
