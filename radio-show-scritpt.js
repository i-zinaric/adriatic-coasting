console.log('RADIO SHOW');


///GUMBI ZA OTVARANJE MENIJA MOBILE/////
const openButton = document.querySelector('#open-menu-button');
const closeButton = document.querySelector('#close-menu-button');

openButton.addEventListener('click', function() {
    document.querySelector('#closed-menu-header-mobile').style.display = 'none';
    document.querySelector('header').style.display = 'block';
    openButton.style.display = 'none';
    closeButton.style.display = 'inline-block';
})

closeButton.addEventListener('click', function() {
    document.querySelector('#closed-menu-header-mobile').style.display = 'block';
    document.querySelector('header').style.display = 'none';
    openButton.style.display = 'inline-block';
    closeButton.style.display = 'none';
})
/////////////////////



//SEND INQUIRY RADIO SHOW/////
radioshowForm = document.querySelector('#rs-form');

radioshowForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#rs-submit-button').style.display = "none";
    document.querySelector('#rs-submit-message').style.display = "block"
})

