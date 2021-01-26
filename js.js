let count = false;

const imageWrapper = document.getElementById('hw');
const image = document.getElementById("photo");
const sound = new Audio("./sound.mp3");

imageWrapper.addEventListener('click', () => {
    sound.play();
    image.setAttribute("src", count ? "./popcat_1.jpeg" : "./popcat_2.jpeg");
    count = !count
})
