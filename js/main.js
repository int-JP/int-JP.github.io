// $(window).scroll(function(){
//   $("header").css("opacity", 1 - $(window).scrollTop() / 560);
// });

// get the video
var video = document.getElementById("myVideo");

// get the button
var btn = document.getElementById("myBtn");

// Pause and play video, and change the button text
function controlVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  // } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 2400);
    return false;
});


$(document).on('scroll', function(){
  var currPos = $(document).scrollTop();

  var fader = $('.fader');

  fader.each(function(){
    var offset = $(this).offset().top;

    if(currPos > offset) {
      $(this).css('opacity', 1 - (currPos - offset) / 300);
    }
  })
})


$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 700 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });

    // video controls
    $('#state').on('click', function () {
        var video = $('#hero-vid').get(0);
        var icons = $('#state > span');
        $('#overlay').toggleClass('fading');
        if (video.paused) {
            video.play();
            icons.removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            icons.removeClass('fa-pause').addClass('fa-play');
        }
    });
    // $('.fade').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    //
    // });
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });
    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveWidth: true,
      adaptiveHeight: true,
    });
});
