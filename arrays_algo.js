/*It's now time to practice writing your own algorithms using arrays!  Create an algorithm for each of the challenges below.  Make sure that you run your code to ensure your output is matching the provided expected output.   One you are done, submit your .js file with the solution. */


//Using the given array:
let testArr = [6,3,5,1,2,4]


//Predict 1
function predit1(testArr){
  let sum = 0;
for(let i =0; i < testArr.length; i++){
 sum += testArr[i];
console.log("Num "+ testArr[i] + ', '+"Sum " + sum);
  }
}
console.log("Here are the indexes and their sum: ")
predit1(testArr);



//My Prediction
/*
I plan to use a for loop taht will loop through each index in the array. I will have a console.log and conctainate 'Num' with the value of thh index, seperated by a comma with 'Sum' and the vaule of the total value. I believe this is teh algorithm need to reach the desired output
*/


//Expected Output
/*
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21

*/

//Output
/*
My prediction was right!!! I did recieve a few errors at first , becaues i didnt realize i had to pass a argument when calling a function, i now know!
My Output: 
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21
*/



//Predict 2
function predit2(testArr){
  for( let i = 0; i < testArr.length; i++){
    testArr[i] = i * testArr[i];
  }
  return testArr;
}
console.log("This is the new array: " + predit2(testArr));

//My Prediction
/*
Im expected to multiply each array value by its index number.I plan to do a for loop looping through each index in the array. I will most likely have to multiply i * testArr[i] and then reassign the value of [i] with that outcome. Ill return the array filled filled with the new values/
*/

//Expected Output
//[0,3,10,3,8,20]


//Output
/*
I was right about the outcome! I was able to take the index number and multiply it by it own value to replce it with the result.Outputting the same array filled with newer values.
I am concerned taht the output isnt surronded by []. Im unsure if what i did was wrong.I am open to any opinions.
*/