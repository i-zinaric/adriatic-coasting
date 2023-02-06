console.log('ADRIATIC COASTING');
/////////////////
///////////////////////////////


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
                window.scrollTo(0, (y - 6));
        } else {
            toHide.style.display = 'none';
        }
    })
})
//////////////////