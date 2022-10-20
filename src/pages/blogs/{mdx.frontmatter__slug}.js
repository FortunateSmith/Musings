import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navLinkText } from "../../components/layout.module.css";

export default function BlogPost({ data, children }) {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <h5>
        Photo Credit: {" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          className={navLinkText}
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </h5>

      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
// console.log("frontmatter props")

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
