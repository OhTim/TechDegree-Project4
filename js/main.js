lightbox.option({
  wrapAround: true,
  resizeDuration: 100,
  showImageNumberLabel: false,
  maxWidth: 800,
  disableScrolling: true
});

$("input[type='search']").on("keyup", function() {
    var search = this.value.toUpperCase();

    $("#gallery li").each(function(i) {
      var caption = $(this).children().attr("data-title").toUpperCase();

      if (caption.indexOf(search) > -1) {
          $(this).css('display', 'initial');
      } else {
          $(this).css('display', 'none');
      }
    });
});
