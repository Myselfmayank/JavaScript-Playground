var cat = {
    "name": "Whiskers",
    "legs": 4,
    "hand" : 7,
    "tails": 3,
    "enemies": ["Water", "Dogs"]
  };

  var cat1 = {
    "name": "Meow",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

  var cat3 = {...cat1,...cat}; // spread operator to combine two arrays or objects into one
  console.log(cat3);
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];

  let propertyExists = cat.hasOwnProperty("boyFriend"); // false //it checks if a property on a given object exist or not
  cat["name"] = "meow";
  cat.legs = 5; // can change the value with dot notation
  cat.boyFriend = "doggy"; // can add more property
  

  let propertyExists1 = cat.hasOwnProperty("boyFriend"); //True

  console.log(cat);
  console.log(propertyExists);
  console.log(propertyExists1);
  console.log(cat.boyFriend);
  console.log(gloveBoxContents);

  /*Promises are most useful when you have a process that takes an unknown
    amount of time in your code (i.e. something asynchronous), often a server
    request. When you make a server request it takes some amount of time, and
    after it completes you usually want to do something with the response from the server */

    const makeServerRequest = new Promise((resolve, reject) => {
      // responseFromServer is set to true to represent a successful response from a server
      let responseFromServer = true;
        
      if(responseFromServer) {
        resolve("We got the data");
      } else {  
        reject("Data not received");
      }
    });
    
    makeServerRequest.then(result => {
      console.log(result);
    });