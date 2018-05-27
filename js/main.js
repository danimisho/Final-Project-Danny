console.log('it works');

SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {
  var draw = SVG('drawing').size('100%', '100%').viewbox(0,0,1000,1000);

  var pattern1 = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1080').size(1000, 1000)
});

  var pattern2 = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1079').size(1000, 1000)
});

  var pattern3 = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1078').size(1000, 1000)
});

  var pattern4 = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1076').size(1000, 1000)
});




  var circle1 = draw.circle(0).addClass('circle1').id('circle1');
  var circle2 = draw.circle(0).addClass('circle2').id('circle2');
  var circle3 = draw.circle(0).addClass('circle3').id('circle3');
  var circle4 = draw.circle(0).addClass('circle4').id('circle4');
  var switchCircle = draw.circle().center(900,100).addClass('switchCircle');

  circle1.on('click',()=>{
    circle1.addClass('expand');
    circle2.addClass('shrink');
    circle3.addClass('shrink');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
  });

  circle2.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('expand');
    circle3.addClass('shrink');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
  });

  circle3.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('shrink');
    circle3.addClass('expand');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
  });

  circle4.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('shrink');
    circle3.addClass('shrink');
    circle4.addClass('expand');
    switchCircle.addClass('switchExpand');
  });

  switchCircle.on('click', ()=>{
    circle1.removeClass('shrink').removeClass('expand');
    circle2.removeClass('shrink').removeClass('expand');
    circle3.removeClass('shrink').removeClass('expand');
    circle4.removeClass('shrink').removeClass('expand');
    switchCircle.removeClass('switchExpand');
  });

} else {
  alert('SVG not supported')
}
})
