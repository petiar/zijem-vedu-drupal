(function($) {
  console.log('hey');
  $('#map').change(function () {
    $('#map4').attr('src', "themes/custom/zijem_vedu/img/images_numbers/ZVN_participation_" + $(this).val() + "_sk.png");
    $('#map5').attr('src', "themes/custom/zijem_vedu/img/images_numbers/ZVN_participation_world_" + $(this).val() + "_sk.png");
  })
})( jQuery );
