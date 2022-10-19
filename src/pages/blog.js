import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
// console.log('query', query.data)
export const Head = () => <Seo title="Blog Posts" />;
