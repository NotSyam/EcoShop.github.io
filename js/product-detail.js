document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('productImage');
    const addToCartButton = document.querySelector('.add-to-cart');
    const quantityInput = document.getElementById('quantity');

    // Example: Image Zoom (basic)
    productImage.addEventListener('mouseover', function() {
        productImage.style.transform = 'scale(1.1)';
        productImage.style.transition = 'transform 0.3s';
    });

    productImage.addEventListener('mouseout', function() {
        productImage.style.transform = 'scale(1)';
    });

    // Add to Cart functionality
    addToCartButton.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            // In a real application, you would add the product to the cart
            alert(`Added ${quantity} item(s) to cart!`);
        } else {
            alert('Please select a valid quantity.');
        }
    });
});
