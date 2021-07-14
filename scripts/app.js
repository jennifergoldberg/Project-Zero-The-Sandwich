/*1. The user opens the site on the browser 
2. The user see a box with a blank field and is asked to enter a name for their sandwich and press a submit button that says " "
    - The field will have a max character count of 25
    - The field will be a layer on top of the main page that puts an opacity on top of the main page
3. The opacity will be removed and the user will see the sandwich game
    - The user's chosen name will be displayed in the header
4. The user will "meet" their sandwich as a Tea Sandwich and the user can start the game by clicking any button
5. The user will click one of three buttons to take care of the sandwich by meeting the sandwich's "needs"
    - The Feed button will run the feedMe() that will feed the sandwich and adjust the progress bar for the hunger metrics 
    - The Slice button will run the sliceMe() that will play with the sandwich to prevent boredom and adjust the progress bar for the boredom metrics 
    - The Ice button will run the iceMe() that will put the sandwich to bed and adjust the progress bar for the sleepiness metrics 
6. The user can see the "needs" of the sandwich in the progress bar
    - The sandwich's "needs" are rated 0-10, with 0 being the lowest and 10 the highest
    - As the user presses the Feed, Slice, or Ice buttons, the progress bar will increase to a max of 10
    - The progress bar will reduce from 10 every 2s
7. Every 10 times the "needs" reach 10, the user will see the sandwich age into a more mature sandwich
    - The sandwich starts as a tea sandwich
    - The first age will turn the sandwich into a club sandwich
    - The second age will turn the sandwich into a submarine sandwich (hoagie)
    - The "needs" increase in difficulty every time the sandwich matures 
8. If the user does not meet the "needs" of the sandwich, the sandwich will get modly and the game will be over
    - The mold will appear as a filter over the sandwich at it's present state
    - The user will be alerted of their failure with text that says "Game Over!" 
9. The user wins the game by meeting the "needs" the submarine sandwich  
    
    */



    
    /* 5. The user will click one of three buttons to take care of the sandwich by meeting the sandwich's "needs"
        - The Feed button will run the feedMe() that will feed the sandwich and adjust the progress bar for the hunger metrics 
        - The Slice button will run the sliceMe() that will play with the sandwich to prevent boredom and adjust the progress bar for the boredom metrics 
        - The Ice button will run the iceMe() that will put the sandwich to bed and adjust the progress bar for the sleepiness metrics 


        -create a game object to hold data 

        -select button from dom
        -create a new method to handle the feedme button
        -connect the start game method to new method

        -select span from dom and make a variable
        -create a function for the metric to add +1 for every "click"
        
        */


/* 4. The user will "meet" their sandwich as a Tea Sandwich and the game will start
- create a game object - done
- add event listener "click" 
- start method will log the start of the game and start counter
    -create counter method
    -attach it to the 
*/
    
const sandoGame = {
    round: 1,
    feedScore: 0,
    icedScore: 0,
    slicedScore: 0,


/*  startSando(event){
       // console.log("click");
        sandoGame.handleFeedMe();

    },*/

    $countFeedClick: $(".feed-count"),
    
    handleFeedMe(event){
        const $countFeedClick = $(event.target)
        if ($countFeedClick.hasClass("feed-count") === true && sandoGame.feedScore <= 10){
            console.log($countFeedClick.hasClass("feed-count"));
            sandoGame.feedScore++;
            }
        $(".feed-count").text(` ${sandoGame.feedScore}`);
        },

    
    
    
    };
    
    
    
    
$("#feed").on("click", sandoGame.handleFeedMe);
$("#ice").on("click", sandoGame.startSando);
$("#slice").on("click", sandoGame.startSando);

