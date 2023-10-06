//!Syntax
// fetch("எதை எடுக்கிறோம் or API link");

// *************************************************************************************************************************

//!Fetch
//!===>Example: To see what happens
//!===>Example: என்னென்ன நடக்கிறது என்பதை காண
//!===>Example: Just for Understanding
//!Refer to Image folder


//! Happen 1: Promise States only display 
//const res = fetch("https://restcountries.com/v2/all")
// console.log(res);         

// (1) Return to only promise inputs
// Promise {<pending>} 
// [[Prototype]] : Promise 
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : Response



//! Happen 2: Promise Results only display
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => console.log(data));                                  

// (2) PromiseResult kkul irukum Response in input mattum print aakirathu
// Response {type: 'cors', url: 'https://restcountries.com/v2/all', redirected: false, status: 200, ok: true, …}



//! Happen 3: Readable stream convert to json format 
// const res = fetch("https://restcountries.com/v2/all") 
// res.then((data) => data.json)

// (3) body kkul irukkum readable stream convert to json format 



//! Happen 4: Applying json method & API Results display
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => data.json()).then((data1) => console.log(data1));   

// (4) readable stream convert to json format and 
// it's a chaining method so again using .then method 
// and .then method print the API inputs so using console.log
// the output is Array of Object

//(250) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},......]



//! Happen 5: Separate Country name display
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => data.json()).then((data1) => {
//     console.log(data1[0].name);    
// })                                            

// (5) //Afghanistan



//! Happen 6: Print the total Country name display
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => data.json()).then((data1) => {
//     for (var i = 0; i <= data1.length; i++) {
//         console.log(data1[i].name);
//     }
// })

// (6) Afghanistan  Åland Islands   Albania    Algeria [250 country names display] 

// *************************************************************************************************************************

//!Session Task : Print the capital display
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => data.json()).then((data1) => {
//     for (var i = 0; i <= data1.length; i++) {
//         console.log(data1[i].capital);
//     }
// })

// Kabul     Mariehamn    Tirana     Algiers  [250 capital display]

// *************************************************************************************************************************

//!Session Task : Display the console values to webpage/HTMLPage

// const res = fetch("https://restcountries.com/v2/all")
// res.then((data) => data.json()).then((data1) => {
//     for (let i = 0; i <= data1.length; i++) {
//         const task = document.createElement("div")
//         task.innerHTML = `${data1[i].name}`           //or // data1[i].name
//         document.body.append(task);
//     }
// })

// *************************************************************************************************************************