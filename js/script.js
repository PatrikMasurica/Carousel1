// Storing all the elements that I will use in variables
const sliderImages = document.querySelectorAll('.slider-image');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const dots = document.querySelectorAll('.dot');

// This variable will be used to count the elements inside sliderImages array
let counter = 0;

// This function shows the next image and is called after clicking the right arrow
rightArrow.addEventListener('click', function () {
    //Making current image dissappear by changing classes
    sliderImages[counter].classList.remove('active');
    sliderImages[counter].classList.add('not-active');
    dots[counter].classList.remove('dot-active');
    // Increasing counter to get the next image
    counter++;
    // Checking if the counter is higher than the index of the last element, if yes start from beggining
    if (counter > sliderImages.length - 1) counter = 0;
    // Making next image appear by changing clases
    sliderImages[counter].classList.remove('not-active');
    sliderImages[counter].classList.add('active');
    dots[counter].classList.add('dot-active');
})
// This function shows the previous image and is called after clicking the left arrow
leftArrow.addEventListener('click', function () {
    // Making current image dissappear by changing classes
    sliderImages[counter].classList.remove('active');
    sliderImages[counter].classList.add('not-active');
    // Removing the highlight from the dot which has the same index as the image
    dots[counter].classList.remove('dot-active');
    // Checking if counter is less than the index of first element, if yes start from last element
    counter <= 0 ? counter = sliderImages.length - 1 : counter--;
    // Making previous image appear by changing clases
    sliderImages[counter].classList.remove('not-active');
    sliderImages[counter].classList.add('active');
    // Making the dot which has the same index as the image appear
    dots[counter].classList.add('dot-active');
})

// This function checks if the images have the class active, if yes, it removes the class active and ads class not-active. It also checks for the dots, if any of the dots has the class dot-active, it removes it"
function removeActiveContent() {
    for (let i = 0; i < sliderImages.length; i++) {
        if (sliderImages[i].classList.contains('active')) {
            sliderImages[i].classList.remove('active');
            sliderImages[i].classList.add('not-active');
        }
        if (dots[i].classList.contains('dot-active')) dots[i].classList.remove('dot-active')
    }
}

// Selecting all dot elements using for loop 
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        // Making counter which was used for right and left arrow equal to the index we are using here
        counter = i;
        // Calling the function we created earlier
        removeActiveContent()
        // Making image which has the same index as the dots appear by changing classes and highlighting the active dot
        sliderImages[i].classList.remove('not-active');
        sliderImages[i].classList.add('active');
        dots[i].classList.add('dot-active');
    })
}