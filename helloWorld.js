console.log("Hello World")

function addtion(x,y) {

 console.log(x+y)    }
function subtraction(x,y){
    const  z =  x -  y;
     console.log(z);
}

function multiply(x,y){
    const  z =  x * y;


console.log(z); 
}

function division(x,y){
    const  z =  x /  y;
    console.log(z);
}

//terminal work
const operation = process.argv[2];
const x = Number(process.argv[3]);
const y = Number(process.argv[4]);

// 10IAP27BURGLN93Z



if (operation === "add") addtion(x, y);
if (operation === "sub") subtraction(x, y);
if (operation === "mul") multiply(x, y);
if (operation === "div") division(x, y);

const fetch = require('node-fetch');



async function getGoldPrice() {
    const apiKey = '10IAP27BURGLN93Z'; // Your API key
    const url = `https://metals-api.com/api/latest?access_key=${apiKey}&base=USD&symbols=XAU`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.success && data.rates && data.rates.XAU) {
        console.log(`Gold price: 1 XAU = ${1 / data.rates.XAU} USD`);
    } else {
        console.log('Could not fetch gold price:', data.error ? data.error.info : data);
    }
}

// To call the function:
getGoldPrice();

