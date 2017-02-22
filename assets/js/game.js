

var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var numberOptions = [10, 5, 3, 7];
  var wins = 0;
  var loss = 0;
  $("#wins").text(wins);
  $("#loss").text(loss);
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/img/gem" + [i] + ".png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
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