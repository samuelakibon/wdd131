let firstName = 'Antonia';
let lastName = 'Francesca';


// Defining a function

function fullName(first, last) {
    return `${first} ${last}`;
}

// Using a constant to do the same thing

const fullName = function (first, last) {
    return `${first} ${last}`;
}


// using an arrow function expression to do the same thing

const fullName = (first, last) => `${first} ${last}` ;



// Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName


document.querySelector('#fullName').textContent = fullName(firstName, lastName);