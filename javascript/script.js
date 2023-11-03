document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.nav-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

let currentPhoto = 1;

function movePhotos() {
    const currentPhotoElement = document.getElementById(`photo${currentPhoto}`);
    const nextPhoto = (currentPhoto % 4) + 1;

    const nextPhotoElement = document.getElementById(`photo${nextPhoto}`);
    nextPhotoElement.classList.add('hidden');

    setTimeout(() => {
        currentPhotoElement.classList.add('hidden');
        nextPhotoElement.classList.remove('hidden');

        currentPhoto = nextPhoto;
    }, 500);

    const currentTextElement = currentPhotoElement.querySelector('.content');
    const nextTextElement = nextPhotoElement.querySelector('.content');

    currentTextElement.style.opacity = 0;
    nextTextElement.style.opacity = 1;
}

setInterval(movePhotos, 3000);