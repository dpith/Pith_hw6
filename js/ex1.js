/* Homework 6
   Example 1 JavaScript code
*/

console.log("Doug's Output from Homework 6 Example 1");

const bodyNodes = () => {
   var nodes = document.body.childNodes; // this will get the array of all the nodes of the body tag
   nodes.forEach((node) => {
      console.log(node); // this will print the node
   });
}
   
bodyNodes();