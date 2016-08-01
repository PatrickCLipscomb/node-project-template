var Card = require('./../js/card.js').cardModule;

$(document).ready(function() {
  $('#play-the-game').on('click', function(event) {
    var dummyCard = new Card('random group');
    var randomImages = [];
    for (var i = 0; i < 2; i++) {
      randomImages = dummyCard.randomOrder();
      randomImages.forEach(function(imgName) {
        $('#cards').append('<li><div id="' + imgName + i + '" class="card"><img src="img/card-back.jpg" alt="' + imgName + '" /></div></li>');
      });
    }
  });
});
