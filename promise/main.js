var users = [];

var promise = new Promise( function( resolve , reject ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log( this.readyState );
        if (this.readyState == 4 ) {
            if ( this.status === 200 ) {
                resolve( this.responseText );
            } else {
                reject( 'Error' );
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/user", true);
    xhttp.send();
});


promise.then( function( result ) {
    users = result; 
    console.log( users );
});



// Promise( callback ) {
//     var successCallback;
//     this.then = function ( thenCallback ) {
//         successCallback = thenCallback;
//         return this;
//     }
//     var resolve = function( result ) {
//         successCallback( result );
//     }
//      var reject = function () {
//     }
//     callback( resolve, reject  );
// }