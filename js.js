document.addEventListener("DOMContentLoaded", () => {
    const instaLink = document.getElementById("runawayInstagram");
    const moveRadius = 100; // Ограничение перемещения в 50px

    instaLink.addEventListener("mouseover", () => {
        const currentX = instaLink.offsetLeft;
        const currentY = instaLink.offsetTop;
        const deltaX = (Math.random() * moveRadius * 2) - moveRadius;
        const deltaY = (Math.random() * moveRadius * 2) - moveRadius;
        
        instaLink.style.position = "relative";
        instaLink.style.left = `${deltaX}px`;
        instaLink.style.top = `${deltaY}px`;
    });
});

/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
let isClicked = false; 
button.addEventListener('click', function() {
    console.log (isClicked);
    if (!isClicked) {
	    alert('Таки запрещенка в РФ \nНо если ты смел - нажимай еще раз');
        isClicked = true;
        console.log(isClicked);
    } else {
        window.location.href = 'https://img-webcalypt.ru/storage/memes/31478/20251/R8kH42yw5hQfODpI3HkLhrkpVez7U20BLy2EahkjjnR4vei4pU6W4MPmgETLwYt89YsKFyRGURnxSr2xtHcN87FbSbccR4hn9sdT7MBNTOnviKjjRGMG8KtgbRyuLrOD.jpeg';
   }
})

