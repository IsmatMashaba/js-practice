// Function
// 2.1 Write a function named greeting and console Hello

// 2.2 Write a function named greeting, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)

// function greeting(name){
//     console.log('Hi '+name)
// };
// greeting('Ismat');

let greeting=(name)=>{
    return('Hi '+name);
}
console.log(greeting('Ismat'))
// 2.3 Write a function to calculate the sum of  two numbers (there would be 2 parameters in the function)

// function add(num1,num2){
//     let sum=num1+num2;
//     console.log(sum);
// };
// add(10,20);

let add=(num1,num2)=>{
    let sum=num1+num2;
     return(sum);
};
console.log(add(10,20));


// 2.4 Write a function to double value of number (there would be 2 parameter in the function)

//   function multiply(val1,val2){
//  let multy=val1*val2;
 
//  console.log(multy)
//  };
//   multiply(2,3);

 let multiply=(val1,val2)=>{
    let multy=val1*val2;
      ;
    return(multy);
    
 };
 console.log(multiply(2,3));

 
// Arrow Function
// convert those function above to arrow function
