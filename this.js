var obj = {
    name: 'Ratnesh',
    show: function() {
        console.log( this );
    }
}

var fn = obj.show;
// fn();
obj.show();


// fn.call({
//     name: 'SIngh'
// }, 4, 5 );

// add.apply({
//     name: 'Ratnesh'
// }, [ 4, 5 ] );

// function Person( name ) {
//     // console.log( this );
//     this.name = name;
//     return 123;
// }

// console.log( Person() );
// var p1 = new Person('Ram');
// console.log( p1 );


// new fn();

