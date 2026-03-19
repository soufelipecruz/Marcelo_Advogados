document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const id = this.getAttribute('href')

const section = document.querySelector(id)

if(section){

section.scrollIntoView({
behavior:"smooth"
})

}

})

})