/*
The prime factors of 13195 are 5, 7, 13, and 29
What is the alrgest prime factor of the number 600851475143?
*/

var maxPrimeFactor = function(number){

  for(var x = 2; x < number; x++){

    while(number % x === 0){
      number = number / x;
    }
  }
  return number;
};

var highest = maxPrimeFactor(600851475143);

console.log(highest);
