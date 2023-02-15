import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

const townsRoot =document.getElementById('towns')
const resultRoot = document.getElementById('result')
document.querySelector('button').addEventListener('click', search)

update()

function searchTemplate(townsName, match){
   const ul = html`
   <ul>
   ${townsName.map(townsName => createLiTemplate(townsName, match))}
   </ul>`


   return ul
}

function createLiTemplate(town, match){
   return html`
   <li class="${town.toLowerCase().includes(match) ? "active" : "" }">${town}</li>`
}

function update(text){
   const ul = searchTemplate(text)
   render(ul, townsRoot)
}

function search(e) {
   const textNode = document.getElementById('searchText')
   const text = textNode.value.toLowerCase()
   update(text)
}
