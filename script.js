const container = document.querySelector(".container");
//const resetButton = document.querySelector(".reset").addEventListener(

//)
document.querySelector(".reset").addEventListener("click", function () {
    const userInput = prompt("Enter a number:");
    const num = parseFloat(userInput);
    if (!isNaN(num) && num > 0 && num < 101) {
      setGrid(num);
    } else {
      alert("That's not a valid number. Please enter a number between 1 and 100.");
    }
  });

function randomColor() {

}

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

// add the internal boxes
//for (let i = 0; i < 256; i++) {
//  const newDiv = document.createElement('div');
//  newDiv.classList.add('hover-box');
//  newDiv.style.height = '50px';
//  newDiv.style.width = '50px';
//
//  newDiv.addEventListener('mouseover', () => {
//    newDiv.style.backgroundColor = 'orange';
//  });
//
//  container.appendChild(newDiv);
//}