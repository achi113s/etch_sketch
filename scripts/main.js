const canvas_side = 640;

function drawCells(canvas_divisions) {
    // set up the CSS grid on the canvas div
    let canvas_div = document.querySelector('div.canvas');
    canvas_div.setAttribute('style', `display: grid; grid-template-columns: repeat(${canvas_divisions}, 1fr); grid-template-rows: repeat(${canvas_divisions}, 1fr); box-shadow: 0px 0px 10px gray; height: ${canvas_side}px; width: ${canvas_side}px;`);
    // now use a loop to create the cells and then add them to the canvas div
    for (let i = 1; i <= canvas_divisions; i++) {
        for (let j = 1; j <= canvas_divisions; j++) {
            const newdiv = document.createElement('div');
            newdiv.classList.add(`cell`);
            newdiv.setAttribute('style', `grid-column: span 1; grid-row: span`)
            canvas_div.appendChild(newdiv);
        }
    }
    // drawing capability, mouseover event colors each cell
    const cells = document.querySelectorAll("div.cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('drawn');
        });
    });
}

function removeCells() {
    let cells = document.querySelector("div.canvas").querySelectorAll("div.cell");
    cells.forEach((cell) => {
        cell.remove();
    });
}

let canvas_divisions = 16;
let cell_size = canvas_side / canvas_divisions;
drawCells(canvas_divisions, cell_size);

const controls_div = document.querySelector('div.controls');
const grid_res_slider = document.createElement('input');
grid_res_slider.setAttribute('type', 'range');
grid_res_slider.setAttribute('min', '1');
grid_res_slider.setAttribute('max', '100');
grid_res_slider.setAttribute('value', '16');

const current_grid_res = document.createElement('div');
current_grid_res.setAttribute('style', 'text-align: center;');
current_grid_res.textContent = `${grid_res_slider.value}`;

const rainbow_btn = document.createElement('button');
rainbow_btn.setAttribute('style', 'height: 40px; width; 80px;');
rainbow_btn.textContent = `Rainbow`;

controls_div.appendChild(current_grid_res);
controls_div.appendChild(grid_res_slider);
controls_div.appendChild(rainbow_btn);

// event listener for clear button, removes the cells then redraws them
grid_res_slider.addEventListener('click', () => {
    canvas_divisions = grid_res_slider.value;
    current_grid_res.textContent = `${grid_res_slider.value}`;
    removeCells();
    drawCells(canvas_divisions);
});

