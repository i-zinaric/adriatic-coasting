console.log('ADRIATIC COASTING');


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


//////GUMBI ZA OTVARANJE ARTIST INFO//////
const artistButtons = document.querySelectorAll('.artist-name');
const artistBoxes = document.querySelectorAll('.artist-info');
//zatvori sve boxeve
artistBoxes.forEach((box) => {
    box.style.display = 'none';
})
//otvori box ako je zatvoren (display: none; skrol na početak diva)
artistButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const toHide = button.nextElementSibling;
               
        if (toHide.style.display == 'none') {
            artistBoxes.forEach((box) => {
                box.style.display = 'none';
            })
            toHide.style.display = 'block';
                const y = window.pageYOffset + button.getBoundingClientRect().top;
                window.scrollTo(0, (y + 50));
        } else {
            toHide.style.display = 'none';
        }
    })
})


///DISABLE SCROLL//  privremeno rješenje//
function disableScroll() {
    // daje trenutnu scroll poziciju
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // na pokušaj skrolanja vraća skrol na poziciju s koje pokušaj kreće
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
        //vraća skrolanje
function enableScroll() {
    window.onscroll = function() {};
}
//////////////////BOOK NOW BUTTONS///////////
const contractForm = document.querySelector('#contract-form-container');
const bookNowButtons = document.querySelectorAll('.book-now ');


bookNowButtons.forEach((button) => {
    button.addEventListener('click', function() {
        disableScroll();
        contractForm.style.display = 'block';        
    })
})

const closeContractForm = document.querySelector('#close-contract-form');
closeContractForm.addEventListener('click', () => {
    enableScroll();
    contractForm.style.display = 'none';
})

