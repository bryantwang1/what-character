var glenn = "glenn";
var daryl = "daryl";
var michonne = "michonne";
var rick = "rick";
var morgan = "morgan";
var carol = "carol";
var coral = "coral";

var glennScore;
var darylScore;
var michonneScore;
var rickScore;
var morganScore;
var carolScore;

var name;
var weapon;
var job;
var personality;
var colorFlavor;

var charReset = function() {
  glennScore = 0;
  darylScore = 0;
  michonneScore = 0;
  rickScore = 0;
  morganScore = 0;
  carolScore = 0;
  coralScore = 0;
};

var charNameString;
var charScoring = function(charName) {
  if (weapon === charName) {
    charScore = charScore + 1;
  } else {

  }
};

$(document).ready(function(){
  $("#walking-dead").submit(function(event){
    name = $("#name").val();
    weapon = $("input:radio[name=weapon]:checked").val();
    job = $("input:radio[name=job]:checked").val();
    personality = $("input:radio[name=personality]:checked").val();
    colorFlavor = $("input:radio[name=color-flavor]:checked").val();

    charReset();

    charScore(glenn);

    event.preventDefault();
  });
});
