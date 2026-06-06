import goblinImage from '../img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('game-field');
  if (!field) throw new Error('Game field not found');


  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell);
    cells.push(cell);
  }

  const goblin = document.createElement('img');

  let currentCellIndex = Math.floor(Math.random() * cells.length);
  cells[currentCellIndex].appendChild(goblin);

  setInterval(() => {
    let newCellIndex;
    do {
      newCellIndex = Math.floor(Math.random() * cells.length);
    } while (newCellIndex === currentCellIndex);
    cells[newCellIndex].appendChild(goblin);
    currentCellIndex = newCellIndex;
  }, 1000);
});