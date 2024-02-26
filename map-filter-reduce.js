const users =  [
    {firstName : "Mayank", lastName : "Raj", age : 23},
    {firstName : "Donald", lastName : "Trump", age : 76},
    {firstName : "Elon", lastName : "Musk", age : 50},
    {firstName : "Alia", lastName : "Bhatt", age : 23},
];

// reduce executes user supplied reducer function
const output = users.reduce(function(acc,curr) {
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(output);