console.log(null>0); 
console.log(null>=0);
console.log(null==0);

/*
Now this is because for comparator sign like >, < , >= etc null is assigned as 0, while for == it is assigned as 1
 */

// === this is strict check it checks datatype also

console.log("2"==2); // true
console.log("2"===2); // false