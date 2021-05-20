import nc from "next-connect";
import books from "../../../src/data/data";

const getBook = (title) => books.find((b) => b.title === title);

const handler = nc()
  .get((req, res) => {
    const book = getBook(req.query.title);
    if (!book) {
      res.status(404);
      res.end();
      return;
    }
    res.json({ data: book });
  })
  .patch((req, res) => {
    const book = getBook(req.query.title);

    if (!book) {
      res.status(404);
      res.end();
      return;
    }

    const i = books.findIndex((b) => b.id === parseInt(req.query.id));
    const updated = { ...book, ...req.body };

    books[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const book = getBook(req.query.id);
    console.log(`Book to be deleted ${book}`);
    if (!book) {
      res.status(404);
      res.end();
      return;
    }
    const i = books.findIndex((b) => b.id === parseInt(req.query.id));
    books.splice(i, 1);
    res.json({ data: req.query.id });
  });

export default handler;
