const myModule = require('./my-module.js'); 
console.log(myModule.myFunction()); 

const myPromise = new Promise((resolve, reject) => { 
    if (condition) { 
      resolve('Success!'); 
    } else { 
      reject('Failure!'); 
    } 
  }); 
   
  myPromise.then((result) => { 
    console.log(result); 
  }).catch((error) => { 
    console.log(error); 
  }); 

  async function myFunction() { 
    try { 
      const result = await myPromise; 
      console.log(result); 
    } catch (error) { 
      console.log(error); 
    } 
  } 
   
  myFunction();