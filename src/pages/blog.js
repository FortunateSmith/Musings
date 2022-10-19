import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog Posts">
 
        {data.allMdx.nodes.map((node) => {
          return <article key={node.name}>{node.name}
          <h2>{node.frontmatter.title}</h2>
          <h5>Posted: {node.frontmatter.date}</h5>
          <p>{node.excerpt}</p>
          </article>
        })}
   
    </Layout>
  );
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      excerpt
    }
  }
}`
export const Head = () => <Seo title="Blog Posts" />;
