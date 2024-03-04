# Prime Number Generator

- This project provides a command-line interface (CLI) tool for generating prime numbers within a specified range using two different algorithms: Trial Division and Sieve of Eratosthenes. The user can choose the generation method and input the range of numbers via the CLI. It includes a server-side component to record execution details in a MongoDB database and a command-line interface (CLI) tool for user interaction.

## Usage

- Clone the repository and navigate to the root directory:

```
git clone git@github.com:sahilrw/prime-gen.git
cd primes
```

- Install all dependencies

```
npm install
```

- Make sure MongoDB is installed and running.

- Create a .env file in the project directory and add your MongoDB connection string in the following format. Replace <your-mongodb-connection-string with your actual string>:

```
MONGODB_URI=<your-mongodb-connection-string>
```

Start the server:

```
node server.js
```

Once the server is running, you can send HTTP requests to generate prime numbers. See the API documentation for available endpoints.

- Follow the prompts to enter the starting and ending numbers of the range and select the generation method (1 for Trial Division, 2 for Sieve of Eratosthenes).

## API Documentation

### Endpoint: /generate-prime

- Method: GET

- Query Parameters:
  - start: Starting number of the range (required)
  - end: Ending number of the range (required)
  - method: Generation method (1 for Trial Division, 2 for Sieve of Eratosthenes) (required):

## Code Structure

- server.js: Contains the Express server setup and routes for generating prime numbers.
- generate-prime.js: Contains functions for generating prime numbers using the Trial Division and Sieve of Eratosthenes algorithm
- db.js: Manages the connection to MongoDB and records execution details.
- .env: Stores environment variables, including the MongoDB connection string.
- prime.test.js: Contains unit tests
- docs.md: Documentation providing instructions and explaining the code for setting up and using the CLI tool.
- package.json: Defines project dependencies and scripts.

## Algorithm Details

- Trial Division: Checks each number in the specified range individually to determine if it's prime by dividing it by all numbers from 2 to the square root of the number.
- Sieve of Eratosthenes: Generates primes by iteratively marking the multiples of each prime number starting from 2, effectively filtering out composite numbers.

## Unit Tests

- Unit tests for the prime number generation algorithms are included in the test directory. You can run the tests using the following command:

```
npx jest prime.test.js
```

## Contributions

- Sahil Wankhade
