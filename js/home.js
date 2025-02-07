document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    initSlider('testimonialSlider'); // Initialize the slider

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            if (validateForm(newsletterForm)) {
                // In a real application, you'd send this data to a server
                alert('Thank you for subscribing!');
                newsletterForm.reset(); // Clear the form
            }
        });
    }
});
