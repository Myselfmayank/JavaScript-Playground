function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    return y ; // we can return whole fucntion in js
}

//console.log(a); //produces error

var b = x();
console.log(b); // prints whole function y

b(); // prints 7 // because in js the returned function remembers it's lexical memory or scope -> This is known as closure

function fun(){
    setTimeout(() => {
        console.log(1); // will be printed after Mayank Raj
    }, 3000);
    console.log("Mayank Raj"); // print Mayank Raj first then logs 1 after 3 seconds
}

fun();