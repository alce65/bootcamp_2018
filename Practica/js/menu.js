export class Menu {
    constructor () {
        // navs
        this.oBotonMenu1 = document.querySelector('#menu-btn-1')
        this.oBotonMenu2 = document.querySelector('#menu-btn-2')
        this.oMenuTop =  document.querySelector('#menu-top')
        this.oMenuBottom = document.querySelector('#menu-bottom')
        // Otros
        this.aMenuItems = document.querySelectorAll("nav#menu-top a")
        this.aSections = document.querySelectorAll("section")
        this.aOffsets = []
        this.calcularOffsets()
        // this.prepararNavegacion()
        this.seccionActiva = 0 
        // Manejadores de eventos
        this.oBotonMenu1.addEventListener('click', this.toggleMenu.bind(this))
        this.oBotonMenu2.addEventListener('click', this.toggleMenu.bind(this))

        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.navegar.bind(this))}
            // antes activarItem
        )
        window.addEventListener('scroll', this.scrollDetect.bind(this))
        // antes changeMenuStyle

       
    }

    toggleMenu(oE) {
        oE.preventDefault()
        // cambia su visibilidad
        oE.target.classList.toggle('hide')
        // cambia la visibilidad del otro icono
        if (oE.target.previousElementSibling) {
            oE.target.previousElementSibling.classList.toggle('hide')
        } else {
            oE.target.nextElementSibling.classList.toggle('hide')
        }
         // cambia la visibilidad del menu top para mobile
        this.oMenuTop.classList.toggle('hide')
    }

    navegar(oE) {
        let i = oE.target.dataset.index
        oE.preventDefault()
        window.scroll({
            top: this.aOffsets[i], 
            left: 0, 
            behavior: 'smooth'
        })
    }

/*     activarItem(oE) {
        console.log('Activando Item')
        this.aMenuItems.forEach(
            (item) => { item.classList.remove('active')}
        )
        oE.target.classList.add('active')
    } */


    scrollDetect (oE) {
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffsets.every(
            (offset, i) => { 
                if( position >= offset) {
                    index = i
                    return true}
                else { return false}
            })
        
        console.log(index)
        if (this.seccionActiva != index) {
            this.aMenuItems.forEach(
                (nodoMenu) => {nodoMenu.classList.remove('active')}
            )
            this.aMenuItems[index].classList.add('active')   
            this.seccionActiva = index
        }

   }

    calcularOffsets() {
        this.aSections.forEach(
            (section) => {
                this.aOffsets.push(section.offsetTop-60)
                // la versión más precias sería
                // this.aOffsets.push( this.cumulativeOffset(section)-60)
            }
        )
        this.aOffsets[0] = 0
        console.log(this.aOffsets)
    }


    cumulativeOffset (element) {

        // corrige el valor incorrecto de offsetTop
        // en caso de que las secciones incluyeran  position
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while(element);
        return top;
    };
}