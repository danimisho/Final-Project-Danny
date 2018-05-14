console.log('it works');

SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {
  var draw = SVG('drawing').size(1000,1000)

  var xOne = (Math.round((Math.random() * 800))) + 100
  var yOne = (Math.round((Math.random() * 800))) + 100
  var xTwo = (Math.round((Math.random() * 800))) + 100
  var yTwo = (Math.round((Math.random() * 800))) + 100
  var xThree = (Math.round((Math.random() * 800))) + 100
  var yThree = (Math.round((Math.random() * 800))) + 100
  var xFour = (Math.round((Math.random() * 800))) + 100
  var yFour = (Math.round((Math.random() * 800))) + 100

  var circleOne = draw.circle(0).attr({fill: '#fff', 'fill-opacity': 0, 'stroke-width' : 5}).move(xOne, yOne).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1).animate(3000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).loop()
  var circleTwo = draw.circle(0).attr({fill: '#fff', 'fill-opacity': 0, 'stroke-width' : 5}).move(xTwo, yTwo).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1)
  var circleThree = draw.circle(0).attr({fill: '#fff', 'fill-opacity': 0, 'stroke-width' : 5}).move(xThree, yThree).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1)
  var circleFour = draw.circle(0).attr({fill: '#fff', 'fill-opacity': 0, 'stroke-width' : 5}).move(xFour, yFour).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1)

  var image = draw.image('https://cdn.img42.com/4b6f5e63ac50c95fe147052d8a4db676.jpeg')
image.size(190, 190).radius(95).move(20, 20)

} else {
  alert('SVG not supported')
}
})
