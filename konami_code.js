const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  count = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
      if (code[count] === key) {
      count++;
        if (count === code.length - 1) {
          alert('You did it!');
          count = 0;
        };
      } else {
        count = 0;
      }
  })
}
