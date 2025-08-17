// Get the container div
const container = document.querySelector(".container");

// Add on click event to the button, should call the setGrid function
document.querySelector(".reset").addEventListener("click", function () {
    const userInput = prompt("Enter a number:");
    const num = parseFloat(userInput);

    // Check if input is number between 1 and 100
    if (!isNaN(num) && num > 0 && num <= 100) {
      setGrid(num);
    } else {
      alert("That's not a valid number. Please enter a number between 1 and 100.");
    }
});

// Function to set the hover effect for the hover boxes
function setHoverColors(div) {
  // Store opacity in a dataset
  div.dataset.opacity = 1;

  div.addEventListener('mouseover', () => {
    let opacity = Math.min(1, parseFloat(div.dataset.opacity) - 0.1);
    div.dataset.opacity = opacity;
    // Randomize colors
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // apply random colors and next opacity level
    div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${1 - opacity})`;
  });
}

// Removes previous grid and sets the new grid with number of sides based on user input
function setGrid(num) {
  // Reset the grid, and set hover box size
  container.innerHTML = "";
  let size = 800 / num;

  // Loop to create the rows which hold the hover boxes
  for (let i = 0; i < num; i++) {

    const newRow = document.createElement('div');
    newRow.style.gap = 0;
    newRow.style.display = "flex";
    
    container.appendChild(newRow);

    // Loop through each row and create the hover boxes with necessary attributes
    for (let j = 0; j < num; j++) {

      const newDiv = document.createElement('div');

      newDiv.classList.add('hover-box');
      newDiv.style.height = size + "px";
      newDiv.style.width = size + "px";

      // Initialize event handlers
      setHoverColors(newDiv);

      newRow.appendChild(newDiv);
    }
  }
}