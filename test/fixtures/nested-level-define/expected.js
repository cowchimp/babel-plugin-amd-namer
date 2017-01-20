'use strict';

//some comment
(function () {
  $.ajax(function () {
    define('public/nested-level-define/actual', ['a'], function (a) {
      console.log(a);
    });
  });
});