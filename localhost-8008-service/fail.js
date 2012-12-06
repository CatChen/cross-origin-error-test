(function(window) {
  console.log('ready to throw in different origin');
  throw new Error('oops!');
  return;
})(this);