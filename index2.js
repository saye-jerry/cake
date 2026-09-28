document.addEventListener('DOMContentLoaded', () => {

    // Select all the "Order Now" buttons on the products
    const orderButtons = document.querySelectorAll('.order-btn');
    const messageField = document.getElementById('message');
    const contactSection = document.getElementById('contact');

    // Add a click event to each button
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            // Navigate the DOM to find the cake name and price
            const card = event.currentTarget.closest('.card');
            const cakeName = card.querySelector('h3').innerText;
            const cakePrice = card.querySelector('.price').innerText;

            // Pre-fill the contact form text area with the order details
            messageField.value = `Hello! I would like to place an order for the ${cakeName} priced at ${cakePrice}.\n\nI need it for the date of: [Enter Date Here]\n\nPlease let me know how to proceed with payment.`;

            // Smoothly scroll the user down to the contact form
            contactSection.scrollIntoView({ behavior: 'smooth' });

            // Highlight the text area briefly to draw the user's attention
            messageField.style.borderColor = '#d81b60';
            setTimeout(() => {
                messageField.style.borderColor = '#ddd';
            }, 1500);
        });
    });
});