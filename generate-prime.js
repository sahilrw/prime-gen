// generate prime numbers

// check if number is prime by trial division approach
function isPrime(n) {
  // handles edge case: 2 and 3 are prime numbers
  if (n <= 3) return n > 1;
  // num is not prime if it is divisible by 2, 3 or smaller than one
  if (n <= 1 || n % 2 === 0 || n % 3 === 0) return false;

  // check for primes
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// generate prime by trial division
function trialDivision(start, end) {
  let primeArr = [];
  // loop over the array from the start to end, push the numbers to the array if isPrime() return true
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  return primeArr;
}

function sievePrime(start, end) {
  // initialize a new array object & set all the values at every index to true initially
  let sieve = new Array(end + 1).fill(true);
  // init another array to store values
  let primes = [];

  // change the values of composite number to false by looping over the array
  for (let i = 2; i <= end; i++) {
    if (sieve[i] === true) {
      primes.push(i);
      for (let j = i * i; j <= end; j += i) {
        sieve[j] = false;
      }
    }
  }
  // ensure that the value in array is within range(start and end)
  return primes.filter((prime) => prime >= start && prime <= end);
}

module.exports = { trialDivision, sievePrime };
