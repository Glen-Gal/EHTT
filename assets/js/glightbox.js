/* Masonry */

var masonryFolio = function () {
  var containerBricks = $(".masonry");

  containerBricks.imagesLoaded(function () {
    containerBricks.masonry({
      itemSelector: ".masonry_block",
      resize: true,
    });
  });
};

/* glightbox
 */
var glightbox = GLightbox({
  loop: true,
  selector: ".glightbox",
  openEffect: "zoom",
  closeEffect: "fade",
  startAt: 0,
  closeOnOutsideClick: false,
  zoomable: true,
  height: "auto",
  width: "100vw",
  height: "100vh",
});

feather.replace();
