const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener('click', function(){
        const title = card.querySelector('.card__title').innerHTML;
        const author = card.querySelector('.card__author').innerHTML;
        const img = card.querySelector('img').src;
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('.modal__title').innerHTML = title;
        modalOverlay.querySelector('.modal__author').innerHTML = author;
        modalOverlay.querySelector('img').src = img;
        console.log(title+author+img);
    });
}

modalOverlay.querySelector('.modal__close').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('.modal__title').innerHTML = '';
    modalOverlay.querySelector('.modal__author').innerHTML = '';
    modalOverlay.querySelector('img').src = '';
});