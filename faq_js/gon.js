window.addEventListener('scroll', function() {
  const gnb = document.getElementById('gnb');
  const scrollPosition1 = window.scrollY;
  
  if (scrollPosition1 >= 100) {
    gnb.classList.add('blur'); 
  } else {
    gnb.classList.remove('blur'); 
  }
});