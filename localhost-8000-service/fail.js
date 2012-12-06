(function(window) {
  console.log('ready to throw in same-origin');
  throw new Error('oops!');
  return;
})(this);