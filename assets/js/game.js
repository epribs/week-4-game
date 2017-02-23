var wins = 0;
var loss = 0;
var counter = 0;
$("#wins").text(wins);
$("#loss").text(loss);
$("#score").text(counter);

var numberOptions = [10, 5, 3, 7];
for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/img/gem" + [i] + ".png");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}

function reset(){
  wins = 0;
  loss = 0;
  counter = 0;
  $("#wins").text(wins);
  $("#loss").text(loss);
  $("#score").text(counter);
  game();
}


function game() {
  counter = 0;
  $("#score").text(counter);
  var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#number-to-guess").text(targetNumber);
  console.log("counter preclick:" + counter);
  $(".crystal-image").unbind("click").bind("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("crystal val" + crystalValue);
    console.log("counter post:" + counter);
    console.log("target:" + targetNumber);
    $("#score").text(counter);
    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      loss++;
      $("#loss").text(loss);
      alert("You lose!!");
    }
  });
}

  


  
