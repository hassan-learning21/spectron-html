// alert("main.js loaded");

//Loading header through jquery, this loads the whole header.html or element with #header id to the div with #dynamic-header id in any other html file.
// $(function(){
//     $("#dynamic-header").load("template/header.html #header");
//   });

function btnfun() {
    alert("Fuck You!");
  }

  function MobileMenu() {
    var x = document.getElementById("hdr-menu");
    if (x.className === "head-menu") {
      x.className += " responsive";
    } else {
      x.className = "head-menu";
    }

    var x = document.getElementById("m-nav-btn");
    if (x.className === "m-nav-btn") {
      x.className += " draw";
    } else {
      x.className = "m-nav-btn";
    }

    var x = document.getElementById("hamburger");
    if (x.className === "hamburger") {
      x.className += " hamburger-hide";
    } else {
      x.className = "hamburger";
    }

    var x = document.getElementById("menu-close");
    if (x.className === "menu-close") {
      x.className += " menu-close-show";
    } else {
      x.className = "menu-close";
    }

    var x = document.getElementById("menu-logo");
    if (x.className === "menu-logo") {
      x.className += " top";
    } else {
      x.className = "menu-logo";
    }

  }

  // Jquery code to add active class on menu
  $(document).ready(function() {
    $("[href]").each(function() {
      if (this.href == window.location.href) {
        $(this).addClass("active");
      }
    });
  });

  // // Jquery code to add class on click function
  // $(document).ready(function(){
  //   $('.head-menu ul li').click(function(){
  //     $('.head-menu li').removeClass("active");
  //     $(this).addClass("active");
  // });
  // });


