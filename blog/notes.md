result of query on first blog post (1083539204)(1083539204)
***export const query = graphql`
query ($id: String) {
  mdx (id: {eq: $id}){
    frontmatter{
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
}
`;***

