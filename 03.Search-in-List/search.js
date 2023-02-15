import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

const townsRoot =document.getElementById('towns')
const resultRoot = document.getElementById('result')

update()

function searchTemplate(townsName){
   const ul = html`
   <ul>
   ${townsName.map(totownsNamewn => createLiTemplate(townsName))}
   </ul>`


   return ul
}

function createLiTemplate(town){
   return html`
   <li>${town}</li>`
}

function update(){
   const ul = searchTemplate(towns)
   render(ul, townsRoot)
}

function search() {
 
}
