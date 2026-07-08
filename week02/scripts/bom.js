const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 





button.addEventListener('click', function() {
    // Code to execute when the elemennt is clicked

   

    if (input.value.trim() !== ''){ 
         // do something
        //  creare li element
        const li = document.createElement('li');
        // create delete button
        const deleteButton = document.createElement('button');


        // each list contains the input value
         
        li.textContent= input.value;

        // the delete button is ❌


        deleteButton.textContent = '❌';

        // attach the delete button behind the li


        li.appendChild(deleteButton);

        // append each of the li under the list

        list.appendChild(li);

        
    // whenever the delete button is clicked, remove the li

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });


// after typing and adding, the input shoould be empty and free
    input.value = '';
    input.focus();

//  do this if the IF condition is not met

} else {
    input.focus();
}




});


