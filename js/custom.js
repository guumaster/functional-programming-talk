// Custom JS code can go here

Reveal.initialize({
  dependencies: [

// Interpret Markdown in <section> elements
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

  ]
});

// You can customize Reveal options:
Reveal.configure({
  controls: false,
  center: true,
  mouseWheel: false,
  transition: 'slide',
  slideNumber: 'c / t'

});

//// (an outdated version of) http://headjs.com/ is also loaded
//head.ready("lodash.min.js", function () {
//  // LoDash can be used from here
//});
//head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js");
