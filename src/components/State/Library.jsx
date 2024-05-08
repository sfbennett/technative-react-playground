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
    <div className={styles.bookcontainer}>
      <h2>Borrowed Books Library</h2>
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
        onClick={() => borrowBook("Paul Takes the Form of a Mortal Girl")}
        className={styles.borrow}
      >
        Paul Takes the Form of a Mortal Girl
      </button>
      <button
        onClick={() => borrowBook("Stone Butch Blues")}
        className={styles.borrow}
      >
        Stone Butch Blues
      </button>
      <button
        onClick={() => borrowBook("In the Dream House")}
        className={styles.borrow}
      >
        In The Dream House
      </button>
      <button
        onClick={() => borrowBook("The Well of Loneliness")}
        className={styles.borrow}
      >
        The Well of Loneliness
      </button>
      <button onClick={() => borrowBook("Orlando")} className={styles.borrow}>
        Orlando
      </button>
    </div>
  );
}

export default Library;
