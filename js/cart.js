document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');

    cartItems.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove(); // Remove the item from the display

            // In a real application, you would also update the cart data in local storage or on the server.
            updateCartTotal(); // Recalculate the total
        }
    });

    cartItems.addEventListener('change', function(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'number') {
            if (event.target.value < 1) {
                event.target.value = 1; // Ensure quantity is at least 1
            }
            updateCartTotal(); // Recalculate the total whenever a quantity changes
        }
    });

    function updateCartTotal() {
        let subtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('input[type="number"]').value);
            subtotal += price * quantity;
        });

        const shipping = 5; // Static shipping cost

        const total = subtotal + shipping;

        document.querySelector('.order-summary p:first-child').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        document.querySelector('.order-summary .total').textContent = `Total: $${total.toFixed(2)}`;
    }

    // Initialize cart total
    updateCartTotal();
});
