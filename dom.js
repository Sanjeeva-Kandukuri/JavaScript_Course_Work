let text = document.getElementById('text');      // selecting elements to html or modifying
console.log(text);
text.innerText = " Welcome to DOM JavaScripts" ;
// text.style.color = 'blueviolet';                        // case sensitive  1.camal case.pascal case,snake case
// text.style.fontFamily = 'Cursive';   

text.id = 'heading' ;
text.className = 'heading-name';

let container = document.getElementById('container');
container.classList.add('root');                                // add / remove

let desc = document.getElementById('desc');
desc.innerHTML = '<h4>Object Based Document DOM</h4>' ;


let input = document.getElementById('input');
let value = input.getAttribute('type');
console.log(value);

input.setAttribute("type","password");
input.setAttribute("placeholder","Enter Password");

// input.removeAttribute('placeholder')

// storages --> 1.local storages 2.session storages

let storage = localStorage.setItem("name", 'DhanyaSri');   // perminant
//console.log(localStorage.getAttribute('name'))
console.log(localStorage.remove('name'))


let Storage_1 = sessionStorage.setItem('data', 'Dhatri Sri Lekha');
console.log(sessionStorage.getItem('data'));


// Even                                     --->