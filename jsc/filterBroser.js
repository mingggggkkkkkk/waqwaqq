document.addEventListener("DOMContentLoaded", function() {
  var abcdList = document.querySelectorAll('.abcd');
  var gridItems = document.querySelectorAll('.gridContainer div');
  var xButtons = document.querySelectorAll('.x');

  gridItems.forEach(function(gridItem) {
    gridItem.addEventListener('click', function(event) {
      event.stopPropagation();
      abcdList.forEach(function(abcd) {
        abcd.style.display = 'block';
      });
    });
  });

  xButtons.forEach(function(xButton) {
    xButton.addEventListener('click', function() {
      var abcd = this.closest('.abcd');
      abcd.style.display = 'none';
    });
  });

  document.addEventListener('click', function(event) {
    abcdList.forEach(function(abcd) {
      var isClickInside = abcd.contains(event.target);
      if (!isClickInside) {
        abcd.style.display = 'none';
      }
    });
  });
});