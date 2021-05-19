/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Home = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is the apostolic church of Norway.
      </h1>
    </div>
  </div>
);
export default Home;
