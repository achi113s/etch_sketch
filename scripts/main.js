const canvas = document.querySelector("div.canvas");
canvas.setAttribute('style', 'margin: auto; width: 100%;')

const canvas_width = 640;
let canvas_divisions = 16;
let cell_size = canvas_width / canvas_divisions;

canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(${canvas_divisions}, ${cell_size}px); justify-content: center;`);

// first use a loop to create x divs and then add them to the frame div
for (let i = 1; i <= canvas_divisions; i++) {
    for (let j = 1; j <= canvas_divisions; j++) {
        const newdiv = document.createElement('div');
        newdiv.classList.add(`cell`);
        newdiv.setAttribute('style', `border: 1px solid gray; height: ${cell_size}px; width: ${cell_size}px;`)
        canvas.appendChild(newdiv);
    } 
}

// drawing capability, mouseover event colors each cell
const cells = document.querySelectorAll("div.cell");
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawn');
    });
});


const buttons_div = document.createElement('div');

const clear_btn = document.createElement('button');
clear_btn.setAttribute('style', 'height: 40px; width: 80px;');

buttons_div.appendChild(clear_btn);
document.querySelector('body').appendChild(buttons_div);

// event listener for clear button, removes the "drawn" class from each cell
clear_btn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('drawn');
    });
});

