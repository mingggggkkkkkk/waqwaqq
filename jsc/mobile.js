$(document).ready(function(){
    $('#m_hd .hd_search_wrap #hd_search_context + .ph').click(function(){
        $(this).toggleClass('click');
        $('#m_hd .hd_search_wrap input').focus();
    });

    $('#m_hd .hd_mn').click(function(){
        $(this).toggleClass('active');
    });
    $('#m_my_position').click(function(){
        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log(pos);
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            alert("현재 위치는 : " + latitude + ", "+ longitude);
        });
    });

    $('#m_filter .filterWrap li').click(function(){
        $(this).hide();
    });

   $('#m_hd .hd_search_wrap form button').click(function(){
        if($('input[id="hd_search_context"]').val().length == 0){
            alert('내용을 입력해주세요');
        }
   });

   $('#m_filter .m_grid .gridItem').click(function(){
        $('#m_filter .abcd').show();
   });

   $('.x').click(function(){
        $('.abcd').hide();
   });


});
