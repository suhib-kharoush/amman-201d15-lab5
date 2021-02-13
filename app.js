'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  let sumResult = a+b;
  return [sumResult,`The sum of ${a} and ${b} is ${sumResult}.`]
  
  //eslint-disable-line
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  let output = a * b;
  return[output,`The product of ${a} and ${b} is ${output}.`]
  //eslint-disable-line
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> problem5
  let sum2 = a + b + c;
  let product = a*b*c;
  return[sum2, product, `${a} and ${b} and ${c} sum to ${sum2}.`,  `The product of ${a} and ${b} and ${c} is ${product}.`]
  //eslint-disable-line
<<<<<<< HEAD
  
=======
  let sum1 =  a + b + c;
<<<<<<< HEAD
=======
  let sum1 =  a + b + c;
>>>>>>> problem4
  let mult1 =a * b *c;
  let array3 = `${a} and ${b} and ${c} sum to ${sum1}.`
  let array4 = `The product of ${a} and ${b} and ${c} is ${mult1}.`
  return[sum1, mult1, array3, array4]
<<<<<<< HEAD
>>>>>>> afbb889b110790c9a4dadc3269c282942dd98934
=======
  let prod =a * b *c;
  return[sum1, prod, `${a} and ${b} and ${c} sum to ${sum1}.`, `The product of ${a} and ${b} and ${c} is ${prod}.`]
>>>>>>> 725adc863d64d0b9752b4222d11ad247476d93df
 
  //eslint-disable-line 
  
=======
>>>>>>> problem5
=======
 
  //eslint-disable-line 
  
>>>>>>> problem4
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) {
<<<<<<< HEAD
  let result =0;
  for(let i =0; i< sumArr.length; i++){
      result = sum(sumArr[i],result)[0];
  }
  let answer =  sumArr + " was passed in as an array of numbers, and " +result+ " is their sum."
  return[result,answer]
=======

>>>>>>> problem4
  //eslint-disable-line
  let result =0;
  for(let x =0; x< sumArr.length; x++){
      result = sum(sumArr[x],result)[0];
  }
  let answer =  sumArr + " was passed in as an array of numbers, and " +result+ " is their sum."
  return[result,answer]}

// Here is the test for sumArray(); uncomment it to run it

<<<<<<< HEAD
testSumArray(testArray);
=======
 testSumArray(testArray);
>>>>>>> problem4

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
<<<<<<< HEAD
<<<<<<< HEAD
  let Product = 2 * 3 * 4;
  return[Product, `The numbers 2,3,4 have a product of 24.`]
=======
  let result=1;
    for(let y =0; y<multArr.length ; y++){
        result = multiply(result, multArr[y])[0]; }
var final ='The numbers ' + multArr[0]+ ',' + multArr[1] + ',' + multArr[2]+ ' have a product of '+ result+'.' 
return [result,final]; 
>>>>>>> problem5
  //eslint-disable-line
}

// Here is the test for multiplyArray(); uncomment it to run it
<<<<<<< HEAD
 testMultiplyArray(testArray);
=======
testMultiplyArray(testArray);
>>>>>>> problem5
=======
  let result=1;
  for(let y =0; y<multArr.length ; y++){
      result = multiply(result, multArr[y])[0]; }
let final ='The numbers ' + multArr[0]+ ',' + multArr[1] + ',' + multArr[2]+ ' have a product of '+ result+'.' 
return [result,final];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);
>>>>>>> problem4

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) {
 let productAll = 1
 for( let l = 0; l<dynamicArray.length; l++){
   productAll = multiply(productAll, dynamicArray[l])[0];}
  let atTheEnd = `The numbers ${dynamicArray[0]},${dynamicArray[1]},${dynamicArray[2]},${dynamicArray[3]},${dynamicArray[4]} have a product of ${productAll}.`
  //eslint-disable-line
  return[productAll, atTheEnd];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
