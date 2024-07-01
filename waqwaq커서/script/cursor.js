    $(document).ready(function(){
        const cursorPointer = document.querySelector('.pointer');
        let moveCount = 0;
    
        const moveCursor = (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        cursorPointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        moveCount++;
       
        
        switch(moveCount){
            case 10:
                cursorPointer.style.background = `url('./image/ch_2.png')`;
                break;
            case 20:
                cursorPointer.style.background = `url('./image/ch_3.png')`;
                break;
            case 30:
                cursorPointer.style.background = `url('./image/ch_4.png')`;
                break;
            case 40:
                cursorPointer.style.background = `url('./image/ch_5.png')`;
                break;
            case 50:
                cursorPointer.style.background = `url('./image/ch_4.png')`;
                break;
            case 60:
                cursorPointer.style.background = `url('./image/ch_3.png')`;
                break;
            case 70:
                cursorPointer.style.background = `url('./image/ch_2.png')`;
                moveCount=0;
                break;  
        }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown',(e)=>{
          $('.pointer').addClass("click");
        });

        window.addEventListener('mouseup',(e)=>{
            $('.pointer').removeClass("click");
          });

        $("a, input, button, label").hover(function(){
            $('.pointer').toggleClass("click");
        });

        //   eventBtn.forEach(function(event){
        //     event.addEventListener('mouseover',function(){
        //         $('.pointer').addClass("click");
        //     });
        //     event.addEventListener('mouseover',function(){
        //         $('.pointer').removeClass("click");
        //     });
        //   });
    });