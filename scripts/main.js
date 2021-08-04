const canvas = document.querySelector("div.canvas");
const cell_size = "40px";

canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(16, ${cell_size})`);

// first use a loop to create 16 divs and then add them to the frame div
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const newdiv = document.createElement('div');
        newdiv.setAttribute('class', `cell ${i}_${j}`);
        newdiv.setAttribute('style', `border: 0.5px solid gray; height: ${cell_size}; width: ${cell_size}`);
        canvas.appendChild(newdiv);
        console.log(`appended div ${i}_${j}`)
    } 
}

const cells = document.querySelectorAll("div.cell");

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        cell.setAttribute('style', 'background-color: black; border: 0.5px solid black;');
    });
});

