document.addEventListener('DOMContentLoaded', function() {
    var contactsButton = document.getElementById('contacts');
    var overlay = document.getElementById('overlay');
    var contactModal = document.getElementById('contact-modal');
    var closeButton = document.getElementById('close-button');

    contactsButton.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.style.display = 'block';
        contactModal.style.display = 'block';
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        contactModal.style.display = 'none';
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        contactModal.style.display = 'none';
    });
});