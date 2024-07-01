const filters = document.querySelectorAll('.filterWrap a');
const maxSelection = 3;

filters.forEach(filter => {
  filter.addEventListener('click', function(event) {
    event.preventDefault();
    
    const selectedFilters = document.querySelectorAll('.filterWrap a.selected').length;

    const isAlreadySelected = this.classList.contains('selected');

    if (selectedFilters >= maxSelection && !isAlreadySelected) {
      alert('최대 3개까지 선택할 수 있습니다.');
    } else {
      this.classList.toggle('selected');
    }
  });
});