import { html, render } from './node_modules/lit-html/lit-html.js' 

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
}