export function renderItem(shoppingItem) {

    const shoppinglistDiv = document.createElement('div');
    const shoppingListItemEl = document.createElement('p');
    const shoppingListItemAmount = document.createElement('p');

    shoppinglistDiv.classList.add('new-shopping-list-item');


    if (shoppingItem.bought === true) {
        shoppingListItemEl.classList.add('done'); //how come were adding class to p and not div? 
    } else {
        shoppingListItemEl.classList.add('not-done');
    }


    shoppingListItemEl.textContent = shoppingItem.amount;
    shoppingListItemAmount.textContent = shoppingItem.shopping_list_item; //right side is column in supabase?

    shoppinglistDiv.append(shoppingListItemEl, shoppingListItemAmount);

    return shoppinglistDiv;
}