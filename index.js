// Write your code here!


// 1. Create a div and append it to the body
const element = document.createElement("div");
document.body.append(element);

// 2. Create an unordered list and append 3 list items
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);

// 3. Use innerHTML to set multiple HTML elements
const main = document.getElementById("main");
main.innerHTML = `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
`;

// 4. Change properties of an element
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = "2";

// 5. Add/remove classes
element.classList.add("pet-listing", "dog");
element.classList.remove("dog");
element.classList.add("cat", "sale");

// 6. Remove an element from the DOM
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Or remove the entire ul
ul.remove();

// 7. Set text inside a new element
const newElement = document.createElement("p");
newElement.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name
document.body.append(newElement);
