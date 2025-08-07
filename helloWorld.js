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
const city = process.argv[3];
// 10IAP27BURGLN93Z

const fetch = require('node-fetch');


if (operation === "add") addtion(x, y);
if (operation === "sub") subtraction(x, y);
if (operation === "mul") multiply(x, y);
if (operation === "div") division(x, y);
if (operation === "weather") getWeather(city);






async function getWeather(city) {
    //step 1: get the api key
   
    const apiKey = '3125d30ff728489a940195143250708'; // Your API key
    //step 2: get the url
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    //step 3: fetch the data    
    const response = await fetch(url);
    //step 4: parse the data    
    const data = await response.json();
    //step 5: check if the data is valid
    
    if(data.current) {
        console.log(data.current);
    } else {
        console.log("Could not fetch weather data:", data.error ? data.error.message : data);
    }
}

// To call the function:


