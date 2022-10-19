import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

export default function BlogPost({data}) {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My Blog Posts Will Go *Here* (Eventually)</p>
    </Layout>
  );
}


export const query = graphql`
query ($id: String) {
  mdx (id: {eq: $id}){
    frontmatter{
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
}
`;
// console.log("frontmatter props")



export const Head = () => <Seo title="My Blog Posts"/>

