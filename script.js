const grid = document.querySelector('#grid');

const clear = document.querySelector('#clear');
clear.addEventListener('click',(e) => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((el) => {
        el.setAttribute('style', 'background-color: white');
    })
})

for (let i = 0; i < 256; i++) {  
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', 'background-color: black;');
    });
    square.addEventListener('mouseout', (e) => {
        e.target.setAttribute('style', 'background-color: white; transition: 5s');
    });
    grid.append(square);
}