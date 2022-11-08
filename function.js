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

//  function double(val1,val2){
//  let double1=val1*2;
//  let double2=val2*2;
//  console.log(double1,double2)
// };
//  double(2,3);

 let double=(val1,val2)=>{
    let double1=val1*2;
      let double2=val2*2;
    return{double1,double2};
    
 };
 console.log(double(2,3));

 
// Arrow Function
// convert those function above to arrow function
