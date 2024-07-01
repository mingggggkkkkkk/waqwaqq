document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.querySelector(".x");
    
    closeButton.addEventListener("click", function() {
        document.getElementById("filterMain").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach(function(gridItem, index) {
        gridItem.addEventListener("click", function() {
            document.getElementById("filterMain").style.display = "block";
        });
    });
});