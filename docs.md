# Trial Division Method Description

The Trial Division method is simple and straightforward algorithm used to determine whether given number is prime or composite.
Principle: If a number n is composite, it must have atleast one prime factor less than or equal to it's square root.

## isPrime function

- The "isPrime" function takes n as an argument.
- It initially checks whether n is less than or equal to 3. If true the function returns true(prime).
- Further it checks whether n is lesser-than/equal-to 1 and checks divisibility of n by 2 and 3. If any of the conditions are true, they are marked composite(not prime).
- Then the loop counter is initialized at 5. A while loop is created that continues as long as i is lesser-than/equal-to square root of n.
- Further it checks whether n is divisible by i or i + 2. If it is divisible the number is marked composite (not prime).
- i is incremented by 6 to move to the next potential prime number.
- if loop continues without finding any divisors return true.

#### WHY INCREMENT BY 6? All prime numbers greater than 3 can be expressed in the form of (6k +- 1).

## trialDivision function

- This function takes 2 arguments: start and end.
- An empty array is initialized to store prime numbers.
- A for loop is created. It iterates from the starting number upto the end number incrementally.
- Checks if the current number i is prime using 'isPrime' funtion. If i is prime, the value is pushed to the 'primeArr' array.
- After all numbers within range are checked, return the array.

# Sieve of Eratosthenes

The Sieve of Eratosthenes is a simple and efficient method for finding all prime numbers. It works iteratively marking multiples of each prime number found as composite(not prime) and continues until the ending number.

## sievePrime function

- A new array object(sieve) is initialized and all the values are set to true initially.
- Another array is initialized to store the prime values.
- A for loop is created, it starts at 2 and continues to the end. If sieve[i] is true, it indicates i is prime number.
- Then all the multiples of i are marked as composite. The loop runs until the ending numner as specified.
- then the filtered array is returned within the range.

## Command Line Interface(CLI)

- Setup: It uses the 'readline' module to create an interface that reads input from standart input and writes output to standard output. It imports the performance object from perf-hooks module to measure execution time of the algorithm implementations.
- Input: Program prompts the user to input the starting and ending number. Further it checks whether the input values are valid.
- Strategies: Program further prompts the user to choose the prime number generation method. They can choose between the Trial Division method and the Sieve of Eratosthenes method.
- Execution: Based on the chosen strategy, the function is executed and the time taken for execution is calculated
- Output: Program displays the elapsed time by the chosen strategies and also outputs the prime numbers within the specified range.
- Module Exports: The trialDivision and sievePrime functions are exported, which can be further used in other scripts [in this case, testing].

## Testing

- Jest is used for running the test cases. It is installed via npm.
- Some example test cases are include to check the correctness of the trialDivision and sievePrime functions.
- Various tests, both basic and random are provided to evaluate the correctness.
