const wrap = document.querySelector('#Wrapper');

//Using this method, you do not need to turn it into an array
var books = document.querySelector('#book-list list .name')

//Using this method, you have to use .forEach() to turn it into an array
var books2 = document.getElementsByClassName('name');
console.log(books2);