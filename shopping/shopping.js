
//step: 1 import functions 

import { checkAuth, logout, getItems} from '../fetch-utils.js';

import { renderShoppingItem } from '../render-utils.js';

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});


//step 2: grab dom elements

const shoppingListContainer = document.querySelector('.shopping-list-container');
const form = document.querySelector('form'); // submit button on form doesnet need a dom element created
const logoutButton = document.getElementById('logout'); // if its a get eleement by ID , you dont need the hashtag
const deleteButton = document.getElementById('delete-button');
// const loadingSpinner =

//step: 3 create functions and add event listeners 



// on load 
//fetch and display user's existing list items
window.addEventListener('load', () => {
    fetchAndDisplayList(); // this function renders items 
})


//when clicked, logout 
logoutButton.addEventListener('click', () => {
     logout(); // this item doesnt need await async because? 
});


//when clicked, we will call delete function from fetch utls
deleteButton.addEventListener('click', async () => {
    await deleteAllItems();

    await fetchAndDisplayList();
})







// call supabase to fetch all shopping items for this user
// loop through those items, create DOM elements,
const itemArchive = getItems()
 
    for(item in itemArchive ) {
        renderShoppingItem(item)
        return item
    }
        if (item.bought === true) {
            item.classList.ad
        }
        else 

//and append -- render items differently if "bought: true"



//this add event listener will take inputted info and call the display function
// to render each item inputted and display it on the screen in the shoppingListContainer
form.addEventListener('click', => () {



}

//fetchAndDisplayList()
// On the list page load event, fetch the list itemss from supabase and render them to the page. Note that list 
// items should have a quantity and an item name.


//Add a list item to supabase by using the input and button.



//When a list item is added, clear out the shopping
// list and render the updated list of shopping items.



//When a user clicks a list item, it becomes bought. Update this state in supabase, clear out the shopping list, and re-fetch and redisplay the updated items. 
//Call your fetchAndDisplayList() function to do this work.


//When a user clicks delete all shopping list items, delete them.
// Update this state in supabase, clear out the shopping list, and re-fetch and redisplay the updated items. Call your fetchAndDisplayList() function to do this work.