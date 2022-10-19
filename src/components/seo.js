import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Seo({title}) {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`)

  return (
    // Display for browser tab
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}