import React from "react";
import Link from "next/link";
const Books = () => {
  const books = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Book: ${i}` }));
  return (
    <div>
      <h1>Book index path</h1>
      {books.map((book) => (
        <div>
          <Link key={book.id} href="/books/[id]" as={`/books/${book.id}`}>
            <a>{book.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
