document.addEventListener("DOMContentLoaded", function(e) {
    
    var openChat = document.getElementById("openChat");
    var openChatWrap = document.querySelector(".openChatWrap");

    var openChatContents = document.querySelector("#openChatContents");
    var newButton = document.getElementById("new");
    var chating = document.querySelector("#chating");

    const eventItem = document.getElementById('event');
    const list = document.querySelector('.chatMoon');
    
    var settingButton = document.querySelector("#settingButton");
    var setting = document.querySelector("#setting");

    var homeCome = document.querySelector("#homeCome");

    var back = document.querySelector("#back");
    var chatingButton = document.querySelector("#chatingButton");
    var chatingButtonWrap = document.querySelector("#chatingButtonWrap");

    chating.style.display = "none";
    openChat.onclick = function(event) {
        event.preventDefault();
        if (openChatWrap.style.display == "block") {
            openChatWrap.style.display = "none";
        } else {
            openChatWrap.style.display = "block";
        }
    }

    newButton.onclick = function(e) {
        e.preventDefault();
        openChatContents.style.display = "none";
            chating.style.display = "block";
    }

    eventItem.addEventListener('click', function(event) {
        event.preventDefault();
        
        const listItems = list.querySelectorAll('li');
    
        listItems.forEach(li => {
            if (li !== eventItem) {
                li.style.display = 'none';
            }else {
                li.style.backgroundColor = "#FFE5EF";
            }
        });
        const dsaDiv = document.getElementById('dsa');
        dsaDiv.style.display = 'block';
    });
    
    settingButton.onclick = function(e) {
        e.preventDefault();
        openChatContents.style.display = "none";
        setting.style.display = "block";
    }

    homeCome.onclick = function(e) {
        e.preventDefault
        setting.style.display = "none";
        openChatContents.style.display = "block";
    }

    back.onclick = function(e) {
        e.preventDefault
        chating.style.display = "none";
        openChatContents.style.display = "block";
    }

    chatingButton.onclick = function(e) {
        e.preventDefault
        openChatContents.style.display = "none";
        chating.style.display = "block";
    }

    chatingButtonWrap.onclick = function(e) {
        e.preventDefault
        setting.style.display = "none";
        chating.style.display = "block";
    }
});