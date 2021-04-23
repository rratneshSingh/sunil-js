function calc() {
    function add() {
        console.log(  a + b );
    }

    return add;
}
var a = 4;
var b = 5;
var myadd = calc();

myadd();

