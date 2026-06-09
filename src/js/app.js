import image from "../img/goblin.png";

const CELL_COUNT = 16;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#game-container");
  const board = document.createElement("div");
  board.className = "game-board";
  container.append(board);

  for (let i = 0; i < CELL_COUNT; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.append(cell);
  }

  const cells = Array.from(document.querySelectorAll(".cell"));
  const img = document.createElement("img");
  img.src = image;
  img.alt = "Goblin";

  let currentIndex = -1;
  const getRandomIndex = () => Math.floor(Math.random() * cells.length);

  const moveGoblin = () => {
    let newIndex;
    do {
      newIndex = getRandomIndex();
    } while (newIndex === currentIndex);
    cells[newIndex].append(img);   // заменён appendChild
    currentIndex = newIndex;
  };

  moveGoblin();
  setInterval(moveGoblin, 1000);
});

export default function demo(value) {
  return `Demo: ${value}`;
}