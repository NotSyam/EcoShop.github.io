document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    const sameAsBillingCheckbox = document.getElementById('sameAsBilling');

    // Pre-fill shipping info if "Same as Billing" is checked
    sameAsBillingCheckbox.addEventListener('change', function() {
        const billingName = checkoutForm.billingName.value;
        const billingAddress = checkoutForm.billingAddress.value;
        const billingCity = checkoutForm.billingCity.value;
        const billingState = checkoutForm.billingState.value;
        const billingZip = checkoutForm.billingZip.value;

        checkoutForm.shippingName.value = billingName;
        checkoutForm.shippingAddress.value = billingAddress;
        checkoutForm.shippingCity.value = billingCity;
        checkoutForm.shippingState.value = billingState;
        checkoutForm.shippingZip.value = billingZip;
    });

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm(checkoutForm)) {
            // In a real application, you would process the order
            alert('Order placed successfully!');
            checkoutForm.reset(); // Clear the form
        }
    });
});
