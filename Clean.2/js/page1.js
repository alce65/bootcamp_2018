import { Menu } from './menu.js'

/**
 * 
 * @class Page1
 * 
 * Se instancia al acceder a la página index
 * Depende de la clase Menu para gestionar los menus, 
 * comportidos con la otra página del sitio
 * 
 */


export class Page1 {
    constructor() {
        this.oMenus = new Menu()
    }
}