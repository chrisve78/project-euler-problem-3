/*
The prime factors of 13195 are 5, 7, 13, and 29
What is the alrgest prime factor of the number 600851475143?
*/

var maxPrimeFactor = function(number){

  largeNum = number;
  array1 = [];

  for(var x = 2; x < largeNum; x++){
    while(largeNum % x === 0){
      largeNum = largeNum / x;
      array1.push(largeNum);
    }
  }
  console.log(array1);
  return largeNum;
};

var highest = maxPrimeFactor(600851475143);

console.log(highest);
