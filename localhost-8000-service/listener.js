(function() {
  window.onerror = function(message, uri, line) {
    console.log('same-origin listener');
    console.log(message);
    console.log(uri);
    console.log(line);
  };
})();