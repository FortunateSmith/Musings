import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function About() {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>I'm just a manifestation of the universe looking back at itself</p>
      </Layout>
    </main>
  );
}

export const Head = () => <Seo title="About Me"/>
