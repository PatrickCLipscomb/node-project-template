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
