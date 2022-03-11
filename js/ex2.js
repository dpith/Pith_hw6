/* Homework 6
   Example 2 JavaScript code
*/

console.log("Doug's Output from Homework 6 Example 2");

const displayText400 = () => {
   var elements = document.getElementsByClassName("400level");
   for (var i = 0; i < elements.length; i++) {
       console.log(elements[i].innerText);
   }
}

displayText400();