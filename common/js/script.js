// function preload(arrayOfImages) {
//   $(arrayOfImages).each(function () {
//     $("<img/>")[0].src = this;
//     // Alternatively you could use:
//     // (new Image()).src = this;
//   });
// }

// // Usage:

// preload([
//   "./common/images/slide1/splach.png",
//   "./common/images/background_page.png",
// ]);

var swiperH = new Swiper(".swiper-container-h", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination-h",
    clickable: true,
  },
});
var swiperV = new Swiper(".swiper-container-v", {
  direction: "vertical",
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination-v",
    clickable: true,
  },
});

swiperH.on("activeIndexChange", function () {
  if (this.activeIndex === 0) {
    console.log("IM ON SECOND SLIDE!");
    $(".mainSlide1_text1").show();
    $(".mainSlide1_text2").show();
  } else {
    $(".mainSlide1_text1").hide();
    $(".mainSlide1_text2").hide();
  }
  // if (this.activeIndex === 2) {
  //   console.log("IM ON third SLIDE!");
  //   // alert("IM ON SECOND SLIDE!");
  // }
  if (swiperH.activeIndex >= 1) {
    $(".background").fadeIn("slow");
  } else {
    $(".background").fadeOut("slow");
  }
  if (swiperH.activeIndex >= 2) {
    $("footer").fadeIn("slow");
  } else {
    $("footer").fadeOut("slow");
  }
});

$(".firstblock__home").on("touchstart click", function () {
  console.log("here ");
  swiperH.slideTo(1, 400);
  $(".shadow").remove();
  $(".exit_x").remove();
  $(".modal").remove();
  $("footer").css({ "z-index": "unset" });
  $(".firstblock__ref .circle").removeClass("firstblock__pi_active");
  $(".firstblock__pi .circle").removeClass("firstblock__pi_active");
});
$(".firstblock__pi").on("click", function () {
  $(".shadow").remove();
  $(".exit_x").remove();
  $(".modal").remove();
  $("footer").css({ "z-index": "2" });
  $(".firstblock__pi .circle").addClass("firstblock__pi_active");
  $(".swiper-container-h").prepend(`
     <div class="shadow">

    <div class="modal" style="width: 36%; height: 66%;">
      <div class="exit_x" style="right: -19.5%;"></div>
      <div style="display:flex; justify-content : center;margin-top: -2rem;">
        <img src="/common/images/ksa.png" style="width : 80%">

      </div>
    </div>
  </div>
    `);
  $(".exit_x").on("click", function () {
    //   console.log("heree clicked ");
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "unset" });
    $(".firstblock__pi .circle").removeClass("firstblock__pi_active");
  });
});
$(".firstblock__ref").on("click", function () {
  $(".shadow").remove();
  $(".exit_x").remove();
  $(".modal").remove();
  $("footer").css({ "z-index": "2" });
  $(".firstblock__ref .circle").addClass("firstblock__pi_active");
  $(".swiper-container-h").prepend(`
     <div class="shadow">

    <div class="modal" style="width: 80%;top:45%">
      <div class="exit_x" style="right: -8.5%;"></div>
      <div style="display:flex; justify-content : center; margin-top: -2rem;">
        <img src="/common/images/text.png" style="width : 100%">

      </div>
    </div>
  </div>
    `);
  $(".exit_x").on("click", function () {
    //   console.log("heree clicked ");
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "unset" });
    $(".firstblock__ref .circle").removeClass("firstblock__pi_active");
  });
});

// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByTagName("li");

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("activeClass");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace("activeClass", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += "activeClass";
//   });
// }
swiperV[0].on("activeIndexChange", function () {
  if (this.activeIndex === 1) {
    // btns[0].className = "activeClass";
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSLide4-initial").show();
    $(".mainSLide4-halfarrow1").show();
    $(".mainSLide4-intermed").show();
    $(".mainSLide4-halfarrow2").show();
    $(".mainSLide4-capsule").show();
    $(".mainSLide4-halfarrow3").show();
    $(".mainSLide4-final").show();
    $(".mainSLide4-encap").show();
    $(".mainSLide4-halfarrow4").show();
    $(".mainSLide4-ico").show();
    $(".mainSLide4-largeArrow").show();
  } else {
    // btns[0].className = "";

    $(".mainSLide4-initial").hide();
    $(".mainSLide4-halfarrow1").hide();
    $(".mainSLide4-intermed").hide();
    $(".mainSLide4-halfarrow2").hide();
    $(".mainSLide4-final").hide();
    $(".mainSLide4-capsule").hide();
    $(".mainSLide4-halfarrow4").hide();
    $(".mainSLide4-halfarrow3").hide();
    $(".mainSLide4-encap").hide();
    $(".mainSLide4-ico").hide();
    $(".mainSLide4-largeArrow").hide();
  }
});

window.addEventListener("load", () => {
  // console.log("here");
  $("#mainSLide5_Early, #mainSLide5_late, #mainSLide5_mid").on(
    "click tap",
    function () {
      // this.style.background = "#B42B80";
      if ($(".box").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
      // console.log(this.style);

      if ($("#mainSLide5_Early").hasClass("active")) {
        $(".img1").show();
      } else {
        $(".img1").hide();
      }
      if ($("#mainSLide5_mid").hasClass("active")) {
        $(".img2").show();
      } else {
        $(".img2").hide();
      }
      if ($("#mainSLide5_late").hasClass("active")) {
        $(".img3").show();
      } else {
        $(".img3").hide();
      }
    }
  );

  //   if ($("#mainSLide5_Early").hasClass("active")) {
  //   }
  //   if ($("#mainSLide5_Early").hasClass("active")) {
  //   }
});
swiperV[0].on("activeIndexChange", function () {
  if (this.activeIndex !== 2) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").hide();
    if ($(".box").removeClass("active")) {
      $(this).removeClass("active");
    }
  }
});
swiperH.on("activeIndexChange", function () {
  if (this.activeIndex === 3) {
    $("#Hannen").on("touchstart click", function () {
      $("#Mohamed").removeClass("activeButton");
      $("#Hannen").addClass("activeButton");
      $(".mainSLide6Hannen").fadeIn("slow");
      $(".mainSLide6Mohamed").fadeOut(200);
    });
    $("#Mohamed").on("touchstart click", function () {
      $("#Hannen").removeClass("activeButton");
      $("#Mohamed").addClass("activeButton");
      $(".mainSLide6Mohamed").fadeIn("slow");
      $(".mainSLide6Hannen").fadeOut(200);
    });
  }
});
swiperH.on("activeIndexChange", function () {
  if (this.activeIndex === 4) {
    $(".mainSLide7_pic1").show();
    $(".mainSLide7_pic2").show();
    $(".mainSLide7_pic3").show();
  } else {
    $(".mainSLide7_pic1").hide();
    $(".mainSLide7_pic2").hide();
    $(".mainSLide7_pic3").hide();
  }
});
swiperV[1].on("activeIndexChange", function () {
  if (this.activeIndex === 0) {
    $(".mainSLide7_pic1").show();
    $(".mainSLide7_pic2").show();
    $(".mainSLide7_pic3").show();
  } else {
    $(".mainSLide7_pic1").hide();
    $(".mainSLide7_pic2").hide();
    $(".mainSLide7_pic3").hide();
  }
});
swiperV[1].on("activeIndexChange", function () {
  if (this.activeIndex === 1) {
    $(".mainSlide8_courbe").show();
    $(".mainSlide8_numbers").show();
  } else {
    $(".mainSlide8_courbe").hide();
    $(".mainSlide8_numbers").hide();
  }
});
swiperV[1].on("activeIndexChange", function () {
  if (this.activeIndex === 2) {
    $(".mainSlide9_courbe").show();
    $(".mainSlide9_numbers").show();
  } else {
    $(".mainSlide9_courbe").hide();
    $(".mainSlide9_numbers").hide();
  }
});
swiperH.on("activeIndexChange", function () {
  if (this.activeIndex === 5) {
    $(".mainSlide10_courbe").show();
    // $(".mainSlide9_numbers").show();
  } else {
    $(".mainSlide10_courbe").hide();
    // $(".mainSlide9_numbers").hide();
  }
});
swiperH.on("activeIndexChange", function () {
  if (this.activeIndex === 6) {
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
    $("#Vascepa_saf").on("touchstart click", function () {
      $("#Vascepa_tol").removeClass("activeButtonVascepa");
      $("#Vascepa_saf").addClass("activeButtonVascepa");
      $("#vasc1_white").hide();
      $("#vasc1_blue").show();
      $("#vasc2_blue").hide();
      $("#vasc2_white").show();

      $(".mainSLide11_saf").fadeIn("slow");
      $(".mainSLide11_tol").fadeOut(200);
    });
    $("#Vascepa_tol").on("touchstart click", function () {
      $("#Vascepa_saf").removeClass("activeButtonVascepa");
      $("#Vascepa_tol").addClass("activeButtonVascepa");
      $("#vasc1_blue").hide();
      $("#vasc1_white").show();
      $("#vasc2_white").hide();
      $("#vasc2_blue").show();

      $(".mainSLide11_tol").fadeIn("slow");
      $(".mainSLide11_saf").fadeOut(200);
    });
  } else {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  }
});
swiperH.on("activeIndexChange", function () {
  if (swiperH.activeIndex == 2) {
    btns[0].classList += " activeClass";
  } else {
    btns[0].classList = "";
  }
  if (swiperH.activeIndex == 3) {
    btns[1].classList += " activeClass";
  } else {
    btns[1].classList = "";
  }
  if (swiperH.activeIndex == 4) {
    btns[2].classList += " activeClass";
  } else {
    btns[2].classList = "";
  }
  if (swiperH.activeIndex == 5) {
    btns[3].classList += " activeClass";
  } else {
    btns[3].classList = "";
  }
  if (swiperH.activeIndex == 6) {
    btns[4].classList += " activeClass";
  } else {
    btns[4].classList = "";
  }
  if (swiperH.activeIndex == 7) {
    btns[5].classList += " activeClass";
  } else {
    btns[5].classList = "";
  }
});

$(".Moa").on("touchstart click", function () {
  swiperH.slideTo(2, 400);
});
$("#MOA").on("touchstart click", function () {
  swiperH.slideTo(2, 400);
  swiperV[0].slideTo(0, 400);
});

$(".patient").on("touchstart click", function () {
  swiperH.slideTo(3, 400);
});
$("#PATIENT").on("touchstart click", function () {
  swiperH.slideTo(3, 400);
});
$(".Marine").on("touchstart click", function () {
  swiperH.slideTo(4, 400);
});
$("#MARINE").on("touchstart click", function () {
  swiperH.slideTo(4, 400);
});
$(".Anchor").on("touchstart click", function () {
  swiperH.slideTo(5, 400);
});
$("#ANCHOR").on("touchstart click", function () {
  swiperH.slideTo(5, 400);
});
$(".saftey").on("touchstart click", function () {
  swiperH.slideTo(6, 400);
});
$("#SAFTEY").on("touchstart click", function () {
  swiperH.slideTo(6, 400);
});

$(".summary").on("touchstart click", function () {
  swiperH.slideTo(7, 400);
});
$("#SUMMARY").on("touchstart click", function () {
  swiperH.slideTo(7, 400);
});
