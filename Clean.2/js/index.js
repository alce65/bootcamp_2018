import { FormContact} from './form-contact.js'
import { Menu } from './menu.js'

/**
 * 
 * @class Index
 * 
 * Se instancia al acceder a la página index
 * Depende de:
 *  - la clase Menu para gestionar los menus, 
 *      comportidos con la otra página del sitio
 *  - la clase FormCoctact, responsable del 
 *      formulario de contactos
 * 
 */

export class Index {
    constructor() {
        // elementos del DOM
        this.oBotonOlderPost = document.querySelector('#olderPostsBtn')
        this.oInputName = document.querySelector('#name')
        this.oMenus = new Menu()
        this.oFormContact = new FormContact()
        console.log(this)
        this.defineEventListeners()
    }

    defineEventListeners() {
        //this.oBotonOlderPost.onclick = this.verOlderPosts
        this.oBotonOlderPost.addEventListener('click', this.verOlderPosts.bind(this))
        this.oInputName.addEventListener('change', this.probarInput.bind(this))
        this.oInputName.addEventListener('input', this.probarInput.bind(this))
    }

    verOlderPosts(oE) {
        console.dir(oE)
    }

    probarInput(oE) {
        if(oE.type == "change") {
            console.log('change')
            console.dir(oE.target.value)
        } else if (oE.type == "input") {
            console.log('input')
            console.dir(oE.target.value)
        }
    }
}

