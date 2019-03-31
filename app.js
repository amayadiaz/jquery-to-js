// JQUERY TO JS 

// Variables
const firstName = 'Julian';
let age = 25;


// Functions
function changeAge(isYourBirthday) {
    if(isYourBirthday == true){
        age = age + 1;
        printAge(age);
    }else{
        printAge(age);       
    }
}

function printAge(age) {
    console.log('Your age is: ' + age);    
}

changeAge(true);


// Promises
const getUserAll = new Promise(function(success, failed) {
    // Call to API 
    setTimeout(function () {
        success('All users are good!')
    }, 5000)
})

/* Execute Promise Individual
    getUserAll
    .then(function(message) {
        console.log(message);
    })
    .catch(function(message) {
        console.log(message);
    })
*/

const getUser = new Promise(function(success, failed) {
    // Call to API 
    setTimeout(function () {
        success('User is good!')
    }, 3000)
})

Promise.all([
    getUserAll,
    getUser
])
.then(function(message) {
    console.log(message);
})
.catch(function(message) {
    console.log(message);
})

console.log('Test Promises');


// Fetch 
fetch('https://randomuser.me/api/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('User: ' + data.results[0].name.first);
    })
    .catch(function() {
        console.log('Request failed!');
    });


// Asynchronous Process
(async function load() {
   const response = await fetch('https://yts.am/api/v2/list_movies.json?genre=action');
   const dataJson = await response.json();
   
   // For Each
   dataJson.data.movies.forEach((movie, index) => {
    console.log(index + ' : ' + movie.title);
   });
   
})()

console.log('Test Asynchronous Process');


// Selectors 
// $ = element from DOM 
const $first = document.querySelector('.header .text');
const $all = document.querySelectorAll('.header .text');
console.log($first);
console.log($all);


// Template Literals 
function articleTemplate(src, title, id) {
   return (
    `<div class="article" data-id="${id}">
        <img src="${src}" class="image">
        <p class="title">${title}</p>
    </div>`)   
}

const template = articleTemplate('https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg', 'The Dark Knight', 11372);
console.log(template);


// Add Elements to DOM 
const $articles = document.querySelector('.articles-list');
$articles.innerHTML += template; 


// Events and use Arrow Function
const $article = document.querySelector('.article');
$article.addEventListener("click", () => {
    alert('Click');
})


// event.preventDefault(); don't allow reload the page

// $0 -> getElement selected in console - Skill from Chrome 


// Add classes and styles 
$article.classList.add('article-selected');
// remove: to remove 
// toogle: if has class remove, else add class


// Styles inline
$article.style.border = '2px solid red';


// Create Element
const $header = document.createElement('img');
$header.setAttribute('src', 'https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Roadster-1013440.jpg');
$articles.appendChild($header);


// Extract Data from Form 
const $form = document.getElementById('form');
const formData = new FormData($form);
console.log(formData.get('name-search'));
formData.set('name-search', 'SpaceX');
console.log(formData.get('name-search'));


// Destructuring 
fetch('https://yts.am/api/v2/list_movies.json?genre=action')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // Destructuring Assignment
        const {
            data: {
                movies: myMovies
            }
        } = data
        console.log(myMovies);
        
        // Find Elements in List 
        const result = myMovies.find((movie) => {
            return movie.id === parseInt(11372)
        });
        console.log(result);

    })
    .catch(function() {
        console.log('Request failed!');
    });


// DataSet 
console.log($article.dataset);
console.log($article.dataset.id);


// Animations - The best way to add Animations to your project is with CSS 

// Errors - Manipulate errors with Try/Catch 

 
// Local Storage: Data without expiration 
// Session Storage: Data with expiration
window.localStorage.setItem('name', 'James');
const localName = window.localStorage.getItem('name');
console.log(localName);
















