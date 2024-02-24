let score = "33ab";
console.log(typeof score);

/*
actually sometimes you get data from somewhere and the data type of what you get is differnet
then on what you want to perform operation so u need conversion.
*/

let valueInnum = Number(score)

console.log(valueInnum);

console.log(typeof valueInnum);
let ip = "yo" // if "" then false 1=> true, 0=> false

let given_ip = Boolean(ip)
console.log(given_ip);