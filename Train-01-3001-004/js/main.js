$(document).ready(function () {
    // setting slide
    currentSlide = "006";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("005");
        }
        if (swipedir == 'right') {
            window.goToSlide("007");
            disableSwipe = true;
        }
    });

    //chart
    document.addEventListener("DOMContentLoaded", function() {
        var bars = document.querySelectorAll(".bar");
        var maxHeight = 200; // Set maxHeight to 80
    
        bars.forEach(function(bar) {
            var value = parseFloat(bar.dataset.value);
            // Adjust height based on the value and maxHeight
            var height = (value / maxHeight) * 100; // This will be the percentage height of the bar
            bar.style.height = height + "%";
        });
    });
    
    
    


       // chart animation
    function animateChart() {
        var bars = document.querySelectorAll(".bar");
        bars.forEach(function(bar, index) {
            var value = parseFloat(bar.dataset.value);
            var maxHeight = 100;
            var height = (value / 100) * maxHeight;
            bar.style.height = 0; 
            setTimeout(function() {
                bar.style.height = height + "%";
            }, index * 200);
        });
    }

    // text and image animation
    function animateTextAndImage() {
        var elements = document.querySelectorAll(".main-title, .chart-legend, .title, .chart-title, .label, .label-y, .label-x");
        elements.forEach(function(element) {
            element.style.opacity = 0;
            setTimeout(function() {
                element.style.transition = "opacity 0.5s ease";
                element.style.opacity = 1;
            }, 500);
        });
    }

    setTimeout(function() {
        animateChart();
        animateTextAndImage();
    }, 500);


    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
    },500);
});
