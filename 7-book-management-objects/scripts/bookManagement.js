// Define an empty array to hold book objects
let books = [];

// Add a new book to the books array
function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber,
    };
    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

// Displays the books in the books array
function showBooks() {
  const booksDiv = books.map(
    (book, index) => `<h1>book number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>No. of pages: </strong>${book.pagesNumber}</p>
    <button onclick="editBook(${index})">Edit Book</button>
    <button onclick="deleteBook(${index})">Delete Book</button>`,
  );

  document.getElementById("books").innerHTML = booksDiv.join("");
}

// Edit a book's details
function editBook(index) {
  const book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;
  // Remove the old entry
  books.splice(index, 1);
  // Refresh the list
  showBooks();
}

// Clear input fields
function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}

// Delete a book from the books array
function deleteBook(index) {
  books.splice(index, 1);
  showBooks();
}
