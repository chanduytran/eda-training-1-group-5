$(document).ready(function () {
    // setting slide
    currentSlide = "003";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("004");
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
    },500);

    var popnoteClicked = false;

    $('.first-text-div .popnote').click(function() {
        var hiddenDiv = $('#hiddenDiv-first');
        var popnote = $(this);
    
        if (!popnoteClicked) {
            hiddenDiv.show();
            popnote.find('h2').text('X'); // Đổi chữ 'i' thành 'x'
        } else {
            hiddenDiv.hide();
            popnote.find('h2').text('i'); // Đổi chữ 'x' thành 'i'
        }
    
        popnoteClicked = !popnoteClicked; // Đảo ngược trạng thái cho lần bấm tiếp theo
    });
    
    $('.second-text-div .popnote').click(function() {
        var hiddenDiv = $('#hiddenDiv-second');
        var popnote = $(this);
    
        if (!popnoteClicked) {
            hiddenDiv.show();
            popnote.find('h2').text('X'); // Đổi chữ 'i' thành 'x'
        } else {
            hiddenDiv.hide();
            popnote.find('h2').text('i'); // Đổi chữ 'x' thành 'i'
        }
    
        popnoteClicked = !popnoteClicked; // Đảo ngược trạng thái cho lần bấm tiếp theo
    });
});
