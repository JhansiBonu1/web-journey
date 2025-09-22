//Functions
//function to add two numbers
function add(a,b){
    return a+b;
}
console.log(add(30,50));


//arrow function to multiply two numbers
const multiply=(a,b)=>a*b;
console.log(multiply(10,5));

const add2=(a,b)=>a+b;
console.log(add(20,10));

var div=(a,b)=>a/b;
console.log(div(10,5));

//function with default parameters
function sum(a=5,b=10){
    return a+b;
}
console.log(sum(2,3));
console.log(sum());

function details(name="user"){
    return "hello "+ name;
}
console.log(details("jaanu"));
console.log(details());

//objects
var dog={
    "name":"jimmy",
    "tail":1,
    "age":10,
};
var myDog= dog.name;
console.log(myDog);


var mydogsAge=dog["age"];
console.log(mydogsAge);


//Array
var arr=[1,2,3,4,5];
console.log(arr);
arr.push(6);  //append 6 to the array
console.log(arr);
arr.pop();     //removes last element from the array
console.log(arr);
arr.shift();   //removes first element from the array
console.log(arr);
arr.unshift(0); //adds 0 to the start of the array
console.log(arr);


//map function
//it is used to iterate through each element of the array and perform some operation on it
let numbers=[1,2,3,4,5];
let squares=numbers.map(num => num*2);
console.log(squares);

//filter()
//it is used to filter out the elements based on the condition
let Num=[1,2,3,4,6,7];
let even=Num.filter(num => num%2 == 0);
console.log(even);

//reduce()
//it is used to reduce the array to a single value based on some operation
let num=[1,2,3,4,5];
let sum1=num.reduce((acc,num) => acc+num,0);  // here 0 is the initial value of the accumulater
console.log(sum1);

//objects
let student={name:"jaanu",age:20,course:"CSE"};
console.log(student.name);  //accessing the value of name key
console.log(student.age=19);  //updating the value of the age key
console.log(student);
console.log(student.job="java developer"); //adding a new key to the array
console.log(student);