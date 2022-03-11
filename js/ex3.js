/* Homework 6
   Example 3 JavaScript code
*/

console.log("Doug's Output from Homework 6 Example 3");

function highlight() {
   const nodes = document.getElementsByTagName("p");
   for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.fontWeight = "bold";
      nodes[i].style.backgroundColor = "yellow";
   }
}
highlight();