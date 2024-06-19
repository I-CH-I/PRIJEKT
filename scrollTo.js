
function scrollToElement(element) {
    const elementTop = element.offsetTop;

    window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function() {

    const scrollToPhotoLink = document.getElementById('scrollToPhoto');
    const scrollToWelcomeLink = document.getElementById('scrollToWelcome');

    const containerPhoto = document.getElementById('container_photo');
    const mainTextWelcome = document.getElementById('main_text_welcome');

    scrollToPhotoLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToElement(containerPhoto);
    });

    scrollToWelcomeLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToElement(mainTextWelcome);
    });
});
