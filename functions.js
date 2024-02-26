// Function statement
function a() {
    console.log("a called");
}

//Function Expression
var b = function(param) {
    console.log(param);
    console.log("b called");
}

//Anonymous function
b(function name() { // passing function as parameter
})

//Named function expression
var bc = function xyz() {
    console.log("b called");
}
//xyz() // gives error

// First class function - Ability to be used like values

/* CallBack FUnction */

setTimeout(function(){
    console.log("timer");
},2000)

function x(y) {
    console.log('x');
    y();
}

x(function() {
    console.log('y');
})