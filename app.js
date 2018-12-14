//In this line were taking the banner id with the query selector
const banner = document.querySelector('#page-banner');
//This line will display the node type as 1 which is element
console.log('#page-banner node type is:', banner.nodeType);

//This line will display the node name which would be DIV in this instance
console.log('#page-banner node name is:', banner.nodeName);

//This line will give a true or false statement on whether or not there are child nodes on the selected element
console.log('#page-banner node name is:', banner.hasChildNodes());