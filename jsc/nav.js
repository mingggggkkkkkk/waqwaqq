const gnb = document.getElementById('gnb');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition >= 820) {

    gnb.classList.add('blur'); 

  } else {

    gnb.classList.remove('blur'); 

  }
});
