$(function(){
  var centerShelfs,
      $body = $('body'),
      $row1Shelf = $('.shelf.row1'),
      $row2Shelf = $('.shelf.row2'),
      $row3Shelf = $('.shelf.row3');
      $row4Shelf = $('.shelf.row4');

  centerShelfs = function(){
    var topShelfPosition = $body.height()/2;

    $row1Shelf.css('top', topShelfPosition);
    $row2Shelf.css('top', topShelfPosition + 200);
    $row3Shelf.css('top', topShelfPosition + 400);
    $row4Shelf.css('top', topShelfPosition + 600);
  };

  moveToShelf = function(e){
    e.preventDefault();
    $body.attr('class', '');
    $body.addClass(e.target.id);
  };

  // bind events
  $(window).on('resize', centerShelfs);
  $('.nav a').on('click', moveToShelf);

  // move to start position
  centerShelfs();
  
  window.setTimeout(function(){
    $body.addClass('view-row2-shelf');
  }, 500);
});