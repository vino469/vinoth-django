// ========== Cart System ==========
let cart = [];

// Update Cart Count
function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

// Add to Cart
function addToCart(book) {
  cart.push(book);
  updateCartCount();
  alert(`${book.title} added to cart!`);
}

// Show Cart Popup
function showCart() {
  const cartPopup = document.getElementById('cart-popup');
  const cartItems = document.getElementById('cart-items');

  cartItems.innerHTML = ""; // clear previous

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>No items in cart.</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${item.title}</strong><br>
        ${item.author}<br>
        <span style="color:#e91e63">${item.price}</span>
        <hr>
      `;
      cartItems.appendChild(li);
    });
  }

  cartPopup.style.display = cartPopup.style.display === "none" ? "block" : "none";
}

// Hook cart button
document.getElementById('cart-button').addEventListener('click', showCart);

// ========== Add to Cart Button Listeners ==========
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = button.closest('.book-card');
    const title = card.querySelector('h3').textContent;
    const author = card.querySelector('.author').textContent;
    const price = card.querySelector('.price').textContent;
    const book = { title, author, price };
    addToCart(book);
  });
});
