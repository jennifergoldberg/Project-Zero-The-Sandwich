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
7. Every 1 minute, the user will see the sandwich age into a more mature sandwich
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
        

        -create a function for the metric to add +1 for every "click"
        
        */


/* 4. The user will "meet" their sandwich as a Tea Sandwich and the game will start
- create a game object - done
- add event listener "click" for the submit button
    -take the text entered and store it into a variable
        -grab submit buttom from the dom
        -create method to make the text a variable
            -grab text from the dom
    -get the h2 "today on the menu" from the dom
    -put the text from the stored variable into the h2 
- add event listerner "clcik" the start game button
    - grab the crad-box from the dom 
    - add a .css to the card-box to make is display:hidden
- start method will log the start of the game and start counter
    -create counter method to count down the meters every 2 seconds
    -attach it to the start game button
*/
    
const game = {
    round: 1,
    feedScore: 10,
    icedScore: 10,
    slicedScore: 10,
    ageScore: 0,
    time: null,
    timer: null,


    sandoImgs: [
        {
            src:"https://c4.wallpaperflare.com/wallpaper/578/626/344/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-preview.jpg",
            alt: "Miles Morales",
        },
        {
            src:"https://i.ytimg.com/vi/yMYDRFzCCDw/maxresdefault.jpg",
            alt:"spider pig",
        },
    ],



    handleHide(){
        const $cardBox = $(".card-box");
        $cardBox.remove();
        //const $gameBox = $(".about-game");
        //const $formBox = $(".form-box");
        //$gameBox.remove();
        //$formBox.remove();

    },

    reduceMetrics(){
        //console.log("hi");
        game.feedScore--;
        game.icedScore--;  
        game.slicedScore--;
        $("#feed-count").text(` ${game.feedScore}`);
        $("#iced-count").text(` ${game.icedScore}`);
        $("#sliced-count").text(` ${game.slicedScore}`);
        game.metricsBottom();

    },

    ageSando(){
        //console.log("working");
        const $ageCount = $("#age-count");
        game.ageScore++;
        $ageCount.text(` ${game.ageScore}`);
        if (game.ageScore === 1){
            $("#sando__img").attr("src", game.sandoImgs[0].src);
            $("#sando__img").attr("alt", game.sandoImgs[0].alt);
            
        }
    },

    ageTimer(){
        game.timer = setInterval(game.ageSando, 7000);
    },


    metricsTimer(){
        if (game.ageScore === 0){
            game.time = setInterval(game.reduceMetrics, 2000);
        }else if
            (game.ageScore === 1){
                game.time = setInterval(game.reduceMetrics, 1500);
            }else if
                (game.ageScore === 2){
                    game.time = setInterval(game.reduceMetrics, 1000);
                }
    },
    

    /*
    -grab element from the dom and create method to hide it
        -use .hide
        -invoke in start game
    -create game over method
        -if anything === 0
        - use .show()
        -stop metrics
        -invoke in metrics bottom
    -create replay method
        -invoke in game over
        -use same as start game
    */
    handleGameOverHide(){
        const

    },

    handleGameOver(){


    },

    metricsBottom(){
        if (game.feedScore === 0 || game.slicedScore === 0 || game.icedScore === 0) {
            clearInterval(game.time);
            clearInterval(game.timer);
        }
    },

    submitName(){
        console.warn("clicked");
        const $userInput = $("#user-name").val();
        console.log($userInput);
        $("#sandwich-name").text(" " + $userInput);
    },


    handleFeed (){
        const $feedCount = $("#feed-count");
        if (game.feedScore <= 9){
            console.log("game");
            game.feedScore++;
            };
        $feedCount.text(` ${game.feedScore}`);
        },

    
    handleIce (){
        const $icedCount = $("#iced-count");
        console.log("click");
        if (game.icedScore <= 9){
            console.log("game");
            game.icedScore++;
            };
        $icedCount.text(` ${game.icedScore}`);
    },
    
    handleSlice(){
        const $slicedCount = $("#sliced-count");
        console.log("click");
        if (game.slicedScore <= 9){
            console.log("game");
            game.slicedScore++;
            };
        $slicedCount.text(` ${game.slicedScore}`);
    },
    

    clearScores(){
        game.feedScore = 10;
        game.icedScore = 10;  
        game.slicedScore = 10;
        game.ageScore = 0;
        $("#feed-count").text(` ${game.feedScore}`);
        $("#iced-count").text(` ${game.icedScore}`);
        $("#sliced-count").text(` ${game.slicedScore}`);
        $("#age-count").text(` ${game.ageScore}`);
    },


    startSando(){
        console.log("click");
        game.handleHide();
        game.metricsTimer();
        game.ageTimer();
        game.clearScores();


    },

/*
7. Every 10 times the "needs" reach 10, the user will see the sandwich age into a more mature sandwich
    - The sandwich starts as a tea sandwich
    - The first age will turn the sandwich into a club sandwich
    - The second age will turn the sandwich into a submarine sandwich (hoagie)
    - The "needs" increase in difficulty every time the sandwich matures 
        - first need to clear the interval and the scores
            -make a new function to clear the scores and set them back to 10

        - change the picture
        - increase the difficulty 
        - start the countdown again


Increase Age every 2 min 

*/


/*
8. If the user does not meet the "needs" of the sandwich, the sandwich will get modly and the game will be over
    - The mold will appear as a filter over the sandwich at it's present state
    - The user will be alerted of their failure with text that says "Game Over!"
        - game stops
        - mold will appear on the screen 
        - grab game__over from the dom and append text 
        - overlay text like we did with game rounds 
9. The user wins the game by meeting the "needs" the submarine sandwich  
    - if round === 4 
    - game stops  
    - grab game__won from the dom and append text to it
    - overlay the text like we did with the same start and the game rounds

*/

};
    
    
$("#start-game").on("click", game.startSando);
$("#submit-name").on("click", game.submitName);
    
$("#feed").on("click", game.handleFeed);
$("#feed").on("click", game.handleAge);

$("#iced").on("click", game.handleIce);
$("#iced").on("click", game.handleAge);

$("#sliced").on("click", game.handleSlice);
$("#sliced").on("click", game.handleAge);


