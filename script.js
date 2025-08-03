const container = document.querySelector(".container");

function randomColor() {
    
}


// add the internal boxes
for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('hover-box');
  newDiv.style.height = '100px';
  newDiv.style.width = '100px';

  newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = 'blue';
  });

  container.appendChild(newDiv);
}