const target = document.querySelectorAll('[data-anime]')
const navbar = document.querySelector('.navbar')
const animationClass = 'animate'
const stickyClass = 'sticky'

window.addEventListener('scroll', function() {
    if (this.scrollY > 20) 
        navbar.classList.add(stickyClass)
    else
        navbar.classList.remove(stickyClass)
})

const collageImages = [...document.querySelectorAll('.collage__img')]

collageImages.map((item, indexItem) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, indexImage) => {
            if (indexImage != indexItem) {
                image.style.filter = 'blur(10px)'
                item.style.zIndex = 2
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null
        })
    })
})
