$(document).ready(function () {
  /* ===== Affix Sidebar ===== */
  /* Ref: http://getbootstrap.com/javascript/#affix-examples */
  $('#doc-menu').affix({
    offset: {
      top: $('#header').outerHeight(true) + $('#doc-header').outerHeight(true) + 45,
      bottom: $('#footer').outerHeight(true) + $('#promo-block').outerHeight(true) + 75,
    },
  });

  /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
  $(window).on('load resize', function () {
    $(window).trigger('scroll');
  });

  /* Activate scrollspy menu */
  $('body').scrollspy({ target: '#doc-nav', offset: 50 });

  /* Smooth scrolling */
  $('a.scrollto').on('click', function (e) {
    // e.preventDefault();
    var href = this.href;
    var target = decodeURIComponent(href.substring(href.lastIndexOf('#')))
    if (target.length) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(target).offset().top,
        },
        750
      );
    }
  });

  /* ======= jQuery Responsive equal heights plugin ======= */
  /* Ref: https://github.com/liabru/jquery-match-height */

  $('#cards-wrapper .item-inner').matchHeight();
  $('#showcase .card').matchHeight();

  /* Bootstrap lightbox */
  /* Ref: http://ashleydw.github.io/lightbox/ */

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
});
