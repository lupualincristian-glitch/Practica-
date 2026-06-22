document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-img');
    const lightboxImg = document.getElementById('lightboxImg');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            const myModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
            myModal.show();
        });
    });
});