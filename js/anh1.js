let slider = document.querySelectorAll('.banner'),
    arrowL = document.querySelector('#arrow-left'),
    arrowR = document.querySelector('#arrow-right'),
    current = 0;

    //Clear all images
    function reset(){
        for(let i = 0; i<slider.length;i++){
            slider[i].style.display = 'none';
        }
    }

    function startSlide(){
        reset();
        slider[0].style.display = 'block';
    }

    // //Show pre
     function slideLeft(){
         reset();
         slider[current -1].style.display='block';
         current--;
     }
     
    // //Show next
    // function slideRight(){
    //     reset();
    //     slider[current +1].style.display='block';
    //     current++;
    // }
    arrowL.addEventListener('click', function(){
         if(current==0){
             current = slider.length;
         }
         slideLeft();
     })
    // arrowR.addEventListener('click', function(){
    //     if(current== slider.length -1 ){
    //         current = -1;
    //     }
    //     slideRight();
    // })
    startSlide();