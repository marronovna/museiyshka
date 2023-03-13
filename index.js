function myFunction() {
    document.documentElement.style.scrollBehavior = "smooth";
  }
  
  function slowScroll(id) {
    let offset = 0;
    $("html, body").animate({
      scrollTop: $(id).offset().top - offset,
    });
    return false;
  }
  