(function (jtd, undefined) {
  jtd.onReady(function () {
    $('body').addClass('is-ready');
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
  });
})((window.jtd = window.jtd || {}));
