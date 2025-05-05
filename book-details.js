// Sample books array (ensure this matches your main script.js file)
const books = [
  { id: 1, title: 'To kill a mockinabird', author: 'Harper Lee', price: '$10.99', genre: 'fiction', image: 'image/fic_1.jpg', description: 'A classic novel about justice and race.' },
  { id: 2, title: '1984', author: 'George Orwell', price: '$10.99', genre: 'fiction', image: 'image/fic_2.jpg', description: 'A dystopian novel about totalitarianism.' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', price: '$10.99', genre: 'fiction', image: 'image/fic_3.jpg', description: 'A romantic novel about manners and marriage.' },
  { id: 4, title: 'The Great Catsby', author: 'F.Scott Fitzgerald', price: '$10.99', genre: 'fiction', image: 'image/fic_4.jpg', description: 'A story of wealth and ambition in the Jazz Age.' },
  { id: 5, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquee', price: '$10.99', genre: 'fiction', image: 'image/fic_5.jpg', description: 'A multi-generational story of the Buendía family.' },
  { id: 6, title: 'Atomic Habits', author: 'James Clear', price: '$10.99', genre: 'self-help', image: 'image/self_1.jpeg', description: 'A guide to building good habits and breaking bad ones.' },
  { id: 7, title: 'The Power of Now', author: 'Eckhart Tolle', price: '$10.99', genre: 'self-help', image: 'image/self_2.jpeg', description: 'A spiritual guide to living in the present moment.' },
  { id: 8, title: 'How to Win Friends', author: 'Dale Carnegie', price: '$10.99', genre: 'self-help', image: 'image/self_3.jpeg', description: 'A classic book on interpersonal skills and influence.' },
  { id: 9, title: 'Think & Grow Rich', author: 'Napoleon Hill', price: '$10.99', genre: 'self-help', image: 'image/self_4.jpeg', description: 'A book on achieving success through mindset and principles.' },
  { id: 10, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', price: '$10.99', genre: 'self-help', image: 'image/self_5.jpeg', description: 'A framework for personal and professional effectiveness.' },
  { id: 11, title: 'The Innovators', author: 'Walter Isaacson', price: '$10.99', genre: 'tech books', image: 'image/tech_1.jpeg', description: 'A history of the digital revolution and its pioneers.' },
  { id: 12, title: 'The Surveillance Capitalism', author: 'Shoshana Zuboff', price: '$10.99', genre: 'tech books', image: 'image/tech_2.jpeg', description: 'An exploration of how data is used in the modern economy.' },
  { id: 13, title: 'CODE', author: 'Charles Petzold', price: '$10.99', genre: 'tech books', image: 'image/tech_3.jpeg', description: 'A detailed explanation of how computers work.' },
  { id: 14, title: 'The Second Machine Age', author: 'Erik Brynjolfsson and Andrew McAfee', price: '$10.99', genre: 'tech books', image: 'image/tech_4.jpeg', description: 'A book about the impact of technology on the economy.' },
  { id: 15, title: 'Hackers', author: 'Steven Levy', price: '$10.99', genre: 'tech books', image: 'image/tech_5.jpeg', description: 'A history of the computer revolution and its pioneers.' },
  { id: 16, title: 'DUNE', author: 'Frank Herbert', price: '$10.99', genre: 'sifi-books', image: 'image/sifi_1.jpg', description: 'A science fiction novel about politics, religion, and ecology.' },
  { id: 17, title: 'Neuromancer', author: 'William Gibson', price: '$10.99', genre: 'sifi-books', image: 'image/sifi_2.jpg', description: 'A cyberpunk novel that defined the genre.' },
  { id: 18, title: 'The Left of Darkness', author: 'Ursula K.Le Guin', price: '$10.99', genre: 'sifi-books', image: 'image/sifi_3.jpg', description: 'A science fiction novel exploring gender and society.' },
  { id: 19, title: 'Foundation', author: 'Isaac Asimov', price: '$10.99', genre: 'sifi-books', image: 'image/sifi_4.jpg', description: 'A science fiction series about the fall and rise of civilizations.' },
  { id: 20, title: 'Hyperion', author: 'Dan Simmons', price: '$10.99', genre: 'sifi-books', image: 'image/sifi_5.jpg', description: 'A science fiction novel about a pilgrimage to a mysterious planet.' }
];

// Get the book ID from the URL
const params = new URLSearchParams(window.location.search);
const bookId = parseInt(params.get('id'));

// Find the book by ID
const book = books.find(b => b.id === bookId);

// Display the book details
if (book) {
  document.getElementById('book-img').src = book.image;
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('book-author').textContent = book.author;
  document.getElementById('book-price').textContent = book.price;
  document.getElementById('book-description').textContent = book.description;
} else {
  document.querySelector('.book-detail-container').innerHTML = '<p>Book not found.</p>';
}