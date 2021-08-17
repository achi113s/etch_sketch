const canvas_side = 640;
const default_color = '#333'
let color_mode = 'default';

function draw_cells(canvas_divisions) {
    // set up the CSS grid on the canvas div
    let canvas_div = document.querySelector('div#canvas');
    canvas_div.setAttribute('style', `display: grid; grid-template-columns: repeat(${canvas_divisions}, 1fr); grid-template-rows: repeat(${canvas_divisions}, 1fr);`);
    // now use a loop to create the cells and then add them to the canvas div
    for (let i = 1; i <= canvas_divisions*canvas_divisions; i++) {
        const cell = document.createElement('div');
        cell.classList.add(`cell`);
        cell.addEventListener('mouseover', color_cell);
        canvas_div.appendChild(cell);
    }
}

function redraw_cells() {
    let cells = document.querySelector("div#canvas").querySelectorAll("div.cell");
    cells.forEach((cell) => {
        cell.remove();
    });
    const grid_res = document.querySelector('input#grid_res_slider');
    draw_cells(grid_res.value);
}

function color_cell(e) {
    if (color_mode == 'rainbow') {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        e.target.style.backgroundColor = `${default_color}`;
    }
}

const rainbow_btn = document.querySelector('#rainbow_btn');
// event listener for rainbow button
rainbow_btn.addEventListener('click', () => {
    color_mode = 'rainbow';
});

const color_btn = document.querySelector('#color_btn');
// event listener for color button
color_btn.addEventListener('click', () => {
    color_mode = 'default';
});

const clear_btn = document.querySelector('#clear_btn');
// event listener for color button
clear_btn.addEventListener('click', () => {
    redraw_cells();
});

const current_grid_res = document.querySelector('div#current_grid_res');
current_grid_res.setAttribute('style', 'text-align: center;');
const grid_res_slider = document.querySelector('input#grid_res_slider');
// event listener for the grid resolution slider
grid_res_slider.addEventListener('click', () => {
    current_grid_res.textContent = `${grid_res_slider.value} x ${grid_res_slider.value}`;
    redraw_cells();
});

current_grid_res.textContent = `${grid_res_slider.value} x ${grid_res_slider.value}`;

let canvas_divisions = 16;
draw_cells(canvas_divisions);