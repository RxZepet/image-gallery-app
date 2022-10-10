/*

    This is a simple programme that displays images in a slider.
    Clicking the next button  on the UI displays the next image.
    Clicking the previous button on the UI displays the previous image


 */


(function(){

    "use strict";

    let currentImage = 0;
    const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const previousBtn = document.getElementById('previous');

    // next image
    nextBtn.addEventListener('click', function(event){
        event.preventDefault(); 

        currentImage++;
        if(currentImage > myphotos.length - 1) {currentImage = 0};

        swapImage();
    });

    // previuse image

    previousBtn.addEventListener('click', function(event){
        event.preventDefault(); 

        currentImage--;
        if(currentImage < 0) {currentImage = myphotos.length - 1;}

        swapImage();
    }); 

    function swapImage(event){            

        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myphotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    };
})();