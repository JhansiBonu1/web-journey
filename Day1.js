//for comment we use // anf for multiline comment we use /*...*/
/*Data types in js:
1. Primitive data types: string, number, boolean, null, undefined, symbol
2. Non-primitive data types: object, array, function
*/

//js is case sensitive language
var job;
job="developer" 
console.log(job) //output: developer

//variable declaration
var name="jaanu" 
console.log(name)
 //output: jaanu
/*semicolon is not mandetory
var is like a global variable
we can use it anywhere in the program*/

let age=20 
console.log(age) // let variable value can be used with in its scope(like a local variable)
const pi=3.14
console.log(pi)    //const variable value cannot be changed

//ADDITION
var a=10
var b=20
var sum=a+b
console.log("sum",sum)

//SUBTRACTION
var sub=a-b
console.log("sub",sub)
//INCREMENT
var myvar=80
myvar+=1  //myvar++
console.log(myvar) 

//FINDING REMAINDER
var remainder=b%a   //if remaimder is 0 then a is an even number
console.log("remainder",remainder)

//escaping literals
/*when we want to use quotes in our string then we can use it by adding a \ before the quote
 then the compiler will not consider it as a closing quote */
var string="im a string in \"double quotes\""
console.log(string)

var string="http://'www'.google.com/"
console.log(string)

//ESCAPE SEQUENCE
/*
 \' single cote
 \" double cote
 \\backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */
//SRING CONCATINATING
var s1="im a student "
s1+="studying in GMRIT"
console.log(s1)

var a="enjoying"
var b="learning js is very "
b+=a
console.log(b)

//finding length of string
var s="heygehbbeyu"
var len=s.length
console.log(len)
console.log(s[0])
console.log(s[s.length-1]) //to access last character of string
//string immutability
var s="hello jaan"
s[0]="H"
console.log(s) //string is immutable we cannot change the string once it is created
//word blanks
function wordBlanks(myNoune,myAdj,myVerb,myAdverb){
    var result=""
    result += "The " + myAdj + myNoune + myVerb + myAdverb  + "to the store"

    return result;
}
console.log(wordBlanks("dog ","big ","ran ","quickly "))

//store multiple values with arrays
var arr=["ram",21,21.5]
//nested array
var arr=[["ram",21],["raju",22],["ravi",20]]
//access array data with indexes
console.log(arr[1])
arr[2]=["jai",23]  //we can modify the array
console.log(arr)
//multidimentional arrays
var marr=[[3,8,1],[1,2,[3,4]]]
console.log(marr[1][2][1])
//manipulate arrays with push() 
var arr=["ram","jack","jai"]
arr.push("lokesh")
console.log(arr)
arr.push(["jaan",2])
console.log(arr)  //it will add the array as an element
//manipulate arrays with pop()
var rem=arr.pop()  //it will remove the last element of the array and return it
console.log(rem)
console.log(arr)
//shift removes the first element of the array
var first=arr.shift()
console.log(first)
console.log(arr)
//unshift adds the element at the beginning of the array
arr.unshift("ram")
console.log(arr)

// functions in js
function greet(){
    console.log("good luck")
}
greet()
greet()
greet()

function fun(name){
    console.log("hello "+name)
}
fun("jaanu")
fun("ram")

function add(a,b){
    console.log(a+b)
}
add(10,5)
//scope of variables
var myglobalvar = 10
function f1(num){
    var mylocalvar=5
    console.log(num+myglobalvar)
}
f1(20)
function f2(){
    //console.log(mylocalvar) it will return mylocalvar is undefined
console.log(myglobalvar)}
f2()

var outerWear="T-shirt"
function myOutfit(){
    var outerWear="sweater"
    return outerWear;   // high preference to local variable
}
console.log(outerWear)
console.log(myOutfit())

//return value from function
function minus(num){
    return num-2
}
console.log(minus(10))  //returns 8
sum=1
function add(){
    sum=sum+10
}
console.log(add())  //undefined as there is no return value
console.log(sum)  //11
//return value
function add(){
    return sum=sum+10
}
console.log(add())  //21

//stand in line
function nextInLine(arr,item){
    arr.push(item);
    return item;
}
var testArr =[1,2,3,4,5];
console.log("Before"+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After"+JSON.stringify(testArr));

//conditional statements
function testEqual(num){
    if(num<20){
        return "less than 20";
    }
    return "num greater than 20";
}
console.log(testEqual(25));
function testStrict(num){
    if(num<5){
        return "less than 5";
    }
    else if(num<10){
        return "less than 10";
    }
    else if(num<20){
        return "less than 20"
    }
    else{
        return "greater than 20"
    }
}
console.log(testStrict(55));

function test(num){
    if(num>18){
        if(num<30){
            return "between 18 and 30";
        }
        else{
            return "greater than 18 and 30";
        }
    }
    return "less than 18";
}
console.log(test(25));
//switch statement
function caseInSwitch(val){
    var answer="";
   switch(val){
    case 1:
        answer="alpha";
        break;
    case 2:
        answer="beta";
        break;
    case 3:
        answer="gamma";
        break;
    case 4:
        answer="delta";
        break;
    default:
        answer="not found";
        break; 
   }
    return answer;
}
console.log(caseInSwitch(2));

//function to print 1 to 10 numbers
function print1to10(){
    for(var i=1;i<=10;i++){
        console.log(i);
    }
}
print1to10();