//console.log("Hello Andrea :)");

//Variables
var a = 1; //Never use this
let b = 2;
const c = 3;

let dogeObject ={
    name: "doge",
    age: 6,
    happy: true,
    catchphrase: "wow",
    clothes:{
        brand: "Carolina Herrera",
        colour: "Blue and Black",
        price: "$12,000"
    }
}

dogeObject.name = "Fido";
dogeObject.clothes.price ="$6.99";

//console.log(dogeObject);

//Arrays

let dogNames = ["doggie", "fido", "campi"];

//console.log(dogNames[0]);

dogeObject.name = dogNames[2];

//console.log(dogeObject.name);

//functions

function concatenate(str1, str2, str3){
    return str1 + str2 + str3;
}

//Different ways of writing functions
//As if were a variable with let, var, const. Usually const

const concatenate2 = function (str1, str2){
    return concatenate(str1, str2);
} 

/*without the function name

const concatenate3 = (str1, str2) => {

}

function yourName(){
    return "Andrea";
}

function hello(str1){
    return "Hello " + str1;
}

function print(str1){
    console.log(str1);
}


//print(hello(yourName())); //don't do that. bad

let name = yourName();
let welcomeMessage = hello(name);
*/
//print(welcomeMessage);
/*
let names = ["Zeeno", "Hollie", "Henry", "Peppe"];

function hiFriends(friends){
    for(let index = 0; index < friends.length ; index ++){
        console.log("Hi " + friends[index]);
    }
}
*/
//hiFriends(names);

/*names.forEach((name) =>{
    console.log(name);
});*/


//Tax calculator


function calcTax(tax, salary){
    let personalAllowance = salary - 12500;
    let taxResult = (tax * personalAllowance)/100;
    console.log("Your tax is: " + taxResult);
}

calcTax(20, 25000);
