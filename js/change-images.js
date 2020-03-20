var SITEURL = document.location.origin + "/";

$(document).ready(function() {
  windowSize = document.documentElement.clientWidth;
  if (windowSize <= 1024) {
    function resizeProcessBlocks() {
      var $el = $(".w-process");
      var elWidth = $el.outerWidth();
      $el.css("height", elWidth);
    }

    resizeProcessBlocks();

    $(window).resize(function() { 
      $.ajax({
        url: SITEURL,
        method: "POST",
        data: {},
        success: function(data) {
          resizeProcessBlocks();
        }
      });
    });

    for (i = 1; i <= 4; i++) {
      $("#work-process-" + i).attr(
        "src",
        "images/tablet/our-working-process-" + i + ".png"
      );
    }

    for (i = 1; i <= 4; i++) {
      $("#our-works-block img:nth-child(" + (i + 1) + ")").attr(
        "src",
        "images/tablet/our-works-" + i + ".png"
      );
    }

    $(".clients-img img:nth-child(1)").attr(
      "src",
      "images/tablet/microsoft.png"
    );
    $(".clients-img img:nth-child(2)").attr("src", "images/tablet/samsung.png");
    $(".clients-img img:nth-child(3)").attr("src", "images/tablet/ibm.png");
    $(".clients-img img:nth-child(4)").attr("src", "images/tablet/google.png");
  }

  if (windowSize <= 767) {
    for (i = 1; i <= 4; i++) {
      $("#work-process-" + i).attr(
        "src",
        "images/mobile/work-process-" + i + ".png"
      );

      $("#our-works-block img:nth-child(" + (i + 1) + ")").attr(
        "src",
        "images/mobile/our-work-" + i + ".png"
      );
    }

    $(".clients-img img:nth-child(1)").attr(
      "src",
      "images/mobile/microsoft.png"
    );
    $(".clients-img img:nth-child(2)").attr("src", "images/mobile/samsung.png");
    $(".clients-img img:nth-child(3)").attr("src", "images/mobile/ibm.png");
    $(".clients-img img:nth-child(4)").attr("src", "images/mobile/google.png");

    // slick slider
    $('#reviews .container').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: true,
    });

  }
});
