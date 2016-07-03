(function(){

  $(".tile").on("click", function() {
    var pageToOpen = $(this).attr("data-page-name");
    $("." + pageToOpen).removeClass("hidden").addClass("da-page");
  })

  $(".round-button").on("click", function() {
    var pageToOpen = $(this).attr("data-page-name");
    $("." + pageToOpen).removeClass("hidden").addClass("da-page");

    return false;
  })



  //when a close button is clicked:
  //close the page
  //wait till the page is closed and fade dashboard back in
  $('.close-button').click(function(){
      $(this).parent().addClass("hidden").removeClass('da-page')
  });

})();
