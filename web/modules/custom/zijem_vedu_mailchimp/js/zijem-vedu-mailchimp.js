(function($) {
  console.log('test');
  "use strict";
$('#newsletter-subscription').submit(function (event) {
  $('#newsletter_errors').html('');
  $('#newsletter_notice').html('');
  $.post('/subscribe', { email: $('#email').val()})
    .done(function(data) {
      console.log(data);
      if (data.errors) {
        data.errors.forEach(function (item) {
          $('#newsletter_errors').html(item);
        });
      }
      if (data.notices) {
        data.notices.forEach(function (item) {
          $('#newsletter_notice').html(item);
          $('#email').val('');
        });
      }
    });
  event.preventDefault();
});
})( jQuery );
