# Prime Number Generator

- This project provides a command-line interface (CLI) tool for generating prime numbers within a specified range using two different algorithms: Trial Division and Sieve of Eratosthenes. The user can choose the generation method and input the range of numbers via the CLI.

## Usage

- Clone the repository, cd into the root folder:

```
git clone git@github.com:sahilrw/prime-gen.git
cd primes
```

- Install all dependencies

```
npm install
```

- Run the CLI

```
node generate-prime.js
```

- Follow the prompts to enter the starting and ending numbers of the range and select the generation method (1 for Trial Division, 2 for Sieve of Eratosthenes).

## Code Structure

- generate-prime.js: Contains functions for generating prime numbers using the Trial Division and Sieve of Eratosthenes algorithm and implements the CLI functionality and user interactions.
- prime.test.js: Contains unit tests
- docs.md: Documentation providing instructions and explaining the code for setting up and using the CLI tool.

## Algorithm Details

- Trial Division: Checks each number in the specified range individually to determine if it's prime by dividing it by all numbers from 2 to the square root of the number.
- Sieve of Eratosthenes: Generates primes by iteratively marking the multiples of each prime number starting from 2, effectively filtering out composite numbers.

## Unit Tests

- Unit tests for the prime number generation algorithms are included in the test directory. You can run the tests using the following command:

```
npx jest prime.test.js
```

### Credits: Sahil Wankhade
