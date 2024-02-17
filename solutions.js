// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  let a=1;
  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if(n == 0 ){
    return 1;
  }
  else{
    for(let i=1; i<=n; i++){
      a = a * i; 
    }
    return a;
  }
}

// Find the Largest Number
function findLargest(arr) {
  let may = -200;
  for(let i=0; i<arr.length; i++)
  {
    if(typeof arr[i] !== 'number')
    {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    if(arr[i]>may)
    {
      may = arr[i];
    }
  }
  return may;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
