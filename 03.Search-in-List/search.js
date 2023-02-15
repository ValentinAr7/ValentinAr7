import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

const townsRoot =document.getElementById('towns')
const resultRoot = document.getElementById('result')

function searchTemplate(townsName){
   const ul = html`
   <ul>
   ${towns.map(town => createLiTemplate(town))}
   </ul>`
}

function createLiTemplate(town){
   return html`
   <li>${town}</li>`
}

function search() {
 
}
