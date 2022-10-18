import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I am making this site by following the Gatsby Tutorial</p>
        <StaticImage alt="A pink Lotus Flower" src="../images/Lotus_Flower.jpeg"/>
      </Layout>
    </main>
  );
}

export const Head = () => <title>Home Page</title>
