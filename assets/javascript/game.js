$(document).ready(function () {

    
    var randomNumber = 3; //this needs to be an array for the homework game, and looped and split and assigned, or shuffled through for a number***note, one crystal -always- has to be assigned [1]

    //crystals ideally should be looped...but how to create each one uniquely?...make an array of objects to loop through?-see spider web exercise..

    //after player wins or loses, need new randomNumber assigned.



    $("#ranNum-to-guess").text(randomNumber);
    var totalScore = 0;
    $('#total-score').text(totalScore)
    var wins = 0;
    $('#wins-score').text(wins)
    var losses = 0;
    $('#losses-score').text(losses)

    function scoreComparePrint() {
        $('#total-score').text(totalScore)
        if (totalScore === randomNumber) {
            wins++;
            $('#wins-score').text(wins)
            if (wins+1) {
                totalScore = 0;
                $('#total-score').text(totalScore)
            }
        }
        else if (totalScore >= randomNumber) {
            losses++;
            $('#losses-score').text(losses)
            if (losses+1) {
                totalScore = 0;
                $('#total-score').text(totalScore)
            }
        }
    }
    var crystalValue = [2];
    for (var i = 0; i < crystalValue.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/intensecrystal.png");
        imageCrystal.attr("num-crystalvalue", crystalValue[i]);
        $("#crystals").append(imageCrystal);
    }
    var crystalValueTwo = [1];
    for (let i = 0; i < crystalValueTwo.length; i++) {
        var imageCrystalTwo = $('<img>');
        imageCrystalTwo.addClass("whitecrystal-image");
        imageCrystalTwo.attr("src", "assets/images/whitecrystal.png");
        imageCrystalTwo.attr("num-crystalvaluetwo", crystalValueTwo[i]);
        $("#crystals2").append(imageCrystalTwo);  
    }
    var crystalValueThree = [3];
    for (let i = 0; i < crystalValueThree.length; i++) {
        var imageCrystalThree = $('<img>');
        imageCrystalThree.addClass("pinkcrystal-image");
        imageCrystalThree.attr("src", "assets/images/pinkcrystal.png");
        imageCrystalThree.attr("num-crystalvaluethree", crystalValueThree[i]);
        $("#crystals3").append(imageCrystalThree);  
    }
    var crystalValueFour = [4];
    for (let i = 0; i < crystalValueFour.length; i++) {
        var imageCrystalFour = $('<img>');
        imageCrystalFour.addClass("bluepinkcrystal-image");
        imageCrystalFour.attr("src", "assets/images/bluepinkcrystal.png");
        imageCrystalFour.attr("num-crystalvaluefour", crystalValueFour[i]);
        $("#crystals4").append(imageCrystalFour);  
    }

    $(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("num-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    scoreComparePrint()
    });
    $(".whitecrystal-image").on("click", function () {
    var crystalValueTwo = ($(this).attr("num-crystalvaluetwo"));
    crystalValueTwo = parseInt(crystalValueTwo);
    totalScore += crystalValueTwo;
    scoreComparePrint()
    });
    $(".pinkcrystal-image").on("click", function () {
    var crystalValueThree = ($(this).attr("num-crystalvaluethree"));
    crystalValueThree = parseInt(crystalValueThree);
    totalScore += crystalValueThree;
    scoreComparePrint()
    });
    $(".bluepinkcrystal-image").on("click", function () {
    var crystalValueFour = ($(this).attr("num-crystalvaluefour"));
    crystalValueFour = parseInt(crystalValueFour);
    totalScore += crystalValueFour;
    scoreComparePrint()
    });

});