document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const userEmail = localStorage.getItem('userEmail') || 'guest@example.com'; // Retrieve user's email

  const updateCart = () => {
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      document.getElementById('cart-actions').style.display = 'none'; // Hide the order button if the cart is empty
    } else {
      cartItemsContainer.innerHTML = ''; // Clear the container
      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div>
            <h3>${item.title}</h3>
            <p><strong>Author:</strong> ${item.author}</p>
            <p><strong>Price:</strong> ${item.price}</p>
          </div>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
      });

      // Add event listeners to all "Remove" buttons
      document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (event) => {
          const index = parseInt(event.target.getAttribute('data-index'));
          cartItems.splice(index, 1); // Remove the item from the cart
          localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
          updateCart(); // Refresh the cart
        });
      });
    }
  };

  updateCart();

  // Handle the "Order" button click
  const orderButton = document.getElementById('order-button');
  orderButton.addEventListener('click', () => {
    if (cartItems.length > 0) {
      // Save purchased books to local storage
      const purchasedBooks = JSON.parse(localStorage.getItem('purchased')) || [];
      purchasedBooks.push(...cartItems.map(book => ({ ...book, userEmail }))); // Add user email to each book
      localStorage.setItem('purchased', JSON.stringify(purchasedBooks));

      // Clear the cart
      localStorage.removeItem('cart');
      cartItems = [];
      updateCart();

      // Redirect to the order confirmation page
      window.location.href = 'order.html';
    }
  });
});