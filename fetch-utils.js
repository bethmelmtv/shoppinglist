const SUPABASE_URL = 'https://zwaquhawqyttxdrcbhxx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YXF1aGF3cXl0dHhkcmNiaHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5ODEsImV4cCI6MTk2MzEyNzk4MX0.FnfsYqPR7GPz5COh7itHiDt6as7-F__iU57NyG7IKyE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./shopping'); //updated so that i can be logged in 
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }

//
export async function getItems() {
    const response = await client
        .from('shopping_lists')
        .select('*');
    return response.body;

}


export async function deleteAllItems() {
    const user = getUser();

    console.log(user); // why do we need to console log? 
    const response = await client
        .from('shopping_lists')
        .delete()
        .match({ user_id:user.id }); //left side is supabase column // right side is 

    return response.body;
}

export async function createItem(shoppingListItem) {
    const response = await client
        .from('shopping_lists')
        .insert(shoppingListItem);

    return response.body; //what does this do 
}

export async function buyItem(id) {
    // change item from 
    const response = await client
        .from('shopping_lists')
        .update ({ bought: true })
        .match({ id }); //where is id coming from? because its not the column 

    return response.body;

}

