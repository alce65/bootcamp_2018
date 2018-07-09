import {Index} from './index.js'
import {Page1} from './page1.js'

/**
 * @class Main
 * 
 * Enrutador básico, que instancia una clase 
 * correspondiente a la página seleccionada en el menú principal
 * 
 */

export class Main {

    constructor () {

        this.page = window.location.pathname
        this.page = this.page.substr(this.page.lastIndexOf('/')+1,this.page.length)

        if (this.page === 'index.html') {
            new Index()
        } else if (this.page === 'post1.html') {
            new Page1()
        }
    }

}