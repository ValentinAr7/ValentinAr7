import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js'

const root = document.getElementById('allCats')

const catTemplate = html`
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul>`