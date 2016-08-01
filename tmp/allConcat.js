var Card = require('./../js/card.js').cardModule;

var clickCounter = 1;
var previousImage = null;

$(document).ready(function() {
  $('#play-the-game').on('click', function() {
    var dummyCard = new Card('random group');
    var randomImages = [];
    for (var i = 0; i < 2; i++) {
      randomImages = dummyCard.randomOrder();
      randomImages.forEach(function(imgName) {
        var newImgNum = '';
        var imgNum = imgName + i;
        $('#cards').append('<li><div id="' + imgNum.toString() + '" class="card"><img src="img/card-back.jpg" alt="' + imgNum + '" /></div></li>');
        $('#' + imgNum.toString()).on('click', function() {
          if ((clickCounter % 2 === 0) && (previousImage.slice(0, previousImage.length - 1) === imgName)) {
            $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + imgNum + '" /></div>');
            clickCounter += 1;
          } else if ((clickCounter % 2 === 0) && (previousImage.slice(0, previousImage.length - 1) !== imgName)) {
            $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + imgNum + '" /></div>');
            setTimeout(function(){ $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/card-back.jpg" alt="' + imgNum + '" /></div>'); }, 1000);
            setTimeout(function(){ $('#' + previousImage).html('<div id="' + newImgNum + '" class="card"><img src="img/card-back.jpg" alt="' + newImgNum + '" /></div>'); }, 1000);
            clickCounter += 1;
          } else {
            $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + imgNum + '" /></div>');
            clickCounter += 1;
            previousImage = imgNum;
          }
        });
      });
    }
  });
});
