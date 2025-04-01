# ErrorHandling_Node

make a basic API with a few routes to create and retrieve reservations. The focus is to make it error-proof so that if anything goes wrong, the API won’t crash. Instead, it’ll send friendly error messages. 

By the end of this, you’ll: 

- Handle errors in callbacks, promises, and async/await functions. 

- Use Express error-handling middleware to catch and respond to errors. 

- Build a robust API that gracefully handles errors. 

 

### Setup 

Create a new directory for your project. 

Run npm init -y to initialize a new Node.js project. 

Install Express: npm install express. 

 

### Tasks 

- Callback Error Handling  

- Create a database.js file with a createReservation function that simulates a reservation database. It should: 

- Take a callback function. 

- Use a setTimeout to simulate a delay. 

- Have a 50% chance to fail (for practice handling errors). 

- If successful, return a success message; if it fails, return an error. 