
/* -- BASIC DECLARATION -- */

/*

//                                                                     -- DATA TYPES --

var data = "value";
data = 1
data = true
data = [1,2,3,4]
data={key:1}
console.log(data); // here the last declared data value will be displayed


var itsstring="hello there"
console.log(itsstring.length);
console.log(itsstring.split(""));
console.log(itsstring.trim());
console.log(itsstring.lastIndexOf)
console.log("str"+"1");

var newvar = 123
console.log(typeof newvar)

var newvar1 = "uhfuiwhjiSDFRTHDEwhfuiwuh"
console.log(newvar1.toUpperCase());
console.log(newvar1.toLowerCase());





//                                                                      -- LITERALS --
//                                - fixed values written directly in the code, like numbers, strings, booleans, arrays, or objects.



// numbers
var num = 123.45
console.log(Number.parseInt(num))
var str = "123"
console.log(typeof Number(str))
console.log(typeof + str)


//math
var intval = 123.4
var intval2 = 123.7
console.log(Math.round(intval))   //123
console.log(Math.round(intval2))  //124
 
console.log(Math.ceil(intval))    //124
console.log(Math.ceil(intval2))   //124

console.log(Math.floor(intval))   //123
console.log(Math.floor(intval2))  //123

console.log(Math.min(1,2,5,6,3))  //1
console.log(Math.max(1,2,5,6,3))  //6

console.log(Math.random()*100)   // 9.703680058038898  , gives random decimal numbers

console.log(Math.abs(-123))   // to remove -ve sign and make it +ve , 123

console.log(Math.sqrt(9))    //3



//Boolean
var b = false
console.log(b)




//undefined
var a;
console.log(a)




//null
var d = null;
console.log(d)



// arrays
var arr = [1,"eje",{obj:1}];
console.log(arr[0]);   // 1
console.log(arr[1]);   // eje

console.log(arr.push("35"));  //4

arr.push(35)
console.log(arr)   //[1, 'eje', {…}, '35', 35]

arr.pop(3)
console.log(arr)

arr.shift()  // removes 0th index
console.log(arr)




// ASSESSMENT-1 --> reverse the string
var b="hello";
console.log(b) //hello
b = b.split("")
console.log(b)  //['h', 'e', 'l', 'l', 'o']
b = b.reverse()
console.log(b)  //['o', 'l', 'l', 'e', 'h']
b = b.join("")  
console.log(b)  //olleh

// var c = "sanj"
// c = c.reverse
// console.log(c)  //undefined











//                                                                           -- ITERATIONS --
//                                                      - for , while , do while , for each , higher order functions



// for loop - for(declaration;condition;inc/dec)
for(var i=0;i<5;i++){
    console.log(i)
}



//while loop - 
var i = 0
while(i<5){
    console.log(i)
    i++
}



//do while loop 
do{
    console.log("hello")    //hello
}while(false)  // true - displays untill the webpage crashes




// higher order functions

// for each 
["apple","orange","pineapple","mango"].forEach(i=>{
    console.log(i)
});

["apple","orange","pineapple","mango"].forEach((i,k)=>{
    console.log(k,i)
});     // do semi-colon or we may face error 

var data = ["apple", "orange", "pineapple", "mango"].forEach(i => {
    console.log(i);
});























//                                                                   -- CONDITIONAL STATEMENTS --
//                                                                -if,if else,if else ladder ,switch




//if
if(true){   // here true so it prints only one time
    console.log("block printed")      //block printed
}

if(false){
    console.log("printed")
}



//if else
if(false){
    console.log("printed")
}
else{
    console.log("else part")   //else part
}


//if else ladder
var i = 10
if(i=0){
    console.log("b1")
}
else if(i= 5){
    console.log("b2")   
}
else if(i=10){
    console.log("b3")
}
else{
    console.log("not found")
}                                  //b2



// ASSESSMENT - 2   - check character is vowel or consonant
var c = 'o';
if(c== 'a' || c=='e' || c=='i' ||c=='o' || c=='u'){
    console.log("vowel")
}
else{
    console.log("consonent")
}                                     //vowel



// switch 
var h='f'
switch(true){
    case h=='a':
    console.log("vowel");
    break;

    case h=='e':
    console.log("vowel");
    break;

    case h=='i':
    console.log("vowel");
    break;

    case h=='o':
    console.log("vowel");
    break;

    case h=='u':
    console.log("vowel");
    break;

    default:
        console.log("consonant")
}                              //consonant







var h= prompt("Enter character")              //    PROMPT
switch(true){
    case h=='a':
    console.log("vowel");
    break;

    case h=='e':
    console.log("vowel");
    break;

    case h=='i':
    console.log("vowel");
    break;

    case h=='o':
    console.log("vowel");
    break;

    case h=='u':
    console.log("vowel");
    break;

    default:
        console.log("consonant")
}                              


var f = prompt("Enter character");         // ALERT
switch(f) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert("vowel");
        break;
    default:
        alert("consonant");
}








// nullish pointer

var character = prompt("enter the value");
character=character??'b'
switch(character){
    case character=='a':
    case character=='b':
    case character=='c':
    console.log("yes")
    break;
    default:
    console.log("no")       
}


var character = prompt("Enter the value");
character = character ?? 'b'; // Default to 'b' if null or undefined

switch(character) {
    case 'a':
    case 'b':
    case 'c':
        console.log("yes");
        break;
    default:
        console.log("no");
}






//ternary operator

var s = 1;
console.log(s1 = 1 ? "yes" : "no")  // yes

var s = 'a';
s = s=='a' ? true : s=='b' ? true : false;
console.log(s)     // true





// eval function
console.log(eval(1+2-3+"7"));  //7
console.log(eval(1+2+"7"));    //37
console.log(eval(2-3+"7"));    //-17
console.log(eval(1+2-3));      //0



//NaN
console.log(isNaN("12"))   //false
console.log(isNaN(12))     //false
console.log(!isNaN(12))    //true

*/



/*



//                                     -- FUNTIONS --
//                    - block of code which is executed when ever required
//                    - syntax : function <function_name>() {}


//non parametric
function sayHello(){           // declaring a function
    console.log("Hello..");    // statement
}
sayHello()  //Hello..          // calling function



//parametric (1 para)
function mul(val){
    console.log(val*val);
} 
mul()  //NaN
mul(5) //25



//parametric (2 para)
function add(v1,v2){
    console.log(v1+v2);
}
add(56,4)  //60


// function using arrow as return type
const addval=(x,y) => x+y
console.log(addval(3,4)); // 7


//return type
function mul(v1,v2){
    return v1*v2;      
}
r=mul(6,4) ;
console.log(r); //24


function multi(v1,v2,v3){
    return v1*v2*v3;      
}
x=multi(6,4,8) ;
console.log(x); //192
*/
 
/* --NOTE --
   - in js, funtion overloading does not work in the same way as in some other languages like Java or C++. 
   - javaScript does not directly support function overloading, but we can achieve similar behavior by checking the number of arguments inside the function.
   - function mul(v1, v2, v3) {
    if (v3 === undefined) {
        return v1 * v2;  // Two arguments case
    } else {
        return v1 * v2 * v3;  // Three arguments case
    }}

let r = mul(6, 4);  // Output will be 24
console.log(r); // 24

let x = mul(6, 4, 8);  // Output will be 192
console.log(x); // 192

*/




/*

//                                                              HOISTING IN JS    (IMPORTANT)
//              -  variable and function declarations are moved to the top of their scope (either global or function) during the compile phase, before the code is executed.


console.log(mul(6, 5)); //30

function mul(v1, v2) {
    return v1 * v2;
}






//                                                             VARIABLES

// var - can be redeclared and updated.
var c = 10
var c = "string"
console.log(c)  // prints as 'string' bcz last declared variable is valued as 'string'



//let - Cannot be redeclared in the same scope but can be updated.
let l = 10     
l = 20     
console.log(l) // 20
//let l=30         // shows error bcz 'l' already declared




//const - cannot be reassigned once declared.
const v = 24  
console.log(v) //24
// v = 36        // can't change const value after initialised (error)





// ASSESSMENT - 3 , sum of array elements using function

function sum(a){
var s = 0
for(var i=0;i<a.length;i++){
    s = s + a[i] ;
}
return s;
}
a=[1,2,3]
console.log(sum(a));


//                                            MAP FUNCTION 
//                                 - filter(),reduce(),every(),some()

let ar = [1,2,3,4]
let compute = ar.map(i => i+1)
console.log(compute)  // [2, 3, 4, 5]
console.log(ar)      // [1, 2, 3, 4]

//filter - filters and return values that satisfies the condition
let comp = ar.filter(i => i<4)
console.log(comp)  //[1, 2, 3]

let odd = ar.filter(i => i%2!=0)
console.log(odd)   // [1, 3]

let even = ar.filter(i => i%2==0)
console.log(even)  //[2, 4]



//every
let e =ar.every(i=>i<5)
console.log(e); //true

let e1 =ar.every(i=>i>5)
console.log(e1); //false

let e2 =ar.every(i=>i<3)
console.log(e2); //false


//some
let s = ar.some(i=>i<3)
console.log(s) //true





//                                    KEY & VALUE PAIRS

let t = {name:"john",age:23}
let {name:mo,age} = t    
console.log(mo,age)  //john 23


const t2 = {name:"john",age:21}
t2.name="doe"
console.log(t2) //{name: 'doe', age: 21}


let a1=[1,2,3,4,5]
let a2=[...a1,6,7]
console.log(a2) //[1, 2, 3, 4, 5, 6, 7]


//rest operator
// rest in function - function rest(...value){}

*/













// ASSESSMENT - 4 -> Rock papper scissor game
const determineWinner = (playerChoice, computerChoice) => {
    return playerChoice === computerChoice
        ? "It's a tie!"
        : (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "scissors" && computerChoice === "paper") ||
          (playerChoice === "paper" && computerChoice === "rock")
        ? "You win!"
        : "Computer wins!";
};

const choices = ["rock", "paper", "scissors"];

const playerChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
if (!choices.includes(playerChoice)) {
    console.log("Invalid choice. Please refresh and try again with rock, paper, or scissors.");
} else {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Player choice: ${playerChoice}`); // Fixed template literal
    console.log(`Computer choice: ${computerChoice}`); // Fixed template literal
    console.log(determineWinner(playerChoice, computerChoice));
}
