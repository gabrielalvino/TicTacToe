var squares = document.querySelectorAll(".squares");

document.addEventListener("DOMContentLoaded", ()=> {

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){


	let square = event.target;
	let position = square.id;

	if (handleMove(position)){

    setTimeout(() => {
      alert ("You win, the game is over!!" + `the winner is player '${playerTime +  1}`)
    }, 10);
  }
    updateSquares(position);
}





function updateSquares(position){

    let square = document.getElementById(position.toString());
		let symbol = board[position];
		square.innerHTML = `<div class='${symbol}'</div>`
}
