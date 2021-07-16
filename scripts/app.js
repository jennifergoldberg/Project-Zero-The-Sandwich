

const game = {
    round: 1,
    feedScore: 10,
    icedScore: 10,
    slicedScore: 10,
    ageScore: 0,
    time: 0,
    timer: 0,


    sandoImgs: [
        {
            src:"assets/images/club-sandwich.png",
            alt: "club sandwich vector",
        },
        {
            src:"assets/images/sub.png",
            alt:"sub sandwich vector",
        },
        {
            src:"assets/images/elvis-sando.png",
            alt: "elvis sandwich vector",
        },
        {
            src:"assets/images/dagwood-sando.png",
            alt:"Dagwood Sandwich vector",
        },
    ],


    handleHide(){
        const $cardBox = $(".card-box");
        $cardBox.remove();

    },

    reduceMetrics(){
        game.feedScore--;
        game.icedScore--;  
        game.slicedScore--;
        $(".feed-progress").css("width", `${game.feedScore * 10}%`);
        $(".iced-progress").css("width", `${game.icedScore * 10}%`);
        $(".sliced-progress").css("width", `${game.slicedScore * 10}%`);
        game.handleGameOver();
        console.log(game.feedScore);
    },

    ageSando(){
        game.ageScore++;
        if (game.ageScore === 1){
            $("#sando__img").attr("src", game.sandoImgs[0].src);
            $("#sando__img").attr("alt", game.sandoImgs[0].alt);
            $("#age-name").text("Club Sandwich");
        } else if
            (game.ageScore === 2) {
            $("#sando__img").attr("src", game.sandoImgs[1].src);
            $("#sando__img").attr("alt", game.sandoImgs[1].alt);
            $("#age-name").text("Submarine Sandwich");
        } else if
            (game.ageScore === 3) {
            game.handleKing();
            $("#sando__img").attr("src", game.sandoImgs[2].src);
            $("#sando__img").attr("alt", game.sandoImgs[2].alt);
            $("#age-name").text("Elvis Sandwich");
        } else if
            (game.ageScore === 4) {
            $("#the-king").toggle(false);
            $("#sando__img").attr("src", game.sandoImgs[3].src);
            $("#sando__img").attr("alt", game.sandoImgs[3].alt);
            $("#age-name").text("Dagwood Sandwich");
        } else if
            (game.ageScore > 4) {
            console.log("Game Won");
            game.handleGameWon();
        }
    },

    clearScores(){
        game.feedScore = 10;
        game.icedScore = 10;  
        game.slicedScore = 10;
        game.ageScore = 0;
    },
    

    ageTimer(){
        game.timer = setInterval(game.ageSando, 30000);
    },

    
    metricsTimer(){
        game.time = setInterval(game.reduceMetrics, 1000);
    },
    

    handleKing(){
        const $theKing = $("#the-king");
        $theKing.toggle(false);
        if (game.ageScore === 3){
            $theKing.toggle(true);
        };
    },


    handleGameOver(){
        const $gameOver = $(".game-over");
        $gameOver.toggle(false);
        if (game.feedScore === 0 || game.slicedScore === 0 || game.icedScore === 0) {
            $gameOver.toggle(true);
            clearInterval(game.time);
            clearInterval(game.timer);
        };
    },

    handleGameWon(){
        const $gameWon = $(".game-won");
        $gameWon.toggle(false);
        if (game.ageScore === 5) {
            console.log("game won2");
            $gameWon.toggle(true);
            clearInterval(game.time);
            clearInterval(game.timer);
        };
    },



    submitName(){
        const $userInput = $("#user-name").val();
        $("#sandwich-name").text(" " + $userInput);
    },


    handleFeed (){
        if (game.feedScore <= 9){
            game.feedScore++;
            };
        $(".feed-progress").css("width", `${game.feedScore * 10}%`);
        },

    
    handleIce (){
        if (game.icedScore <= 9){
            game.icedScore++;
            };
        $(".iced-progress").css("width", `${game.icedScore * 10}%`);
    },
    
    handleSlice(){
        if (game.slicedScore <= 9){
            game.slicedScore++;
            };
        $(".sliced-progress").css("width", `${game.slicedScore * 10}%`);
    },
    

    startSando(){
        game.handleHide();
        game.metricsTimer();
        game.ageTimer();
        game.clearScores();
        game.handleGameOver();
        game.handleGameWon();
        game.handleKing();


    },

};
    
    
$("#start-game").on("click", game.startSando);
$("#submit-name").on("click", game.submitName);
    
$("#feed").on("click", game.handleFeed);
$("#feed").on("click", game.handleAge);

$("#iced").on("click", game.handleIce);
$("#iced").on("click", game.handleAge);

$("#sliced").on("click", game.handleSlice);
$("#sliced").on("click", game.handleAge);

$("#restart").on("click", game.startSando);
$("#replay").on("click", game.startSando);


