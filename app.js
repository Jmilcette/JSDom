const wrap = document.querySelector('#Wrapper');

//Using this method, you do not need to turn it into an array
var books = document.querySelector('#book-list list .name')

//Using this method, you have to use .forEach() to turn it into an array
var books2 = document.getElementsByClassName('name');
console.log(books2);

Array.from(books).forEach(function(book){
    
//Using .textContent to change the text inside the selected query in my books variable
    book.textContent += '(book title)';
})