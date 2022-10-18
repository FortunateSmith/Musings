import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function About() {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>I'm just a manifestation of the universe looking back at itself</p>
      </Layout>
    </main>
  );
}

export const Head = () => <title>About Me</title>
