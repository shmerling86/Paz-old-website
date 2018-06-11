console.log("Hi");


(function() {     
    var i = 0;
    var pics = [ "img/paz_250x110059890678.jpg", "img/banner_atar.jpg", "img/250X110668568400.jpg" ];
    function toggle() {
        var el = document.getElementById('img-commercial');  // el doesn't change
        el.src = pics[i]; 
        // set the image
        i = (i + 1) % pics.length;  // update the counter

    }
    setInterval(toggle, 4500);
})();  
