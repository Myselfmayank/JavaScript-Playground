//async function always return a promise

const p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise resloved Value!!")
    }, 5000);    
})

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise resloved Value!!")
    }, 10000);    
})

async function getData() {
    return "Namaste"  //if a fun doesn't return promise by default then it will
                      // automatically be wrapped inside a promise and then will be returned
}

async function getData1() {
    return p;   //this will not be further wrapped in promise as it is alreading returnig promise
}

const dataPromise = getData();

//dataPromise.then((res) => console.log(res));

//Async and await combo is used handle promises
//Important-> await keyword can only be used inside async function
async function handlePromise() {
    //Js engine will wait for promise to be resolved and then will execute further
    //await keyword is used before promise than need to be resolved
    const val = await p; //here execution of function will be suspended and function will be removed from call stack
    console.log("Namaste JavaScript");
    console.log(val); 

    const val1 = await p1; //await keyword is used before promise than need to be resolved
    console.log("Namaste JavaScript 2");
    console.log(val1); 
}
handlePromise();

/* In traditional then method to resolve promise Js engine 
    don't use to wait for promise to be resolved */

/* When we have more than one promise with await which need to be resolved 
   then the execution of function is suspended at promise which is encountered first 
   and if by the time the first promise is being resolved other promises also get resolves
   Js will execute them instantly -> meaning dusra wala promoise background me execute ho rha hota hai
*/

// fetch method is provided by browser and not JS