document.addEventListener("DOMContentLoaded", function() {

  console.log('it works');

  var circle1 = document.getElementById('circle1')
  var circle2 = document.getElementById('circle2')
  var circle3 = document.getElementById('circle3')
  var circle4 = document.getElementById('circle4')

  circle1.addEventListener('click',function () {
    console.log('click');
    circle1.classList.toggle('expand');
    circle2.classList.toggle('shrink');
    circle3.classList.toggle('shrink');
    circle4.classList.toggle('shrink');
  });

  circle2.addEventListener('click',function () {
    console.log('click');
    circle1.classList.toggle('shrink');
    circle2.classList.toggle('expand');
    circle3.classList.toggle('shrink');
    circle4.classList.toggle('shrink');
  });

  circle3.addEventListener('click',function () {
    console.log('click');
    circle1.classList.toggle('shrink');
    circle2.classList.toggle('shrink');
    circle3.classList.toggle('expand');
    circle4.classList.toggle('shrink');
  });

  circle4.addEventListener('click',function () {
    console.log('click');
    circle1.classList.toggle('shrink');
    circle2.classList.toggle('shrink');
    circle3.classList.toggle('shrink');
    circle4.classList.toggle('expand');
  });

});
