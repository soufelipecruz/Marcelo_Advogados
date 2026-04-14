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

const demandas = document.querySelectorAll('.demanda-item');

demandas.forEach(item => {
    item.addEventListener('click', () => {

        const ativo = document.querySelector('.demanda-item.active');

        if(ativo && ativo !== item){
            ativo.classList.remove('active');
        }

        item.classList.toggle('active');
    });
});


document.querySelectorAll('.item-toggle').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});