import { FormContact} from './form-contact.js'

export class Main {

    constructor () {
         // elementos del DOM
         this.oBotonOlderPost = document.querySelector('#olderPostsBtn')
         this.oFormContact =  document.querySelector('#contact')
         this.oInputName = document.querySelector('#name')
         this.oBotonMenu = document.querySelector('#menuBtn')

        this.aMenu = document.querySelectorAll("nav#top-menu a")
        this.aSections = document.querySelectorAll("section")
        this.oOffsets = []

        this.prepararNavegacion()
    }

    defineEventListeners() {
        //this.oBotonOlderPost.onclick = this.verOlderPosts
        this.oBotonOlderPost.addEventListener('click', this.verOlderPosts)
        this.oInputName.addEventListener('change', this.probarInput)
        this.oInputName.addEventListener('input', this.probarInput)
        this.oBotonMenu.addEventListener('click', this.toggleMenu)
        this.oFormContact.addEventListener('submit', this.leerContact)

        window.addEventListener('scroll', this.changeMenuStyle.bind(this))

    }

    verOlderPosts(oE) {
        console.dir(oE)
    }

    toggleMenu() {
        document.querySelector('#top-menu').classList.toggle('menu-top')
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

        this.aMenu.forEach(
            (item) => item.classList.remove('active')
        )
        this.aMenu[menuItem].classList.add('active')
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative =  this.cumulativeOffset(item);
                this.oOffsets['#'+item.id] = cumulative;
            }
        )
    console.log(this.oOffsets)
    }

    cumulativeOffset (element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while(element);
        return top;
    };

    leerContact(oE) {
        oE.preventDefault()
        let form = new FormContact()
        form.guardarDatos()
    }
}