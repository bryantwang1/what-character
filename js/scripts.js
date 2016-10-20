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
var coralScore;

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

var charScoring = function(charName) {
  var charScore = 0;

  if (weapon === charName) {
    charScore = charScore + 1;
  } else {};

  if (job === charName) {
    charScore = charScore + 1;
  } else {};

  if (personality === "badass") {
    charScore = charScore + 1;
  } else {};

  if (colorFlavor === charName) {
    charScore = charScore + 1;
  } else {};

  if (charName === "glenn") {
    glennScore = charScore;
  } else if (charName === "daryl") {
    darylScore = charScore;
  } else if (charName === "michonne") {
    michonneScore = charScore;
      if (job === "house-spouse") {
        michonneScore = michonneScore + 1;
      } else {};
  } else if (charName === "rick") {
    rickScore = charScore;
  } else if (charName === "morgan") {
    morganScore = charScore;
  } else if (charName === "carol") {
    carolScore = charScore;
      if (job === "house-spouse") {
        carolScore = carolScore + 1;
      } else {};
  } else if (charName === "coral") {
    coralScore = charScore;
    coralScore = coralScore - 1;
      if (personality === "coral") {
        coralScore = corallScore + 10;
      } else {}
  } else {};
};

$(document).ready(function(){
  $("#walking-dead").submit(function(event){
    name = $("#name").val();
    weapon = $("input:radio[name=weapon]:checked").val();
    job = $("input:radio[name=job]:checked").val();
    personality = $("input:radio[name=personality]:checked").val();
    colorFlavor = $("input:radio[name=color-flavor]:checked").val();

    charReset();

    charScoring(glenn);
    charScoring(daryl);
    charScoring(michonne);
    charScoring(rick);
    charScoring(morgan);
    charScoring(carol);
    charScoring(coral);


    event.preventDefault();
  });
});
