console.log('ADRIATIC COASTING');


//////////////////


const contractForm = document.querySelector('#contract-form-container');
const bookNowButtons = document.querySelectorAll('.book-now ');
console.log(bookNowButtons);

bookNowButtons.forEach((button) => {
    button.addEventListener('click', function() {
        console.log('klik na book now');
        contractForm.style.display = 'block';
    })
})

///////////////////////////////

const artistButtons = document.querySelectorAll('.artist-name');
const artistBoxes = document.querySelectorAll('.artist-info');

artistBoxes.forEach((box) => {
    box.style.display = 'none';
})

artistButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const toHide = button.nextElementSibling;
        if (toHide.style.display == 'none') {
            artistBoxes.forEach((box) => {
                box.style.display = 'none';
            })
            toHide.style.display = 'block';
        } else {
            toHide.style.display = 'none';
        }

    })
})
//////////////////






//////////////////////////

// const prozor = document.querySelector('body');
// const sunce = document.getElementById('sunce');
// let sunceRight = -1;
// let sunceDown = -1;
// prozor.onscroll = () => {
//     console.log('ines')
//     sunceRight = sunceRight + 1;
//     sunceDown = sunceDown + 3;
//     console.log(sunceRight);
//     sunce.style.left = `${260 + sunceRight}px`
//     sunce.style.top =   `${250 + sunceDown}px`
// }


// let oldValue = 0;
// window.addEventListener('scroll', function(e){

//     // Get the new Value
//     newValue = window.pageYOffset;
//     console.log(newValue);

//     //Subtract the two and conclude
//     if(oldValue - newValue > 0){
//         console.log("Up");
//     } else if(oldValue - newValue < 0){
//         console.log("Down");
//     }

//     // Update the old value
//     oldValue = newValue;
// });

// let scroll_position = 0;
// let scroll_direction;

// window.addEventListener('scroll', function(){
//     scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
//     scroll_position = (document.body.getBoundingClientRect()).top;
//     console.log('zadnje' + scroll_direction);
// });