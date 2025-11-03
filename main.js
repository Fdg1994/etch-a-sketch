const container = document.querySelector('.container');
const resizeBtn = document.getElementById('resBtn');

function createGrid(size) {
  
  container.innerHTML = ''; // clears sketchboard

  
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }

  
  container.style.setProperty('--grid-size', size);
}


createGrid(16);


resBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter new grid size (e.g. 16 for 16x16):'));
  
  if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  createGrid(newSize);
});
