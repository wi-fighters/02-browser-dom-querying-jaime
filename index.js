// VARIABLES

const body = document.querySelector('body');
const h1 = document.querySelector('h1');


// TYPOGRAPHY

// body
body.style.fontFamily = '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
// h1
h1.style.textAlign = 'center';
// .category
const categoryClassElements = document.querySelectorAll('.category');
categoryClassElements.forEach(el => {
    el.style.color = 'rgb(10.6%, 0%, 44.5%)';
    el.style.fontStyle = 'italic';
    el.style.textDecoration = 'underline';
});

const foodCategoryClassElements = document.querySelectorAll('.food-category');


// FUNCTIONS

const generateRandomNumber = (min, max) => {
    if (max <= 1) {
        return (Math.random() * max) + min;
    } else {
        return Math.floor((Math.random() * max) + min);
    }
};

const colorGenerator = () => {
    const r = generateRandomNumber(0, 255);
    const g = generateRandomNumber(0, 255);
    const b = generateRandomNumber(0, 255);
    const transparency = generateRandomNumber(0, 1);

    return `rgb(${r}, ${g}, ${b}, ${transparency})`
};