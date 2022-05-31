
const menuBtn = document.querySelector('#menuBtn')
const asideMenu = document.querySelector('#mobileAsideMenu')

const headerImg = document.querySelector('.head-content-2 img ')



if(window.innerHeight < 900) {
    document.querySelector('.head-info h1').style.fontSize = '30px'
} 

if (window.innerHeight < 700 || window.innerWidth < 391) {
     headerImg.style.display = 'none'
}

window.addEventListener('resize', () => {
    
    if(window.innerHeight < 844 || window.innerWidth < 391) {
        headerImg.style.display = 'none'
    } else {
        // document.querySelector('.head-info h1').style.fontSize = '4rem'
        headerImg.style.display = 'block'
    }
    if(window.innerHeight < 900 || window.innerWidth < 415) {
        // document.querySelector('.head-info h1').style.fontSize = '30px'
    }
})

menuBtn.addEventListener('click', () => {
    
    if(asideMenu.classList.contains('aside-bar-hidden')) {
        asideMenu.classList.remove('aside-bar-hidden')
        document.querySelector('.bx-menu').style.display = 'none'
        document.querySelector('.bx-x').style.display = 'block'
    } else {
        asideMenu.classList.add('aside-bar-hidden')
        document.querySelector('.bx-x').style.display = 'none'
        document.querySelector('.bx-menu').style.display = 'block'
    }

    console.log('click')
    // document.querySelector('#mobileAsideMenu').style.display = 'block'
})

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 55) {
        document.querySelector('#mobileHeader').style.background = '#0E121A'
        document.querySelector('#desktopHeader').style.background = '#0E121A'
    } else {
        document.querySelector('#mobileHeader').style.background = 'none'  
        document.querySelector('#desktopHeader').style.background = 'none'  
    }
})