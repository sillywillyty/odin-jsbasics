const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");
const clearButton = document.getElementById("clearButton");

const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

function createGrid(numSquares){
    gridContainer.innerHTML = "";

    const containerSize = gridContainer.clientWidth;
    const squareSize = containerSize / numSquares;
    let i = 0;
    for(i; i < numSquares * numSquares; i++){
        const square = document.createElement("div");
        square.classList.add("gridSquare");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";

        square.addEventListener("mouseover", function(){
        this.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(square);
    }
}

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function askForNewGridSize(){
    let userInput = prompt("enter number of squares per side (max " + MAX_SIZE + "):", DEFAULT_SIZE);

    let newSize = Number(userInput);
    if(isNaN(newSize) || newSize < 1){
        alert("enter valid number");
        return;
    }

    if(newSize > MAX_SIZE){
        alert(MAX_SIZE + " is the max size. Using " + MAX_SIZE + " instead.");
        newSize = MAX_SIZE;
    }
    createGrid(newSize);
}

function clearGrid(){
    let allSquares = document.querySelectorAll(".gridSquare");
    let i = 0;
    for(i; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = "white";
    }
}

newGridButton.addEventListener("click", askForNewGridSize);
clearButton.addEventListener("click", clearGrid);

createGrid(DEFAULT_SIZE);