/* Homework 6
   Example 5 JavaScript code
*/

console.log("Doug's Output from Homework 6 Example 5");

for (var i = 0; i < 12; i++) { // loop creates 12 elements
   var output = document.getElementById("output");
   var tr = document.createElement("tr"); // create row
   var td = document.createElement("td"); // create column
   td.innerText = i + 1; // insert number value
   tr.appendChild(td); // append col to row
   output.appendChild(tr); 
   if ((i + 1) % 4 == 0) { // determines if element value is divisible by 4
      td.classList.add("four") // add elements divisible by 4 to the class
   }
}

