console.log(x);
show( 11110 );
var x  = 10;
console.log(x);

function show( count ) {
    console.log(x);
    x = 5;
    console.log(count);
    // y = 50;
    // console.log(y);
}

// GlobalScope - x(5) show(with body)
// undefined
// showScope - count(11110)
// undefined
// 5
// 10

