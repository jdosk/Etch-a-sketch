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

// Function to randomize the hover color
function randomColor() {

}

// Removes previous grid and sets the new grid with number of sides based on user input
function setGrid(num) {
  container.innerHTML = "";

  for (let i = 0; i < num * num; i++) {
    const newDiv = document.createElement('div');

    newDiv.classList.add('hover-box');
    newDiv.style.height = 800 / num + "px";
    newDiv.style.width = 800 / num + "px";

    newDiv.addEventListener('mouseover', () => {
      newDiv.style.backgroundColor = 'orange';
    });

    container.appendChild(newDiv);
  }
}