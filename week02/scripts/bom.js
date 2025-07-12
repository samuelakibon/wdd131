const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');




button.addEventListener('click', function () {


    if (input.value.trim() !== '') { // Check if the input is not empty or just whitespace

        // Create a new list item and delete button


        let liItems = document.createElement('li');
        // Creating a button for deleting the list item
        const deleteButtons = document.createElement('button');

        liItems.textContent = input.value; // Set the text content of the list item to the input value

        deleteButtons.textContent = '❌';   // Using an emoji for the delete button




        liItems.appendChild(deleteButtons); // Append the delete button to the list item

        list.appendChild(liItems);  // Append the list item to the list

        deleteButtons.addEventListener('click', function () {
            list.removeChild(liItems);
            input.focus();
        });


        input.value = '';   // Clear the input field after adding the item
        input.focus();  // Set focus back to the input field for convenience

    }






});