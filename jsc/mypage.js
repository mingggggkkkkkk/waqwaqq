document.addEventListener("DOMContentLoaded", function(e) {
    var modal = document.getElementById("userInfo");
    var myPage = document.getElementById("myPage");
    var closeButton = document.getElementById("userCloseBtn");

    myPage.onclick = function(event) {
        event.preventDefault();
        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    }

    closeButton.onclick = function(e) {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});