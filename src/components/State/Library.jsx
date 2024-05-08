import React, { useState } from "react";
import styles from "./State.module.css";

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
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => returnBook(index)} className={styles.return}>
              Return
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => borrowBook("React Fundamentals")}
        className={styles.borrow}
      >
        Borrow React Fundamentals
      </button>
      <button
        onClick={() => borrowBook("Ethel the Aardvark goes Quantity Surveying")}
        className={styles.borrow}
      >
        Borrow Ethel the Aardvark goes Quantity Surveying
      </button>
      <button
        onClick={() => borrowBook("Alice in Wonderland")}
        className={styles.borrow}
      >
        Borrow Alice in Wonderland
      </button>
    </div>
  );
}

export default Library;
