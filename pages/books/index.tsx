/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
const Books = () => {
  const books = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Book: ${i}` }));
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Book index path</h1>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {books.map((book) => (
          <div sx={{ width: "33%", p: 2 }} key={book.id}>
            <Link key={book.id} href="/books/[id]" as={`/books/${book.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>{book.title}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
