var userSentence = "";
var userSentenceString = [];
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var puzzleSentence = [];


var puzzle = function(userSentence) {

  userSentenceString = userSentence.split('');

  console.log(userSentenceString);


  for (var letterIndex = 0; letterIndex < userSentenceString.length; letterIndex += 1) {
    if (letterIndex === vowels[]){
      puzzleSentence = userSentenceString.splice(0, 0, "-");
      return puzzleSentence;
    }
  }

  console.log


};

$(document).ready(function(){

  $("form#puzzle").submit(function(event){
    event.preventDefault();

    alert("form works");

    userSentence = $("textarea#userSentence").val();

    puzzle(userSentence);

    console.log(userSentenceString);

  });

});
