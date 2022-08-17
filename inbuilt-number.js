//Numbers-Inbuilt-Functions
//To convert number to string-  .toString

var num=10;
console.log(typeof(num));
console.log(num.toString());
console.log(typeof(num.toString()));

//to convert string to number - parseInt()

var str='50'
console.log(typeof(str))
console.log(parseInt(str))
console.log(typeof(parseInt(str)))


//parseFloat()-- parses a string and returns a floating point number.

var strNum='10.5'
console.log(strNum);
console.log(typeof(strNum));
console.log(parseFloat(strNum));

//toFixed()- takes floating Number and round if off to given position.

var num=10.32546
console.log(num);
console.log(num.toFixed(3));
console.log(typeof(num));
console.log(num.toFixed(10));