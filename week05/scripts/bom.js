// Get references to important HTML elements
const input = document.querySelector('#favchap');       // Input field for favorite chapter
const button = document.querySelector('button');        // The add chapter button
const list = document.querySelector('#list');           // The list that will display added chapters

// Try to load existing chapter list from localStorage, or start with an empty array
let chaptersArray = getChapterList() || [];

// Populate the list initially with stored chapters (if any)
chaptersArray.forEach(chapter => {
    displayList(chapter);  // Call displayList for each chapter already in localStorage
});

// When the add button is clicked...
button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Only proceed if the input is not empty or whitespace
        displayList(input.value);        // Display the new chapter in the list
        chaptersArray.push(input.value); // Add the chapter to the array
        setChapterList();                // Save the updated array to localStorage
        input.value = '';                // Clear the input field
        input.focus();                   // Focus the input for the next entry
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');               // Create a list item
    let deletebutton = document.createElement('button'); // Create a delete button

    li.textContent = item;                               // Set the list item text to the chapter
    deletebutton.textContent = '❌';                     // Use an emoji for the delete button
    deletebutton.classList.add('delete');                // Optional styling with CSS class

    li.append(deletebutton);                             // Add the delete button to the list item
    list.append(li);                                     // Add the list item to the actual list in the DOM

    // Add event listener to handle deleting a chapter when ❌ is clicked
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);                 // Remove the list item from the DOM
        deleteChapter(li.textContent);       // Call the delete function to update the array & storage
        input.focus();                        // Return focus to the input field
    });
}

// Function to store the current chaptersArray into localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); // Store array as string
}

// Function to retrieve the chaptersArray from localStorage (or return null)
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // Parse the string back to an array
}

// Function to delete a chapter from array and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);            // Remove the ❌ at the end
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove the selected chapter
    setChapterList();                                          // Update localStorage
}
