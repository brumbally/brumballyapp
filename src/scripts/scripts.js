function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
    this.each(function() {
        let image = $(this);

        // Viewport Dimensions
        let vpHeight = $(window).height()+250;
        let vpWidth = $(window).width()+250;

        // Image Position
        let xPos = getRandomInt(-250, vpWidth - image.width());
        let yPos = getRandomInt(-250, vpHeight - image.height());
        let zIndex = getRandomInt(0,13);

        // Animation Duration
        //if(animate) var dur = 500;
        //else var dur = 0;

        image.animate({left: xPos, top: yPos, 'z-index': zIndex}, 0);
    });
};

//Setup
$('img').randomOrder(false);
$('img').draggable({stack: "img"});

// Change after 5 Seconds
window.setInterval(function(){
    $('img').randomOrder(true);
}, 5000);

