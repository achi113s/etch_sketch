const canvas_side = 640;
let color_mode = 'default';

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
            if (color_mode == 'rainbow') {
                let color = Math.floor(Math.random()*16777215).toString(16);
                cell.setAttribute('style', `background-color: #${color};`);
            } else {
                cell.setAttribute('style', `background-color: black;`);
            }
            
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
controls_div.setAttribute('style', 'display: grid; row-gap: 15px;')
const grid_res_slider = document.createElement('input');
grid_res_slider.setAttribute('type', 'range');
grid_res_slider.setAttribute('min', '1');
grid_res_slider.setAttribute('max', '100');
grid_res_slider.setAttribute('value', '16');

const current_grid_res = document.createElement('div');
current_grid_res.setAttribute('style', 'text-align: center;');
current_grid_res.textContent = `${grid_res_slider.value}`;

const rainbow_btn = document.createElement('button');
rainbow_btn.setAttribute('style', 'height: 40px; width; 80px; font-family: Lobster; font-size: 20px; background: -webkit-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
rainbow_btn.textContent = `Rainbow Mode`;
// event listener for clear button, removes the cells then redraws them
rainbow_btn.addEventListener('click', () => {
    color_mode = 'rainbow';
});

const color_btn = document.createElement('button');
color_btn.setAttribute('style', 'height: 40px; width; 80px; font-family: Lobster; font-size: 20px;');
color_btn.textContent = `Color Mode`;
// event listener for clear button, removes the cells then redraws them
color_btn.addEventListener('click', () => {
    color_mode = 'default';
});

controls_div.appendChild(current_grid_res);
controls_div.appendChild(grid_res_slider);
controls_div.appendChild(rainbow_btn);
controls_div.appendChild(color_btn);

// event listener for clear button, removes the cells then redraws them
grid_res_slider.addEventListener('click', () => {
    canvas_divisions = grid_res_slider.value;
    current_grid_res.textContent = `${grid_res_slider.value}`;
    removeCells();
    drawCells(canvas_divisions);
});

