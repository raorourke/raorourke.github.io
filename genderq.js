def its_pat(name):
    url = f'https://gender-api.com/get'
    params = {
        'key': 'BcZxVToAbanAZMXrZA',
        'name': name
    }
    r = requests.get(url)
    return f"{r.json().get('gender')} ({r.json().get('accuracy')}%)"

// Because we want to access DOM nodes,
// we initialize our script at page load.
window.addEventListener( 'load', function () {

  // These variables are used to store the form data
  const patsName = document.getElementById( "name" );
  ;


xhr.responseType = 'json';

xhr.send();

// the response is {"message": "Hello, world!"}
xhr.onload = function() {
  let responseObj = xhr.response;
  alert(responseObj.message); // Hello, world!
};

window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const patsName = document.getElementById( "name" );
    const url = "https://gender-api.com/get?key=BcZxVToAbanAZMXrZA&name=" + patsName

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    XHR.open( "GET", url );

    // The data sent is what the user provided in the form
    XHR.send( );
  }

  // Access the form element...
  const form = document.getElementById( "genderQ" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );