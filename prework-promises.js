//To run this file clone it down and run node prework-promises.js

//#1

const testNum = num => {
  const p = new Promise(function(resolve, reject) {
    if(num >= 10) {
      resolve('Greater than 10');
    } else {
      reject('Less than 10');
    }
  });
  return p;
}

testNum(9)
.then(data => console.log(data))
.catch(err => console.log(err));

testNum(11)
.then(data => console.log(data))
.catch(err => console.log(err));


//#2


const makeAllCaps = words => {
  const p = new Promise(function(resolve, reject){
    words.forEach(word => {
      if(typeof word !== 'string') {
        reject('Contains non-string');
      }
    });
    const upperCasedWords = words.map(word => word.toUpperCase());
    resolve(upperCasedWords);
  });
  return p;
};

const sortWords = words => {
  const p = new Promise(function(resolve){
    resolve(words.sort());
  });
  return p;
};

makeAllCaps(['hello', 'there', 'friend'])
.then(resp => sortWords(resp))
.then(res => console.log(res))
.catch(err => console.log(err));

makeAllCaps(['hello', 'there', 10])
.then(resp => sortWords(resp))
.then(res => console.log(res))
.catch(err => console.log(err));


//Questions

// What is .then() used for, and what is .catch() used for?
  // .then is used to perform operations after a promise has resolved. 
  // .catch is used to catch an error and perform operations if a promise is rejected

// What are good use cases for Promises?
  // A good use case for promises is when you would like to run code asynchronously 
  // and allow your application to continue running while you are waiting for your async operations to finish running.

// What other libraries/functions can you find that use Promises?
  //jQuery has built in promises to allow you to run async code
  //ES6 provides basic promise functionality but sometimes you need more tools
  //Using a framework like Bluebird can give you access to more tools and func when working with Promises





