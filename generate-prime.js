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

// CLI
const readline = require("readline").createInterface({
  // input-output (question-response) interface
  input: process.stdin,
  output: process.stdout,
});
const { performance } = require("perf_hooks");

readline.question("Enter the starting number: ", (start) => {
  readline.question("Enter the ending number: ", (end) => {
    start = parseInt(start);
    end = parseInt(end);

    // check whether input(start-end) are numbers and they are in range
    if (isNaN(start) || isNaN(end) || start < 1 || end < start) {
      console.log(
        "Invalid input. Please enter a valid starting and ending number"
      );
      // close the interface after console log
      readline.close();
      return;
    }

    readline.question(
      "Choose generation method (1 - Trial Division, 2 - Sieve of Eratosthenes): ",
      (method) => {
        // switch case for choosing gereration method
        let primes;
        switch (parseInt(method)) {
          case 1:
            startTime = performance.now();
            primes = trialDivision(start, end);
            endTime = performance.now();
            console.log(
              `Trial Division method time elapse: ${(
                endTime - startTime
              ).toFixed(2)} milliseconds`
            );
            break;
          case 2:
            startTime = performance.now();
            primes = sievePrime(start, end);
            endTime = performance.now();
            console.log(
              `Sieve of Eratosthenes method time elapse: ${(
                endTime - startTime
              ).toFixed(2)} milliseconds`
            );
            break;
          default:
            console.log("Invalid input. Pick method 1 or method 2.");
            readline.close();
            return;
        }
        console.log(
          `Prime numbers between ${start} and ${end} are:, ${primes.join(", ")}`
        );
        readline.close();
      }
    );
  });
});

module.exports = { trialDivision, sievePrime };
