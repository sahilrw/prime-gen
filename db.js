// Import the dotenv module to load environment variables from a .env file
require("dotenv").config();

// Retrieve the MongoDB connection string from .env
const uri = process.env.MONGODB_URI;

// Import the MongoClient class from the MongoDB module
const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

// Connect to mongodb database
async function connectToDB() {
  try {
    await client.connect();
  } catch (err) {
    process.exit(1);
  }
}

connectToDB();

const db = client.db();
const COLLECTION_NAME = "executions";

// Define an asynchronous function to record execution details in the database
async function recordExecution(executionDetails) {
  try {
    const collection = db.collection(COLLECTION_NAME);
    await collection.insertOne(executionDetails);
    console.log(
      `Execution record inserted into the database: ${COLLECTION_NAME}`
    );
  } catch (err) {
    console.error("Failed to insert execution record into the database", err);
  }
}

// Export the connectToDB and recordExecution functions for external use
module.exports = { connectToDB, recordExecution };
