import {Index} from './index.js'

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

        if (this.page === '' || this.page === 'index.html') {
            new Index()
        } 
    }

}