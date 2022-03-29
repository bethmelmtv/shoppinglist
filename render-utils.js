export function renderShoppingItem() {

    shoppinglistDiv = document.createElement('div');
    shoppingListItemEl = document.createElement('p');
    shoppingListItemAmount = document.createElement('p');

    shoppingListItemEl.textContent = // the item that was inputted by customer 
    shoppingListItemAmount.textContent = // the item that was inputted by customer 

    shoppinglistDiv.append(shoppingListItemEl,shoppingListItemAmount);

    shoppinglistDiv.classList.add('new-shopping-list-item');

    return shoppinglistDiv;
}