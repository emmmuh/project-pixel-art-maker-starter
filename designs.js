// Select size input
const table = document.getElementById('pixelCanvas');
// Select button input
const create = document.getElementById('createButton');

function makeGrid() {
    table.innerHTML = ''; //ensures a new column is made each time 'create' is pressed
    //set variables for rows and columns
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    //create table
    for(let x = 0; x < height; x++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for(let y = 0; y < width; y++) {
            const grid = document.createElement('td');
            grid.style.backgroundColor = 'white'; //always set the bg color back to white when creating new grid
            row.appendChild(grid);
        };
    };
}

//function to fill in grid using the event target to target specific grid tiles ("td")
function draw(event) {
    const color = document.getElementById('colorPicker').value; // takes color from input, within the function
    event.target.style.backgroundColor = color;
}

// When size is submitted by the user, call makeGrid()
create.addEventListener('click', makeGrid);
//when table is clicked, call draw(), which uses the event target to specify the grid tile to change
table.addEventListener('click', draw);