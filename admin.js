document.addEventListener('DOMContentLoaded', () => {
    const activitiesContainer = document.getElementById('activities');
  
    const purchasedBooks = JSON.parse(localStorage.getItem('purchased')) || [];
  
    if (purchasedBooks.length === 0) {
      activitiesContainer.innerHTML = '<p>No purchases to display.</p>';
    } else {
      purchasedBooks.forEach(book => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.innerHTML = `
          <p><strong>User Email:</strong> ${book.userEmail}</p>
          <p><strong>Book:</strong> ${book.title}</p>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Price:</strong> ${book.price}</p>
          <hr>
        `;
        activitiesContainer.appendChild(activityItem);
      });
    }
  });

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    localStorage.setItem('userEmail', email); // Save the user's email
    window.location.href = 'index.html'; // Redirect to the homepage
  });