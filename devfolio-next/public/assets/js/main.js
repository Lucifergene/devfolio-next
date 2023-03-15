(function ($) {
  "use strict";
  var bostami = {
    m: function (e) {
      bostami.d();
      bostami.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      bostami.preloader_load();
      bostami.preloader_svg();
      // bostami.mobileMenu();
      bostami.istopeActivation();
      bostami.preloader();
      bostami.slickActive();
    },

    // preloader  function
    preloader: function () {
      $(window).on("load", function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        )
          ? true
          : false;
        var preloader = $("#preloader");

        if (!isMobile) {
          setTimeout(function () {
            preloader.addClass("preloaded");
          }, 800);
          setTimeout(function () {
            preloader.remove();
          }, 2000);
        } else {
          preloader.remove();
        }
      });
    },

    preloader_load: function () {
      $(window).on("load", function () {
        var speed = 500;
        setTimeout(function () { }, speed);
      });
    },

    preloader_svg: function () {
      $(window).on("load", function () {
        jQuery("img.svg").each(function () {
          var jQueryimg = jQuery(this);
          var imgClass = jQueryimg.attr("class");
          var imgURL = jQueryimg.attr("src");

          jQuery.get(
            imgURL,
            function (data) {
              // Get the SVG tag, ignore the rest
              var jQuerysvg = jQuery(data).find("svg");

              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
              }

              // Remove any invalid XML tags as per http://validator.w3.org
              jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

              // Replace image with new SVG
              jQueryimg.replaceWith(jQuerysvg);
            },
            "xml"
          );
        });
      });
    },

    // moblie method toggle button function

    // mobileMenu: function () {
    //   $(window).on("load", function () {
    //     // menu toggle button
    //     const menuOpen = document.getElementById("menu-toggle-open-icon");
    //     const menuClose = document.getElementById("menu-toggle-close-icon");
    //     const navbar = document.getElementById("navbar");
    //     const menuToggleBtnTwo = document.getElementById("menu-toggle-two");
    //     const menuToggleBtn = document.getElementById("menu-toggle");

    //     menuToggleBtn?.addEventListener("click", () => {
    //       console.log("click");
    //       // toggle icons inside button
    //       navbar.classList.toggle("hidden");
    //       menuOpen.classList.toggle("hidden");
    //       menuClose.classList.toggle("hidden");
    //     });
    //     menuToggleBtnTwo?.addEventListener("click", () => {
    //       console.log("click");
    //       // toggle icons inside button
    //       navbar.classList.toggle("hidden");
    //       menuOpen.classList.toggle("hidden");
    //       menuClose.classList.toggle("hidden");
    //     });
    //   });
    // },

    // slick slider active function

    slickActive: function () {
      if ($(".slickOne").length !== 0) {
        $(".slickOne").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }
      if ($(".slickTwo").length !== 0) {
        $(".slickTwo").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: false,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }
    },

    istopeActivation: function () {
      // ----------------------------- isotop gallery

      $(window).on("load", function () {
        if ($("#isotop-gallery-wrapper").length) {
          var $grid = $("#isotop-gallery-wrapper").isotope({
            // options
            itemSelector: ".isotop-item",
            percentPosition: true,
            masonry: {
              // use element for option
              columnWidth: ".grid-sizer",
            },
          });

          // filter items on button click
          $(".isotop-menu-wrapper").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
          });

          // change is-checked class on buttons
          $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "li", function () {
              $buttonGroup.find(".is-checked").removeClass("is-checked");
              $(this).addClass("is-checked");
            });
          });
        }
      });
    },

    // slick slider active function
  };
  bostami.m();
})(jQuery, window);
