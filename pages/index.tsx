import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const id = 2;
  return (
    <div>
      <button onClick={(e) => router.push("/")}>Home</button>
      <button onClick={(e) => router.push("/books/[id]", `/books/${id}`)}>
        Book2
      </button>
    </div>
  );
};

export default Home;
