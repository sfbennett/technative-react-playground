import React, { useState } from "react";

function Library() {
  // Using useState hook to manage borrowedBooks array
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to borrow a book
  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]); // Adding a book to borrowedBooks array
  };

  // Function to return a book
  const returnBook = (index) => {
    const updatedBooks = [...borrowedBooks];
    updatedBooks.splice(index, 1); // Removing the book at the specified index
    setBorrowedBooks(updatedBooks);
  };

  return (
    <div>
      <h2>My Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => returnBook(index)}>Return</button>
          </li>
        ))}
      </ul>
      <button onClick={() => borrowBook("React Fundamentals")}>
        Borrow React Fundamentals
      </button>
      <button
        onClick={() => borrowBook("Ethel the Aardvark goes Quantity Surveying")}
      >
        Borrow Ethel the Aardvark goes Quantity Surveying
      </button>
      <button onClick={() => borrowBook("Alice in Wonderland")}>
        Borrow Alice in Wonderland
      </button>
    </div>
  );
}

export default Library;
