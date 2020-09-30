import "../style/index.scss";

window.onload = function() {
  var num = ["2", "3", "4", "5", "6", "7 ", "8", "9", "10", "J", "K", "Q", "A"];
  var suit = ["&#9824", "&#9829", "&#9827", "&#9830"];

  var ranNum = num[Math.floor(Math.random() * num.length)];
  var ranSuit = suit[Math.floor(Math.random() * suit.length)];

  if (ranSuit == "&#9829" || ranSuit == "&#9830") {
    document.querySelector(".card").style.color = "red";
  }

  document.querySelector(".suit1").innerHTML = ranSuit;
  document.querySelector(".value").innerHTML = ranNum;
  document.querySelector(".suit2").innerHTML = ranSuit;
};
