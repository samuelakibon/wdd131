// 1. Given these function declarations:


function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}


// Call the calculate function and pass it the arguments needed to produce the console output 2 + 3. Note that you will pass three arguments total: two numbers and a callback function.


calculate(2, 3, displayResult)



// 2. A common use of callback functions in JavaScript is for asynchronous operations, such as handling events or making asynchronous requests. Here is a simulated example:

function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);
