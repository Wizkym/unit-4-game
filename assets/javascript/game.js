// Declare global variables
let randNum;
var gems = {
    redVal: 0,
    blueVal: 0,
    yellVal: 0,
    greenVal: 0
};

//convert the gems object values into an accessible array
const vals = Object.values(gems);

// Define the game object
var game = {
    wins: 0,
    loses: 0,
    total: 0,

    newGame: function () {
        //generate random target number
        randNum = Math.floor(Math.random() * 102) + 19;
        console.log(randNum + '<<ComputerPicked');
        
        //generate random values for the crystals
        for (let x in gems) {
            gems[x] =  Math.floor(Math.random() * 12) + 1;
            vals[x] = gems[x];
        }

        //reset the view
        this.total = 0;
        $("#target").text(randNum);
        $("#total").text(this.total);
        $("#wins").text(this.wins);
        $("#loses").text(this.loses);
    },

    tally: function (code) {        //evaluates the new sum based on the image clicked
        if (code === "red"){
            this.total = this.total + gems.redVal;
            $("#total").text(this.total);
        } else if (code === "blue"){
            this.total = this.total + gems.blueVal;
            $("#total").text(this.total);   
        } else if (code === "yellow"){
            this.total = this.total + gems.yellVal;
            $("#total").text(this.total);
        } else if (code === "green"){
            this.total = this.total + gems.greenVal;
            $("#total").text(this.total);
        } else {
            console.log(code);
        }

        if (this.total === randNum) {
            this.wins++;
            $("#result").text("You Won!");
            this.newGame();
        } else {
            if (this.total > randNum) {
                this.loses++;
                $("#result").text("You Lost!");
                this.newGame();
            }
        }
    }
};

$(document).ready(function() {
    $("#red").on("click", function() {
        game.tally("red");
    });

    $("#blue").on("click", function() {
        game.tally("blue");
    });

    $("#yellow").on("click", function() {
        game.tally("yellow");
    });

    $("#green").on("click", function() {
        game.tally("green");
    });
});




