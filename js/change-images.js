$(document).ready(function() {
  windowSize = document.documentElement.clientWidth;

  if (windowSize <= 1024) {
    $("#work-process-1").attr("src", "images/tablet/our-working-process-1.png");
    $("#work-process-2").attr("src", "images/tablet/our-working-process-2.png");
    $("#work-process-3").attr("src", "images/tablet/our-working-process-3.png");
    $("#work-process-4").attr("src", "images/tablet/our-working-process-4.png");

    $("#our-works-block img:nth-child(2)").attr(
      "src",
      "images/tablet/our-works-1.png"
    );
    $("#our-works-block img:nth-child(3)").attr(
      "src",
      "images/tablet/our-works-2.png"
    );
    $("#our-works-block img:nth-child(4)").attr(
      "src",
      "images/tablet/our-works-3.png"
    );
    $("#our-works-block img:nth-child(5)").attr(
      "src",
      "images/tablet/our-works-4.png"
    );

     $(".clients-img img:nth-child(1)").attr("src", "images/tablet/microsoft.png");
    $(".clients-img img:nth-child(2)").attr("src", "images/tablet/samsung.png");
    $(".clients-img img:nth-child(3)").attr("src", "images/tablet/ibm.png");
    $(".clients-img img:nth-child(4)").attr("src", "images/tablet/google.png");
  }

  if (windowSize <= 320) {
    $("img").attr("src", "mobileFile.png");
  }
});
