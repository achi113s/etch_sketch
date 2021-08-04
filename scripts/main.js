const frame = document.querySelector("div#frame");

frame.setAttribute('style', 'display: inline-flex; flex-wrap: wrap;');

// first use a loop to create 16 divs and then add them to the frame div
for (let i = 0; i <= 16; i++) {
    for (let j = 0; j <= 16; j++) {
        const newdiv = document.createElement('div');
        newdiv.setAttribute('id', `${i}_${j}`);
        newdiv.setAttribute('style', 'border: 1px solid red; height: 10px; width: 10px');
        frame.appendChild(newdiv);
        console.log(`appended div ${i}_${j}`)
    }
    
}