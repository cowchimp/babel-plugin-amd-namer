//some comment
(function() {
  $.ajax(function() {
    define(['a'], function(a) {
      console.log(a);
    });
  });
});