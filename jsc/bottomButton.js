document.getElementById("scrollTop").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});