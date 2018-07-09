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
        this.oOffsets = []
        // Manejadores de eventos
        this.oBotonMenu1.addEventListener('click', this.toggleMenu.bind(this))
        this.oBotonMenu2.addEventListener('click', this.toggleMenu.bind(this))
        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.activarItem.bind(this))}
        )
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))

        this.prepararNavegacion()
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

    activarItem(oE) {
        console.log('Activando Item')
        this.aMenuItems.forEach(
            (item) => { item.classList.remove('active')}
        )
        oE.target.classList.add('active')
    }


    changeMenuStyle () {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  this.oOffsets['#home'] && pageOffset < this.oOffsets['#about']) {
            menuItem = 0
        } else if (pageOffset >= this.oOffsets['#about'] && pageOffset < this.oOffsets['#contact']) {
             menuItem = 1
        } else {
            menuItem = 3
        }
        this.aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        this.aMenuItems[menuItem].classList.add('active')
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative =  this.cumulativeOffset(item);
                this.oOffsets['#'+item.id] = cumulative;
            }
        )
    
    }

    cumulativeOffset (element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while(element);
        return top;
    };
}