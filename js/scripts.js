//Smooth Scroll
//Nav
$(document).ready(function(){
  $(".nav > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Sub-Nav
$(document).ready(function(){
  $(".sub-nav > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//toAbout
$(document).ready(function(){
  $(".toAbout > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//toProjects
$(document).ready(function(){
  $(".toProjects").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//toTop
$(document).ready(function(){
  $(".toTop").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});





//Navigation HideOnScroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}





//BackToTop
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    document.getElementById("toTop").style.opacity = "1";
  } else {
    document.getElementById("toTop").style.opacity = "0";
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2450) {
    document.getElementById("toTop").style.color = "white";
  } else {
    document.getElementById("toTop").style.color = "black";
  }
});





//closeAll
function closeAll() {
  document.getElementById("bio").style.visibility = "hidden";
  document.getElementById("skills").style.visibility = "hidden";
  document.getElementById("cases").style.visibility = "hidden";
}

//openBio
function openBio() {
  closeAll();
  document.getElementById("bio").style.visibility = "visible";
}

//openSkills
function openSkills() {
  closeAll();
  document.getElementById("skills").style.visibility = "visible";
}

//openCases
function openCases() {
  closeAll();
  document.getElementById("cases").style.visibility = "visible";
}
