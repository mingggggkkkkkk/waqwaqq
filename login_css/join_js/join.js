
$(document).ready(function() {
    $("#agree").click(function() {
        if($("#agree").is(":checked")) {
            $(".checkbox").prop("checked", true);
            $("#btn").addClass("on");
        }else { 
            $(".checkbox").prop("checked", false);
            $("#btn").removeClass("on");
        };
    });

});


