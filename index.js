// Step 1: Remove the existing <main> element
document.getElementById("main").remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the text content
newHeader.id = "victory"; // Assign an id if required by tests
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME

// Step 4: Append the new element to the body
document.body.append(newHeader);
