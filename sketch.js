let gridSize = 16;

const resetButton = document.createElement('button');
resetButton.textContent = "reset";
document.querySelector('body').appendChild(resetButton);

resetButton.addEventListener('click', resetGrid);

function createPad() {
	let sketchPad = document.createElement('div');
	sketchPad.setAttribute("id", "pad");
	sketchPad.setAttribute("style", "display: flex; justify-content: flex-start; width: 100%; height: 100%; flex-wrap: wrap");
	document.querySelector('body').appendChild(sketchPad);
}

function resetGrid() {
	console.log("This is the resetGrid function!");
	gridSize = prompt("Enter a size for a new grid \n (eg for a 16x16 grid enter 16)");
	drawGrid(gridSize);
}

function removeGrid() {
	document.querySelector("#pad").textContent = '';
}

function drawGrid(size) {
	
	removeGrid();

	let squareWidth = document.getElementById("pad").clientWidth / gridSize;
	let squareHeight = 95 / gridSize;
	
	for (let i = 0; i < size ** 2; i++) {
		let pixel = document.createElement('div');
		pixel.setAttribute("class", "grid-square");
		pixel.setAttribute("style", `flex: 1 0 ${squareWidth}px; outline: 0.1px solid black; height: ${squareHeight}vh`);
		document.querySelector('#pad').appendChild(pixel);
	}
	
	let squares = document.querySelectorAll(".grid-square");
	squares.forEach(square => square.addEventListener("mouseover", colorSquare));
	
}

function colorSquare() {
	
	if (this.style.backgroundColor === "") {
		let red = Math.floor(Math.random() * 255);
		let blue = Math.floor(Math.random() * 255);
		let green = Math.floor(Math.random() * 255);
	
		this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		this.style.opacity = "0.1";
	} else {
		let newOpacity = (this.style.opacity * 1) + 0.1;
		this.style.opacity = `${newOpacity}`;
	}
}

createPad();
drawGrid(gridSize);
