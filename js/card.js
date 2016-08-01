function Card(name) {
  this.name = name;
}

Card.prototype.randomOrder = function() {
  var randomArry = [];
  var images = ['tree', 'car', 'tower', 'bird', 'mug'];
  while (randomArry.length < 5) {
    var image = (images[Math.floor(Math.random() * 5)]);
    if (!(randomArry.includes(image))) {
      randomArry.push(image);
    }
  }
  return randomArry;
};


exports.cardModule = Card;

// 
//
// if ((clickCounter % 2 === 0) && (previousImage === imgName)) {
//   $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + imgNum + '" /></div>');
//   clickCounter += 1;
// } else if ((clickCounter % 2 === 0) && (previousImage !== imgName)) {
//   $('#' + imgNum.toString()).html('<div id="' + imgNum.toString() + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + imgNum + '" /></div>');
//     if ((imgNum.charAt(imgNum.length) === 0)) {
//       var finder = 1;
//       var newImgNum = imgName + finder.toString();
//         $('#' + imgName + finder.toString()).html('<div id="' + newImgNum + '" class="card"><img src="img/' + imgName + '.jpg" alt="' + newImgNum + '" /></div>');
//     } else {
//       var finder = 0;
//       var newImgNum = previousImage + finder.toString();
//         $('#' + imgName + finder.toString()).html('<div id="' + newImgNum + '" class="card"><img src="img/card-back.jpg" alt="' + newImgNum + '" /></div>');
//     }
//   clickCounter += 1;
// } else {
