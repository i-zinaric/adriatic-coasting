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
//prvo zatvori sve boxeve
artistBoxes.forEach((box) => {
    box.style.display = 'none';
})
//otvori box ako je zatvoren (display: none; skrol na početak diva)
artistButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const toHide = button.nextElementSibling;
               
        if (toHide.style.display === 'none') {
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
////END ARTIST INFO/////////////////////



//////////////////BOOK NOW BUTTONS - OPEN FROM : CLOSE FORM///////////
const contractFormContainer = document.querySelector('#contract-form-container');
const bookNowButtons = document.querySelectorAll('.book-now ');
const closeContractForm = document.querySelector('#close-contract-form');

bookNowButtons.forEach((button) => {
    button.addEventListener('click', function() {
        //open
        contractFormContainer.style.display = 'block';
        //close (button i escape)
        document.addEventListener('keydown', (key) => {
            console.log(key);
            if (key.key === 'Escape') {
                contractFormContainer.style.display = 'none';
            }
        })
        closeContractForm.addEventListener('click', () => {
            contractFormContainer.style.display = 'none';
        })
    })
})
//DELAY SUBMITING FORM//
const contractForm = document.getElementById('contract-form');
const submitContractFormButton = document.getElementById('submit-contract-form');

contractForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitContractFormButton.innerText = 'SUCCESS'
    setTimeout(() => {
        contractForm.submit();
    }, 2000)
})
////////////////FORM END//////////////////////////////////////////




///get scroll direction//
let scrollingDown = false;
let scrollingUp = false;

const getScrollDirection = () => {
    const scrollPosition = window.scrollY;
    window.addEventListener('scroll', () => {
        const newScrollPosition = window.scrollY;
        if ((newScrollPosition > scrollPosition) && (window.scrollY > 0)) {
            scrollingDown = true;
            scrollingUp = false;
        } else if (newScrollPosition < scrollPosition && (window.scrollY > 0)) {
            scrollingUp = true;
            scrollingDown = false;
        }
    })
}
window.addEventListener('scroll', getScrollDirection)
//////////////////////////END///


//SUNCE//
const mobile = window.matchMedia("(max-width: 768px)");
if (mobile.matches) {
    let addX = 10;
    let addY = 80;
    let counter = 0;
    window.addEventListener('scroll', () => {
        if (scrollingDown) {
            if (counter  <= 400) {
                /* addX = addX + 0.5; */
                addY = addY + 5;
                counter++;
            }
            sunce.style.left = `${addX}px`;
            sunce.style.top = `${addY}px`;
        }
    })
} else {
    let addX = 250;
    let addY = 200;
    let counterX = 0;
    window.addEventListener('scroll', () => {
        if (scrollingDown) {
            ///// -3, -2, -1, 0, 1, 2
            ///// -9, -4, -1, 0, -1, 4
            if (counterX <= 15) {
                addX = addX + 5;
                addY = addY - 5;
                counterX++
            } else if (counterX > 15 && counterX <= 25) {
                addX = addX + 5;
                addY = addY + 0;
                counterX++
            } else if (counterX > 20 && counterX <= 70) {
                addX = addX + 5;
                addY = addY + 5;
                counterX++
            }   else if (counterX > 70 && counterX <= 120) {
                addX = addX + 4;
                addY = addY + 7;
                counterX++
            } else if (counterX > 120 && counterX <= 250) {
                addX = addX + 3;
                addY = addY + 7;
                counterX++
            } 
            // else if (counterX > 170 && counterX < 200) {
            //     addX = addX + 5;
            //     addY = addY + 9;
            //     counterX++
            // }
            
            sunce.style.left = `${addX}px`;
            sunce.style.top = `${addY}px`
        }
    });
    }
////SUNCE END////





