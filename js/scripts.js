var userSentence = "";
var sentenceSplit = [];
var puzzleSentenceArray = [];
var puzzleSentence = "";

var makePuzzle = function(sentenceSplit) {
  for (var letter = 0; letter < sentenceSplit.length; letter += 1) {
    puzzleSentenceArray = sentenceSplit.map(function(letter) {
      if (letter === "a") {
        return "-";
      } else if (letter === "e") {
        return "-";
      } else if (letter === "i") {
        return "-";
      } else if (letter === "o") {
        return "-";
      } else if (letter === "u") {
        return "-";
      } else if (letter === "y") {
        return "-";
      } else if (letter === "A") {
        return "-";
      } else if (letter === "E") {
        return "-";
      } else if (letter === "I") {
        return "-";
      } else if (letter === "O") {
        return "-";
      } else if (letter === "U") {
        return "-";
      } else if (letter === "Y") {
        return "-";
      } else {
        return letter;
      }
    });
    puzzleSentence = puzzleSentenceArray.join(' ');
  }
};

var resetForm = function(){
  $("textarea#userSentence").val("");
}

$(document).ready(function(){

  $("form#puzzle").submit(function(event){
    event.preventDefault();

    $("h3#puzzle").empty();

    userSentence = $("textarea#userSentence").val();
    sentenceSplit = userSentence.split('');

    makePuzzle(sentenceSplit);

    $("h3#puzzle").text(puzzleSentence);

    $("form#puzzle").hide();

    $("div#container").removeClass("greyBackground");

    $("div#showSentence").show();

    console.log(puzzleSentence);

  });

  $("button#showButton").click(function(){
    $("p#originalSentence").text(userSentence);
  });

  $("button#playAgain").click(function(){
    $("form#puzzle").show();
    $("div#showSentence").hide();
    $("div#container").addClass("greyBackground");
    resetForm();
  });

});
