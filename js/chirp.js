function chirp(n) {
  // FIX ME
  let bird = "chirp ";

  if (n === 1) {
    return bird.substr(0, bird.length - 1);
  }

  return bird + chirp(n - 1);
}

$(document).ready(function() {
  $("#result").html(chirp(3));
});
