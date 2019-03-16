$(document).ready(function () {
    //one crystal -always- has to be assigned [1], crystals ideally should be looped...but how to create each one uniquely?...make an array of objects to loop through?-see spider web exercise..

    //to make this mobile-friendly, maybe have media query hide/show buttons to push for scores for screen sizes..

var randomNumber = getRandomNum(19, 120);
var crystalValueOne = getRandomNum(1, 6)
var crystalValueRand = crystalValueOne * 2;
var crystalValueTwo = getRandomNum(1, 6);
var crystalValueTwoRand = (crystalValueTwo * 2 )+ 1;
var crystalValueThreeRand = getRandomNum(9, 12);
var crystalValueFourRand = getRandomNum(1, 8);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/intensecrystal.png");
    $("#crystals").append(imageCrystal);   

    var imageCrystalTwo = $('<img>');
    imageCrystalTwo.addClass("whitecrystal-image");
    imageCrystalTwo.attr("src", "assets/images/whitecrystal.png");
    $("#crystals2").append(imageCrystalTwo);  

    var imageCrystalThree = $('<img>');
    imageCrystalThree.addClass("pinkcrystal-image");
    imageCrystalThree.attr("src", "assets/images/pinkcrystal.png");
    $("#crystals3").append(imageCrystalThree);  

    var imageCrystalFour = $('<img>');
    imageCrystalFour.addClass("bluepinkcrystal-image");
    imageCrystalFour.attr("src", "assets/images/bluepinkcrystal.png");
    $("#crystals4").append(imageCrystalFour);

    function newRandomNumber() {
    randomNumber = getRandomNum(19, 120);
    console.log("number to guess " + randomNumber)
    $("#ranNum-to-guess").text(randomNumber);
    crystalValueOne = getRandomNum(1, 6)
    crystalValueRand = crystalValueOne * 2;
    crystalValueTwo = getRandomNum(1, 6);
    crystalValueTwoRand = (crystalValueTwo * 2 )+ 1;
    crystalValueThreeRand = getRandomNum(9, 12);
    crystalValueFourRand = getRandomNum(1, 8);

    imageCrystal.attr("num-crystalvalue", crystalValueRand);
    imageCrystalTwo.attr("num-crystalvaluetwo", crystalValueTwoRand);
    imageCrystalThree.attr("num-crystalvaluethree", crystalValueThreeRand);
    imageCrystalFour.attr("num-crystalvaluefour", crystalValueFourRand);
    console.log("crystal "+ crystalValueRand)
    console.log("crystalTwo "+ crystalValueTwoRand)
    console.log("crystalthree "+ crystalValueThreeRand)
    console.log("crystalfour " + crystalValueFourRand)
}
newRandomNumber()

var totalScore = 0;
$('#total-score').text(totalScore)
var wins = 0;
$('#wins-score').text(wins)
var losses = 0;
$('#losses-score').text(losses)

function scoreComparePrint() {
    if (totalScore === randomNumber) {
        wins++;
        $('#wins-score').text(wins);
        if (wins+1) {
            totalScore = 0;
            $('#total-score').text(totalScore);
            newRandomNumber()
        }
    }
    else if (totalScore > randomNumber) {
        losses++;
        $('#losses-score').text(losses)
        if (losses+1) {
            totalScore = 0;
            $('#total-score').text(totalScore)
            newRandomNumber()
        }
    }
}    

$(".crystal-image").on("click", function () {
var crystalValue = ($(this).attr("num-crystalvalue"));
crystalValue = parseInt(crystalValue);
totalScore += crystalValue;
$('#total-score').text(totalScore)
scoreComparePrint()
});

$(".whitecrystal-image").on("click", function () {
var crystalValueTwo = ($(this).attr("num-crystalvaluetwo"));
crystalValueTwo = parseInt(crystalValueTwo);
totalScore += crystalValueTwo;
$('#total-score').text(totalScore)
scoreComparePrint()
});
$(".pinkcrystal-image").on("click", function () {
var crystalValueThree = ($(this).attr("num-crystalvaluethree"));
crystalValueThree = parseInt(crystalValueThree);
totalScore += crystalValueThree;
$('#total-score').text(totalScore)
scoreComparePrint()
});
$(".bluepinkcrystal-image").on("click", function () {
var crystalValueFour = ($(this).attr("num-crystalvaluefour"));
crystalValueFour = parseInt(crystalValueFour);
totalScore += crystalValueFour;
$('#total-score').text(totalScore)
scoreComparePrint()
});



$(".crystal-image").on("tap", function () {
var crystalValue = ($(this).attr("num-crystalvalue"));
crystalValue = parseInt(crystalValue);
totalScore += crystalValue;
$('#total-score').text(totalScore)
scoreComparePrint()
});

$(".whitecrystal-image").on("tap", function () {
var crystalValueTwo = ($(this).attr("num-crystalvaluetwo"));
crystalValueTwo = parseInt(crystalValueTwo);
totalScore += crystalValueTwo;
$('#total-score').text(totalScore)
scoreComparePrint()
});
$(".pinkcrystal-image").on("tap", function () {
var crystalValueThree = ($(this).attr("num-crystalvaluethree"));
crystalValueThree = parseInt(crystalValueThree);
totalScore += crystalValueThree;
$('#total-score').text(totalScore)
scoreComparePrint()
});
$(".bluepinkcrystal-image").on("tap", function () {
var crystalValueFour = ($(this).attr("num-crystalvaluefour"));
crystalValueFour = parseInt(crystalValueFour);
totalScore += crystalValueFour;
$('#total-score').text(totalScore)
scoreComparePrint()
});


});