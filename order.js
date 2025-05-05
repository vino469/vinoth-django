document.addEventListener('DOMContentLoaded', () => {
  const orderItemsContainer = document.getElementById('order-items');
  const purchasedBooks = JSON.parse(localStorage.getItem('purchased')) || [];

  if (purchasedBooks.length === 0) {
    orderItemsContainer.innerHTML = '<p>No items in your order.</p>';
  } else {
    purchasedBooks.forEach(book => {
      const orderItem = document.createElement('div');
      orderItem.classList.add('order-item');
      orderItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div>
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Price:</strong> ${book.price}</p>
        </div>
      `;
      orderItemsContainer.appendChild(orderItem);
    });
  }
});