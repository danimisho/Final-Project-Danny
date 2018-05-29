console.log('it works');



SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {

  var draw = SVG('drawing').size('100%', '100%').viewbox(0,0,1000,1000);
  var textBox = SVG('textBox').size('100%', '100%').viewbox(0,0,1000,1000);

  var aboutMeBackdrop = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_yes.jpg').size(1000, 1000)
  }).id('aboutMeBackdrop');
  var portfolioBackdrop = draw.pattern(1000, 1000, function(add) {
    add.image('./images/korg-volca-sample-908554-darkened.jpg').size(1000, 1000)
  }).id('portfolioBackdrop');
  var feedbackBackdrop = draw.pattern(1000, 1000, function(add) {
    add.image('./images/Bubble-Wrap.jpg').size(1000, 1000)
  }).id('feedbackBackdrop');
  var principlesBackdrop1 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/The-Dispossessed.jpg').size(1000, 1000)
  }).id('principlesBackdrop1');
  var principlesBackdrop2 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/7125396.png').size(1000, 1000)
  }).id('principlesBackdrop2');
  var principlesBackdrop3 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/BarbicanEstateCityofLondonCromwellTowerunderconstructionChamberlinPowellandBonjpg.jpg').size(1000, 1000)
  }).id('principlesBackdrop3');

  var exitImage = draw.pattern(1, 1, function(add) {
    add.image('./svg/White_X_in_red_background.svg').size(100, 100)
  }).id('exitImage').attr({patternUnits: "objectBoundingBox"});

  var feedbackHeadline = "Feedback:"
  var feedbackParagraph1 = "It is very important to me that "

  var portfolioHeadline = "Portfolio:"
  var portfolioParagraph1 = "Opposite is a collection of some of my previous work in music, writing, and video."
  var portfolioParagraph2 = "I have read in the weekly journals of instances of content creators ‘going viral’, a phenomenon whereby the public are gripped with an insatiable desire for a piece of work and flock to consume it. However, this runs the risk of overloading the internet server and bringing a whole website down."
  var portfolioParagraph3 = "To ensure that I do not suffer this fate, I have designed this portfolio in such a way that only those willing to really make the effort can access the work. Please enjoy these examples of my previous work, if you can catch them."

  var aboutMeTextHeadline = "About Me:";
  var aboutMeTextParagraph1 ="I'm Danny. Hello.";
  var aboutMeTextParagraph2 = "It’s hard for a person to really get across the full depth of their being in just a few paragraphs of text and a profile picture. Fortunately, thanks to the power of digital technology, I no longer have to!";
  var aboutMeTextParagraph3 = "The panel opposite contains a series of lenses that can actually analyse a photo of a person and display visual representations of different aspects of their personality and inner life. ";
  var aboutMeTextParagraph4 = "Click and drag the circles across the picture to see readings of the psychic energy given off by the various multitudes I contain, such as the low red hum given off by my fear of mannequins or the faint static emanating from my head as I involuntarily remember a contextless scene from Disney's 1993 adventure film Homeward Bound.";
  var aboutMeTextParagraph5 = "Disclaimer: psychic energy readings should only be attempted by certified mind experts. All casual observers should merely use this tool for aesthetic purposes.";

  var principlesHeadline = "Principles of Odonian Web design"
  var principlesHierarchy = "Non-hierarchical - I got the idea for this project from Ursula le Guin’s science fiction novel ‘The Dispossessed’, about an anarchist utopia. Language on this imagined world has adapted to remove possessive pronouns and hierarchical words, as these concepts no longer exist. This got me thinking about ways that website design conventions (defined by the ‘men with long beards’) help reinforce our society’s inherent hierarchies, with some pieces of information given more value than others. I set out to create website design which attempts to put all sections on an equal playing field."
  var principlesHierarchyQuote = "“We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.” - Ursula K. le Guin"
  var principlesIndeterminacy = "Indeterminate - I was interested in create a website design that would have aspects changing every time it was visited. Due to time constraints this was limited to just setting certain attributes to take a value from a Math.random function, but I would be interested in taking this further – having more fixed designs but with randomised order for example, or setting chaotic algorithmic movement paths."
  var principlesIndeterminacyQuote = "“Most people who believe that I’m interested in chance don’t realize that I use it as a discipline. They think I use it – I don’t know – as a way of giving up making choices. But my choices consist in choosing what questions to ask… My intention is to let things be themselves.” - John Cage"
  var principlesBrutalist = "Brutalist - I wanted to make something that was plain in design while still being interesting, engaging with the viewer in a way that goes deeper than aesthetics."
  var principlesBrutalistQuote = "“In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design.” – www.brutalistwebsites.com"

  var overlay1 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_5_yes.jpg').size(1000, 1000)
  }).id('overlay1');
  var overlay2 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_14_yes.jpg').size(1000, 1000)
  }).id('overlay2');
  var overlay3 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_18_bassboost_yes.jpg').size(1000, 1000)
  }).id('overlay3');
  var overlay4 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_delay4_yes.jpg').size(1000, 1000)
  }).id('overlay4');
  var overlay5 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_fadein_yes.jpg').size(1000, 1000)
  }).id('overlay5');
  var overlay6 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_rumble_yes.jpg').size(1000, 1000)
  }).id('overlay6');
  var overlay7 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_spike_yes.jpg').size(1000, 1000)
  }).id('overlay7');
  var overlay8 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_spike2_yes.jpg').size(1000, 1000)
  }).id('overlay8');
  var overlay9 = draw.pattern(1000, 1000, function(add) {
    add.image('./images/glitch10_spike4_yes.jpg').size(1000, 1000)
  }).id('overlay9');



  var circle1 = draw.circle(0).fill('url(#feedbackBackdrop)').addClass('circle1').id('circle1');
  var circle2 = draw.circle(0).fill('url(#portfolioBackdrop)').addClass('circle2').id('circle2');
  var circle3 = draw.circle(0).fill('url(#aboutMeBackdrop)').addClass('circle3').id('circle3');
  var circle4 = draw.circle(0).fill('url(#principlesBackdrop1)').addClass('circle4').id('circle4');

  var bubbleWrap = draw.foreignObject(1000,1000);

  var music = draw.text("Music").move(200, 200).addClass("runAway music");
  var link1 = draw.text("Bafula").move(200, 300).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link1");
  var link2 = draw.text("Victims Athletic").move(200, 400).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link2");
  var link3 = draw.text("Solo work").move(200, 500).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link3");

  var contributions = draw.text("Music contributor").move(200, 650).addClass("runAway contributions");
  var link4 = draw.text("Maija Sofia").move(200, 750).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link4");
  var link5 = draw.text("UEA Sonic Arts Series").move(200, 850).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link5");

  var writing = draw.text("Writing").move(700, 200).addClass("runAway writing");
  var link6 = draw.text("Music Reviews for One Four Seven").move(700, 300).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link6");
  var link7 = draw.text("Article series for White Paint").move(700, 400).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link7");

  var video = draw.text("Video").move(700, 550).addClass("runAway video");
  var link8 = draw.text("Twin Grips").move(700, 650).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link8");
  var link9 = draw.text("Bafula promo").move(700, 750).linkTo('https://www.youtube.com/watch?v=zYKPlGHt3Vk').addClass("runAway link9");

  link1.on('mouseenter', ()=>{
    link1.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });

  link2.on('mouseenter', ()=>{
    link2.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link3.on('mouseenter', ()=>{
    link3.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link4.on('mouseenter', ()=>{
    link4.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link5.on('mouseenter', ()=>{
    link5.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link6.on('mouseenter', ()=>{
    link6.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link7.on('mouseenter', ()=>{
    link7.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link8.on('mouseenter', ()=>{
    link8.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });
  link9.on('mouseenter', ()=>{
    link9.animate(1000, '<>', 0).move((Math.random() * 800) + 100, (Math.random() * 800) + 100)
  });

  var lens1 = draw.circle(0).draggable().fill('url(#overlay1)').center(((Math.random() * 200) + 400), ((Math.random() * 800) + 100));
  var lens2 = draw.circle(0).draggable().fill('url(#overlay2)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens3 = draw.circle(0).draggable().fill('url(#overlay3)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens4 = draw.circle(0).draggable().fill('url(#overlay4)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens5 = draw.circle(0).draggable().fill('url(#overlay5)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens6 = draw.circle(0).draggable().fill('url(#overlay6)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens7 = draw.circle(0).draggable().fill('url(#overlay7)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens8 = draw.circle(0).draggable().fill('url(#overlay8)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));
  var lens9 = draw.circle(0).draggable().fill('url(#overlay9)').center(Math.round((Math.random() * 800)), Math.round((Math.random() * 800)));

  var switchCircle = draw.circle().center(900,100).addClass('switchCircle');

  circle1.on('click',()=>{
    circle1.addClass('expand');
    circle2.addClass('shrink');
    circle3.addClass('shrink');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
    $('body').addClass('backgroundAlternate');
    setTimeout(() => {
    }, 1000);
  });

  circle2.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('expand');
    circle3.addClass('shrink');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
    $('body').addClass('backgroundAlternate');
    textBox.foreignObject(1000,1000).appendChild("h2", {id: 'portfolioHeadline', innerText: portfolioHeadline}).appendChild('p', {id: 'portfolioParagraph1', innerText: portfolioParagraph1}).appendChild('p', {id: 'portfolioParagraph2', innerText: portfolioParagraph2}).appendChild('p', {id: 'portfolioParagraph3', innerText: portfolioParagraph3});
    $('text').addClass('enlargeText');
  });

  circle3.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('shrink');
    circle3.addClass('expand');
    circle4.addClass('shrink');
    switchCircle.addClass('switchExpand');
    lens1.animate(0, '<>', 1).radius('150');
    lens2.animate(0, '<>', 1).radius('150');
    lens3.animate(0, '<>', 1).radius('150');
    lens4.animate(0, '<>', 1).radius('150');
    lens5.animate(0, '<>', 1).radius('150');
    lens6.animate(0, '<>', 1).radius('150');
    lens7.animate(0, '<>', 1).radius('150');
    lens8.animate(0, '<>', 1).radius('150');
    lens9.animate(0, '<>', 1).radius('150');
    $('body').addClass('backgroundAlternate');
    textBox.foreignObject(1000,1000).appendChild("h2", {id: 'aboutMeTextHeadline', innerText: aboutMeTextHeadline}).appendChild('p', {id: 'aboutMeTextParagraph1', innerText: aboutMeTextParagraph1}).appendChild('p', {id: 'aboutMeTextParagraph2', innerText: aboutMeTextParagraph2}).appendChild('p', {id: 'aboutMeTextParagraph3', innerText: aboutMeTextParagraph3}).appendChild('p', {id: 'aboutMeTextParagraph4', innerText: aboutMeTextParagraph4}).appendChild('p', {id: 'aboutMeTextParagraph5', innerText: aboutMeTextParagraph5});
  });

  circle4.on('click',()=>{
    circle1.addClass('shrink');
    circle2.addClass('shrink');
    circle3.addClass('shrink');
    circle4.addClass('expand');
    switchCircle.addClass('switchExpand');
    $('body').addClass('backgroundAlternate');
    textBox.foreignObject(1000,1000).addClass('principles-text').appendChild("h2", {innerText: principlesHeadline}).appendChild("p",{id: 'hierarchy', innerText: principlesHierarchy}).appendChild("p",{id: 'hierarchy-quote', innerText: principlesHierarchyQuote}).appendChild("p",{id: 'indeterminacy', innerText: principlesIndeterminacy}).appendChild("p",{id: 'indeterminacy-quote', innerText: principlesIndeterminacyQuote}).appendChild("p",{id: 'brutalist', innerText: principlesBrutalist}).appendChild("p",{id: 'brutalist-quote', innerText: principlesBrutalistQuote});
    $('#hierarchy').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop1)');
    });
    $('#hierarchy-quote').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop1)');
    });
    $('#indeterminacy').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop2)');
    });
    $('#indeterminacy-quote').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop2)');
    });
    $('#brutalist').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop3)');
    });
    $('#brutalist-quote').on('mouseenter', ()=>{
      circle4.fill('url(#principlesBackdrop3)');
    });
  });





  switchCircle.on('click', ()=>{
    circle1.removeClass('shrink').removeClass('expand');
    circle2.removeClass('shrink').removeClass('expand');
    circle3.removeClass('shrink').removeClass('expand');
    circle4.removeClass('shrink').removeClass('expand');
    switchCircle.removeClass('switchExpand');
    lens1.radius('0');
    lens2.radius('0');
    lens3.radius('0');
    lens4.radius('0');
    lens5.radius('0');
    lens6.radius('0');
    lens7.radius('0');
    lens8.radius('0');
    lens9.radius('0');
    $('body').removeClass('backgroundAlternate');
    $('text').removeClass("enlargeText");
    setTimeout(() => {
      textBox.clear();
    }, 1000);
    bubbleWrap.innerHTML = "";
  });


} else {
  alert('SVG not supported')
}
});

$( document ).ready( ()=>{

});
