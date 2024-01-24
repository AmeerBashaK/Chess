function logic() {
    let count=0;
    let board=document.getElementById('board')
    for (let i=0;i<64;i++){
        let cell = document.createElement('div');
        cell.id = 'cell';
        (i%8===0 && count===0)?count=1:((i%8===0 && count===1)?count=0:'');
        (count===0)? (cell.style.backgroundColor = (i % 2 === 0) ? 'black' : 'white') :(cell.style.backgroundColor = (i % 2 === 0) ? 'white' : 'black') ;
        cell.style.display="inline-block";
        board.appendChild(cell);
    }
}
logic();