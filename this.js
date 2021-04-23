function add( a, b ) {
    console.log( this );
}
// add();
var fn = add;

var obj = {
    myfn: fn 
}

// fn();

fn.call({
    name: 'SIngh'
}, 4, 5 );

// add.apply({
//     name: 'Ratnesh'
// }, [ 4, 5 ] );

function Person( name ) {
    // console.log( this );
    this.name = name;
    return 123;
}

// console.log( Person() );
var p1 = new Person('Ram');
// console.log( p1 );


// new fn();

