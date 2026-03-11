// /*---------------------------------
// This file contains all of the code for the Main Menu
// ----------------------------------*/

// var startButton = new GameObject();
// //startButton.img.src="images/mrt1.jpg"
// startButton.width=200;
// startButton.hitBoxWidth=800
// console.log(startButton.collisionPoints.right)


// var menuBackground = new GameObject();
// menuBackground.img.src = "images/mrt1.jpg"
// menuBackground.width=canvas.width
// menuBackground.height=canvas.height

// gameStates[`menu`] =function(){

// 	//Makes the button clickable
// 	if(startButton.overlap(mouse))
// 	{
// 		if(mouse.pressed)
// 		{
// 			//Changes to the game state
// 			gameStates.changeState(`level1`)
// 		}

// 		//Hover Effect Graffic
// 		startButton.color = `lightblue`
// 	}
// 	else
// 	{
// 		//Default Button Graphic
// 		startButton.color = `grey`
// 	}
	
// 	menuBackground.drawStaticImage();
// 	startButton.render()
// }
	

/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

// Create sound
var clickSound = new Audio("sounds/soundtrack.mp3");

var startButton = new GameObject();
//startButton.img.src="images/mrt1.jpg"
startButton.width = 200;
startButton.hitBoxWidth = 800;
console.log(startButton.collisionPoints.right);

var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt1.jpg";
menuBackground.width = canvas.width;
menuBackground.height = canvas.height;

gameStates[`menu`] = function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			// Play sound
			clickSound.currentTime = 0;
			clickSound.play();

			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graphic
		startButton.color = `lightblue`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `grey`
	}
	
	menuBackground.drawStaticImage();
	startButton.render();
}
	
