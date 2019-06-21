//class Carousel {

//}

//let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carouselContent = document.querySelector(".carousel-content");

let images = document.querySelectorAll(".carousel-content > img");

let radioContent = document.querySelector(".carousel .radio-buttons");

let current = 0;

images.forEach(function (elem, index) {

    let label = document.createElement("label");

    let input = document.createElement("input");

    let span = document.createElement("span");


    input.addEventListener('click', function () {

        setCurrentImage(index);
    }, false);

    input.setAttribute("type", "radio");

    input.setAttribute("name", "radio-buttons");


    label.appendChild(input);


    label.appendChild(span);

    radioContent.appendChild(label);
});

let inputs = document.querySelectorAll(".radio-buttons input");

inputs[current].checked = true;

я

function setCurrentImage(index) {
    current = index;
    images.forEach(e => e.style.display = 'none');
    inputs.forEach(e => e.checked = false);
    images[current].style.display = "block";
    inputs[current].checked = true;
}


carouselContent.addEventListener('click', function (e) {
    if (e.target.localName === 'img') {
        current = current === 0 ? images.length - 1 : current - 1;
        setCurrentImage(current);
    }
}, false);


carouselContent.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (e.target.localName === 'img') {
        current = current === images.length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
carouselContent.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
        current = current === 0 ? images.length - 1 : current - 1;
        setCurrentImage(current);
    } else {
        current = current === images.length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
carouselContent.addEventListener('click', function (e) {
    if (e.target.className === 'prev-image') {
        current = current === 0 ? images.length - 1 : current - 1;
        setCurrentImage(current);
    }
}, false);
carouselContent.addEventListener('click', function (e) {
    if (e.target.className === 'next-image') {
        current = current === images.length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
setCurrentImage(current);
