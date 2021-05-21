var users = [];

var promise = new Promise( function( resolve , reject ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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
