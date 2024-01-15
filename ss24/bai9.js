function GDC(x, y){
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
    let result = GDC(a, b);
    result = GDC(result, c);
    result = GDC(result, d);
    console.log(`UCLN của ${a}, ${b}, ${c}, ${d} là: ${result}`);
}