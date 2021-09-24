/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import useSWR from "swr";

const Books = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/book", fetcher);
  const books = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Book: ${i}` }));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
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
        {data["data"].map((book) => (
          <div sx={{ width: "33%", p: 2 }} key={book.linkId}>
            <Link
              key={book.linkId}
              href="/books/[id]"
              as={`/books/${book.title.replaceAll(" ", "_")}`}
            >
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
