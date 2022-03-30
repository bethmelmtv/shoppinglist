
//step: 1 import functions 

import { checkAuth, logout, getItems, createItem, deleteAllItems, buyItem } from '../fetch-utils.js';

import { renderItem } from '../render-utils.js';

checkAuth();


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
});


//when clicked, we will call delete function from fetch utls
deleteButton.addEventListener('click', async () => {
    await deleteAllItems();

    await fetchAndDisplayList();
});


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    //gets data from form 
    const data = new FormData(form);

    //were gettin data from form, and inputting the data into the createItem function
    await createItem ({
        amount: data.get('amount'), //how does form know 'amount' answer: because of the name or ID you gave each input 
        shopping_list_item: data.get('shopping-item'), //right hand side is name we gave to input on form
        bought: false // left is supabase
    });

    form.reset();

    //notes from demo 
    //// - re-fetch and re-append (pessimistic rendering -- assumes the database fails,
    // we don't re-render until the database PROVES its success, LOADING SPINNER)
    // not sure what note above means 

    await fetchAndDisplayList();
});


async function fetchAndDisplayList() {
    //fetchest the items, clears out the list, and redisplays them

    //clears out the list  --> what list are we clearing out and why? 

    shoppingListContainer.textContent = '';

    //fetchest the item from SUPABASE
    const shoppingList = await getItems();

   // and redisplays them
    for (let shoppingItem in shoppingList) {

        const newShoppingItem = renderItem(shoppingItem); //were creating new variable?

        newShoppingItem.addEventListener('click', async () => { //why is async here

            await buyItem(shoppingItem.id);
            console.log(shoppingItem);
            fetchAndDisplayList();

        });
        shoppingListContainer.append(newShoppingItem);
       
    }

}




    

logoutButton.addEventListener('click', () => {
    logout();
});






   // When a user clicks a list item, it becomes bought. Update this state in supabase,
     

   // clear out the shopping list, and re-fetch and redisplay the updated items.

   //On the list page load event, fetch the list itemss from supabase and render them to the page. Note that list items should 
  // have a quantity and an item name. Call your fetchAndDisplayList() function to do this work.





// // call supabase to fetch all shopping items for this user
// // loop through those items, create DOM elements,
// const itemArchive = getItems()
 
//     for(item in itemArchive ) {
//         renderShoppingItem(item)
//         return item
//     }
//         if (item.bought === true) {
//             item.classList.ad
//         }
//         else 

// //and append -- render items differently if "bought: true"



//this add event listener will take inputted info and call the display function
// to render each item inputted and display it on the screen in the shoppingListContainer
// form.addEventListener('click', => () {



// }

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