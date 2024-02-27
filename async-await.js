//async function always return a promise

const p = new Promise((resolve, reject)=>{
    resolve("Promise resloved Value!!")
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
    const val = await p; //await keyword is used before promise than need to be resolved
    console.log(val); 
}
handlePromise();