document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            if (validateForm(contactForm)) {
                // In a real application, you'd send this data to a server
                alert('Message sent successfully!');
                contactForm.reset(); // Clear the form
            }
        });
    }
});
