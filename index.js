// VARIABLES

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const categoryClassElements = document.querySelectorAll('.category');
const foodCategoryClassElements = document.querySelectorAll('.food-category');
const main = document.querySelector('.main');
const warning = document.querySelector('#warning');
const items = document.querySelectorAll('li');
const ingredientsList = document.querySelectorAll('.allergy-info');
const allergySection = document.querySelector('.allergy-warning');
const footer = document.querySelector('.footer');
const footerElements = document.querySelectorAll('.food-desc');

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
categoryClassElements.forEach(el => {
    el.style.color = 'rgb(10.6%, 0%, 44.5%)';
    el.style.fontStyle = 'italic';
    el.style.textDecoration = 'underline';
});

// lists
items.forEach(el => el.style.listStyle = 'none');

// .food-category
foodCategoryClassElements.forEach(el => {
    el.style.backgroundColor = colorGenerator();
    el.style.padding = '1rem';
    el.style.margin = '1rem'
    el.style.minWidth = '200px';
});

// ingredients background
ingredientsList.forEach((el, i)=> {
    if (i % 2 !== 0) {
        el.style.backgroundColor = '#87C8EE';
        el.style.padding = '0.5rem 2rem'
    }
});

ingredientsList.forEach(el => {
    el.style.padding = '1rem';
    el.style.minWidth = '10rem'
});

// LAYOUT

main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.flexWrap = 'wrap';

allergySection.style.display = 'flex';
allergySection.style.flexDirection = 'column';
allergySection.style.alignItems = 'center';
allergySection.children[0].style.textAlign = 'center';


// FOOTER

footer.style.display = 'flex';

footerElements.forEach(el => {
    el.style.width = '7rem';
    el.style.height = '7rem';
    el.style.border = '3px solid orange';
    el.style.borderRadius = '50%';
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.margin = '1rem';
});

const responsiveness = width => {
    if (width.matches) {
        h1.style.fontSize = '2rem';
        warning.style.fontSize = '2rem';
        footer.style.flexDirection = 'row';
    } else {
        h1.style.fontSize = '1.5rem';
        warning.style.fontSize = '1.1rem';
        footer.style.flexDirection = 'column';
    }
};

let windowWidth = window.matchMedia('(min-width: 700px)');

responsiveness(windowWidth);
windowWidth.addListener(responsiveness);