console.log('it works');

SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {
  var draw = SVG('drawing').size('100%', '100%').viewbox(0,0,1000,1000);

  var patternOne = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1084').size(1000, 1000)
});

  var patternTwo = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1083').size(1000, 1000)
});

  var patternThree = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1082').size(1000, 1000)
});

  var patternFour = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1081').size(1000, 1000)
});




  var circleOne = draw.circle(0).fill('url(#SvgjsPattern1008)').stroke('black').attr({'stroke-width' : 5}).center(400, 200).animate(400, '>', 0).radius(150).animate(400, '>', 0).radius(145).animate(5000, '<>', 0).center(400, 800).animate(5000, '<>', 0).center(800, 800).animate(5000, '<>', 0).center(800, 400).animate(5000, '<>', 0).center(200, 400).animate(5000, '<>', 0).center(200,800).animate(5000, '<>', 0).center(600, 800).animate(5000, '<>', 0).center(600, 200).animate(5000, '<>', 0).center(200, 200).animate(5000, '<>', 0).center(200, 600).animate(5000, '<>', 0).center(800, 600).animate(5000, '<>', 0).center(800, 200).animate(5000, '<>', 0).center(400, 200);
  var circleTwo = draw.circle(0).fill('url(#SvgjsPattern1010)').stroke('black').attr({'stroke-width' : 5}).center(800, 400).animate(400, '>', 0).radius(150).animate(400, '>', 0).radius(145).animate(5000, '<>', 0).center(200, 400).animate(5000, '<>', 0).center(200,800).animate(5000, '<>', 0).center(600, 800).animate(5000, '<>', 0).center(600, 200).animate(5000, '<>', 0).center(200, 200).animate(5000, '<>', 0).center(200, 600).animate(5000, '<>', 0).center(800, 600).animate(5000, '<>', 0).center(800, 200).animate(5000, '<>', 0).center(400, 200).animate(5000, '<>', 0).center(400, 800).animate(5000, '<>', 0).center(800, 800).animate(5000, '<>', 0).center(800, 400);
  var circleThree = draw.circle(0).fill('url(#SvgjsPattern1012)').stroke('black').attr({'stroke-width' : 5}).center(600, 800).animate(400, '>', 0).radius(150).animate(400, '>', 0).radius(145).animate(5000, '<>', 0).center(600, 200).animate(5000, '<>', 0).center(200, 200).animate(5000, '<>', 0).center(200, 600).animate(5000, '<>', 0).center(800, 600).animate(5000, '<>', 0).center(800, 200).animate(5000, '<>', 0).center(400, 200).animate(5000, '<>', 0).center(400, 800).animate(5000, '<>', 0).center(800, 800).animate(5000, '<>', 0).center(800, 400).animate(5000, '<>', 0).center(200, 400).animate(5000, '<>', 0).center(200,800).animate(5000, '<>', 0).center(600, 800);
  var circleFour = draw.circle(0).fill('url(#SvgjsPattern1014)').stroke('black').attr({'stroke-width' : 5}).center(200, 600).animate(400, '>', 0).radius(150).animate(400, '>', 0).radius(145).animate(5000, '<>', 0).center(800, 600).animate(5000, '<>', 0).center(800, 200).animate(5000, '<>', 0).center(400, 200).animate(5000, '<>', 0).center(400, 800).animate(5000, '<>', 0).center(800, 800).animate(5000, '<>', 0).center(800, 400).animate(5000, '<>', 0).center(200, 400).animate(5000, '<>', 0).center(200,800).animate(5000, '<>', 0).center(600, 800).animate(5000, '<>', 0).center(600, 200).animate(5000, '<>', 0).center(200, 200).animate(5000, '<>', 0).center(200, 600);

document.getElementById('SvgjsCircle1016').addEventListener('click',()=>{
  console.log('click');
  circleOne.classList.toggle('expand');
  circleTwo.classList.toggle('shrink');
  circleThree.classList.toggle('shrink');
  circleFour.classList.toggle('shrink');
});

} else {
  alert('SVG not supported')
}
})
