function a(){ // funtion a has access to global memeory
    c();
    function c(){
        console.log(b); // function c still has acess to var b. because it has access to memory of function a and also global memory
    }
    console.log(b); // prints 10
}
var b = 10;
a(); // b is accessible to this call


console.log(x); // prints undefined
console.log(y); // Reference error -> y is also hoisted but it is temporal dead zone
var x = 10; //var are attached to global memory space
let y = 100; // let are not attached to global memory space

/* Notes: When we try to access a variable in temporal dead zone it gives reference error.
   Window object is global object -> var is attached to window object but let and const are not attached to window object
*/


/*let i = 10;

var i = 15; // not allowed

var a = 10;

var a = 13; allowed
*/
