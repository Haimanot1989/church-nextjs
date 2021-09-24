import nc from "next-connect";
import books from "../../../src/data/data";

const handler = nc()
  .post((req, res) => {
    const book = {
      ...req.body,
      id: Date.now(),
    };

    books.push(book);
    res.json({ data: book });
  })
  .get((req, res) => {
    res.json({ data: books });
  });

export default handler;
