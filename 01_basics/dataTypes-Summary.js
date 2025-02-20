// Primitive - Call By Value

// 7 types  : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const id = Symbol('123');
const newId = Symbol('12244');

// console.log( id === newId); false




//Refernece Type (Non Primitive) - allocate reference in memory

// Array , Object , Function

const heros = ["ironman" , "shaktiman" , "naagaraj"];

let myObj = {
    name:"Harish",
    age:25
};

const myFunction = function(){
    console.log("Hello");
    
}


// console.log(typeof);  to check type
