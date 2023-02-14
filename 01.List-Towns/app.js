import { html, render } from './node_modules/lit-html/lit-html.js' 

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
const root = document.getElementById('root')

function onSubmit(e){
    e.preventDefault()

    const formData = new FormData(form);                //extracts the form data using the FormData constructor
    const {towns} = Object.fromEntries(formData);       //extracts the towns value from the form data using destructuring
    const townsArray = towns.split(', ')                //split into an array of strings and pass to the renderTownList function.
    renderTownList(townsArray)
}

function renderTownList(data){
    const result = createTownList(data)
    render(result, root )
}

    function createTownList(data){
        const ul = html`
        <ul>
            ${data.map(el => html`<li>${el}</li>`)}
        </ul>`

        return ul
    }

