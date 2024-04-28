function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          renderBooks(data);
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
}

function renderBooks(books) {
  // Implementation for rendering the list of book titles - Example below
  const bookList = document.getElementById('book-list'); 
  books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = book.name;
      bookList.appendChild(listItem);
  });
}

// Call fetchBooks when index.html is loaded
window.addEventListener('load', fetchBooks); 
