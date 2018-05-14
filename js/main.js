console.log('it works');

SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {
  var draw = SVG('drawing').size(1000,1000)
  var rect = draw.rect(300, 300)
} else {
  alert('SVG not supported')
}
})
