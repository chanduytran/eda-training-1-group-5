$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    // Create a style element and append it to the head
    var style = document.createElement('style');
    style.type = 'text/css';

    // Define the keyframes and append it to the style element
    var keyframes = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    style.appendChild(document.createTextNode(keyframes));

    // Append the style element to the head
    document.head.appendChild(style);

    // Animation for an element with class 'line'
    setTimeout(() => { 
        $(".line").addClass('show');
    }, 500);
});
