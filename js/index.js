var working = false;
$('.submit').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Adding to list...');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Successfully registered!');
    setTimeout(function() {
      $state.html('Submit');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});