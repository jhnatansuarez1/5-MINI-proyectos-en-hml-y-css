const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
});
