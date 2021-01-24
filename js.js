var count = 1;
window.onload = function(){
    var hw = document.getElementById('hw');
    var sound = new Audio("sound.mp3");
    hw.addEventListener('click', function(){
        sound.play();
        if (count == 1) {
            var imgTag = document.getElementById("photo");
            imgTag.setAttribute("src","popcat_2.jpeg");
            count = 2;
        } else if (count == 2) {
            var imgTag = document.getElementById("photo");
            imgTag.setAttribute("src","popcat_1.jpeg");
            count = 1;
        }
    })
}