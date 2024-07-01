document.addEventListener("DOMContentLoaded", function() {
    const subMenus = document.querySelectorAll(".subMenu");
    const menuItems = document.querySelectorAll("#gnb > ul > li");

    menuItems.forEach(menuItem => {
        menuItem.addEventListener("mouseenter", function() {
            subMenus.forEach(subMenu => {
                if (subMenu !== menuItem.querySelector(".subMenu")) {
                    subMenu.style.display = "none";
                }
            });
            menuItem.querySelector(".subMenu").style.display = "block";
        });
    });
    subMenus.forEach(subMenu => {
        subMenu.addEventListener("mouseleave", function() {
            subMenu.style.display = "none";
        });
    });
});

