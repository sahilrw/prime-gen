// Import the necessary modules
const express = require("express");
const { trialDivision, sievePrime } = require("./generate-prime");
const { recordExecution } = require("./db");

// Create an Express application
const app = express();
const PORT = 3000; // Define the port number for the server

// Middleware to parse JSON requests
app.use(express.json());

// Start the server and listen on the specified port
const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB asynchronously after the server starts
require("./db")
  .connectToDB()
  .then(() => {
    // Handle successful connection to MongoDB
    console.log("Connected to MongoDB");

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Enter the starting number: ", (start) => {
      readline.question("Enter the ending number: ", (end) => {
        start = parseInt(start);
        end = parseInt(end);

        // Check for valid input
        if (isNaN(start) || isNaN(end) || start < 1 || end < start) {
          console.log(
            "Invalid input. Please enter a valid starting and ending number"
          );
          readline.close();
          server.close(); // Close the server if input is invalid
          return;
        }

        readline.question(
          "Choose generation method (1 - Trial Division, 2 - Sieve of Eratosthenes): ",
          (method) => {
            // Ask user to choose generation method
            let primes; // Initialize variable to store prime numbers
            let algorithm; // Initialize variable to store the algorithm used

            switch (parseInt(method)) {
              case 1: // If Trial Division is chosen
                startTime = performance.now(); // Start measuring time
                primes = trialDivision(start, end); // Generate primes using Trial Division
                endTime = performance.now(); // Stop measuring time
                algorithm = "Trial Division"; // Set algorithm name
                console.log(
                  `Trial Division method time elapse: ${(
                    endTime - startTime
                  ).toFixed(2)} milliseconds` // Log time taken
                );
                break;
              case 2: // If Sieve of Eratosthenes is chosen
                startTime = performance.now(); // Start measuring time
                primes = sievePrime(start, end); // Generate primes using Sieve of Eratosthenes
                endTime = performance.now(); // Stop measuring time
                algorithm = "Sieve of Eratosthenes"; // Set algorithm name
                console.log(
                  `Sieve of Eratosthenes method time elapse: ${(
                    endTime - startTime
                  ).toFixed(2)} milliseconds` // Log time taken
                );
                break;
              default: // If invalid method is chosen
                console.log("Invalid input. Pick method 1 or method 2.");
                readline.close();
                server.close(); // Close the server if input is invalid
                return;
            }

            console.log(
              `Prime numbers between ${start} and ${end} are:, ${primes.join(
                ", "
              )}` // Log generated prime numbers
            );

            // Record the execution details
            recordExecution({
              timestamp: new Date(),
              range: [start, end],
              timeElapsed: endTime - startTime,
              algorithm,
              numPrimes: primes.length,
            });

            readline.close(); // Close readline interface
            server.close(); // Close the server after processing the input
          }
        );
      });
    });
  })
  .catch((err) => {
    // Handle errors in connecting to MongoDB
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with error code 1
  });
