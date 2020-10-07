import "../style/index.scss";

window.onload = function() {
  var cardNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7 ",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  var suit = ["&#9824", "&#9829", "&#9827", "&#9830"];

  var randomNumbers =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  var randomSuit = suit[Math.floor(Math.random() * suit.length)];

  if (randomSuit == "&#9829" || randomSuit == "&#9830") {
    document.querySelector(".card").style.color = "red";
  }

  document.querySelector(".suit1").innerHTML = randomSuit;
  document.querySelector(".value").innerHTML = randomNumbers;
  document.querySelector(".suit2").innerHTML = randomSuit;
};
