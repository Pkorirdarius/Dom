// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn')

// add event listeners

openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
})
window.addEventListener('click', function(){

    if(e.target === modalContainer){
        modalContainer.style.display = 'none' ;
    }
})