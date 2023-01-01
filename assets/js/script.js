// Car colours

jQuery(document).ready(function ($) {
  $(".bg_copper").on({
      click: function () {
          $("#change-image").attr(
              "src",
              "https://media.istockphoto.com/id/1338726735/photo/abstract-cityscape.jpg?b=1&s=170667a&w=0&k=20&c=y69niDRjFSrtSdchRIAkhtEMAwWV0kKGuaFbvYRpwVE="
          );
      },
  });

  $(".bg_fiery-red").on({
      click: function () {
          $("#change-image").attr(
              "src",
              "https://media.istockphoto.com/id/1400925699/photo/senju-fall.jpg?b=1&s=170667a&w=0&k=20&c=j3i3iLMezlwIWiB7K4ztyIZV66NMlp6w0AbUgQR7X9c="
          );
      },
  });

  $(".bg_fiery-red-black").on({
      click: function () {
          $("#change-image").attr(
              "src",
              "https://media.istockphoto.com/id/1248619427/photo/retro-futuristic-city-flythrough-background-80s-sci-fi-landscape-in-space.jpg?b=1&s=170667a&w=0&k=20&c=hLmRgItKjP0h5IboMbZC-TSp63ThuncI9880Glb1m_Y="
          );
      },
  });

  $(".bg_white").on({
      click: function () {
          $("#change-image").attr(
              "src",
              "https://media.istockphoto.com/id/1363681781/photo/blue-night-starry-sky-with-glowing-stars-bright-glow-of-sky-stars-and-milky-way-galaxy-4k.jpg?b=1&s=170667a&w=0&k=20&c=ZJsVEXvrkyadmgNmheR_7XVXp2btNB35pF0p93BJlQM="
          );
      },
  });
});

$(document).ready(function () {
  $(".btn-color").click(function (ev) {
      $(".btn-color.active").removeClass("active");
      $(this).addClass("active");
  });
});
