import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I am making this site by following the Gatsby Tutorial</p>
      </Layout>
    </main>
  );
}

export const Head = () => <title>Home Page</title>
