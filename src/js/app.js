import goblinImage from '../img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell);
    cells.push(cell);
  }

  const goblin = document.createElement('img');
  goblin.src = goblinImage;
  goblin.style.width = '80%';
  goblin.style.height = '80%';

  let currentIndex = Math.floor(Math.random() * cells.length);
  cells[currentIndex].appendChild(goblin);

  setInterval(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cells.length);
    } while (newIndex === currentIndex);
    cells[newIndex].appendChild(goblin);
    currentIndex = newIndex;
  }, 1000);
});