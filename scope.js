console.log(x);
show();
var x  = 10;
console.log(x);

function show() {
    console.log(x);
    x = 5;
    console.log(x);
}


// GlobalScope - x(10) show(with body);
// undefined
// showScope - nothing
// uindefined
// 5
// 10

