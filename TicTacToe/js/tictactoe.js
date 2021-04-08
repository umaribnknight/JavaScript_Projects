//This variable keeps track of whose turn it is.
let activePlayer = 'x';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square has'nt been selected already.
    //The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber)))  {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if(activePlayer === 'x')  {
            //if active player is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'x')  {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'o';
            //If active player is anything other than 'X'.
        } else{
            //Change the activePlayer to 'X'.
            activePlayer = 'x';
        }


        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer === 'o') {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before computernplaces image and enables click.
            setTimeout(function  () { computersTurn() ;  }, 1000)
        }
        //Returning true is needed for our computerTurn() function to work.
        return true; 
    }
    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This  variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while(!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the rsndom number elevated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            }
        }
    }
}
    //This function pauses the selectedSquares array to search for win conditions.
    function checkWinConditions()  {
        // x, 0, 1, 2 condition.
        if    (arrayIncludes('ox', '1x', '2x')) { drawWinLine(50, 100, 558, 100) }
        // x 3, 4, 5 condition.
        else if (arrayIncludes('3x', '4x', '5x')) {drawWinLine(50, 304, 558, 304) }
        // x 3, 4, 5 condition.
        else if(arrayIncludes('6x', '7x', '8x')) { drawWinLine(50, 508, 558, 508) }
        // x 0, 3, 6 condition.
        else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100, 50, 100, 558) }
        // x 1, 4, 7 condition.
        else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304, 50, 304, 558) }

        else if (arrayIncludes('2x', '5x', '8x')) {drawWinLine(508, 50, 508, 558)  }

        else if (arrayIncludes('6x', '4x', '2x')) {drawWinLine(100, 508, 510, 90)  }

        else if (arrayIncludes('0x', '4x', '8x')) {drawWinLine(100, 100, 520, 520)  }

        else if (arrayIncludes('0o', '1o', '2o')) {drawWinLine(50, 100, 558, 100)  }

        else if (arrayIncludes('3o', '4o', '5o')) {drawWinLine(50, 304, 558, 304)  }

        else if (arrayIncludes('6o', '7o', '8o')) {drawWinLine(50, 508, 558, 508)  }
        
        else if (arrayIncludes('oo', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
            
        else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558) }

        else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558) }

        else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90) }

        else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520) }

        else if (selectedSquares.length >= 9) {

            audio('./media/tie.mp3');

            setTimeout(function () { resetGame(); }, 1000);
        }

        function arrayIncludes(squareA, squareB, squareC) {

            const a = selectedSquares.includes(squareA)
            const b = selectedSquares.includes(squareB)
            const c = selectedSquares.includes(squareC)


            if (a === true && b === true && c === true) { return true }

        }
    }

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again
    setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL)  {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}
//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2 ) {
    //This line accesses our html canvas element.
    const canvas = document.getElementById('win-lines')
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,

            y1 = coordY1,

            x2 = coordX2,

            y2 = coordY2,

            x = x1,

            y = y1;

    //This function interacts with the canvas
    function animateLineDrawing() {
        //This variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608)
        //This method starts a new path
        c.beginPath();
        // This method moves us to a starting point for our line.
        c.moveTo(x1, y1)
        // This method indicates the end point in our line.
        c.lineTo(x, y)

        c.lineWidth = 10;

        c.strokeStyle = 'rgba(70, 255, 33, .8)';

        c.stroke();

        if(x1 <= x2 && y1 <= y2) {

            if (x < x2) { x += 10;  }

            if (y < y2) { y += 10; }


            if(x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }


        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { x-= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }    
    }

    function clear() {

        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);

        cancelAnimationFrame(animationLoop);
    }

    disableClick();

    audio('./media/winGame.mp3');

    animateLineDrawing();

    setTimeout(function () { clear(); resetGame(); }, 1000);
}  
//This function resets the game in the event of a tie or win.
function resetGame() {
     //This fo loop iterates through each HTML square element.
    for   (let i = 0; i < 9; i++)   {
        //This element gets the html element of i.
        let square = document.getElementById(String(i))
        //This removes our elements backround image.
        square.style.backgroundImage = ''
    }
    //This restes our array so it is empty and we can start over.
        selectedSquares = [];
}
                    
                   
                    
                            
                                










                            

                            
                        

                    






                    
    
                
           
        
    


