const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));


Array.from(titles).forEach(function(title){
  console.log(title);
});
console.log("Testing");
titles.forEach(function(item){
    console.log("item:"+item);
});