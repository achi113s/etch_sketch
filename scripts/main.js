const canvas = document.querySelector("div.canvas");
canvas.setAttribute('style', 'margin: auto; width: 100%;')
const cell_size = "40px";

canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(16, ${cell_size}); justify-content: center;`);

// first use a loop to create 16 divs and then add them to the frame div
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const newdiv = document.createElement('div');
        newdiv.classList.add(`cell`);
        newdiv.setAttribute('style', `border: 1px solid lightgray; height: ${cell_size}; width: ${cell_size};`);
        canvas.appendChild(newdiv);
        // console.log(`appended div ${i}_${j}`)
    } 
}

const cells = document.querySelectorAll("div.cell");

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawn');
    });
});

