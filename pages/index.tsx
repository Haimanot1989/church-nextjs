/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { getSortedPostsData } from "../lib/posts";
const IndexPage = ({ allPostsData }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <section sx={{}}>
        <h2 sx={{}}>Blog</h2>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            px: 3,
            py: 4,
          }}
        >
          {allPostsData.map(({ id, date, title }) => (
            <li
              sx={{
                mb: 4,
              }}
              key={id}
            >
              <span
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  ":hover,:focus": {
                    color: "primary",
                    textDecoration: "underline",
                  },
                }}
              >
                {title}
              </span>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);
export default IndexPage;

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
