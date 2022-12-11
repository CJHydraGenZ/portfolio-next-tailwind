import { Navbar } from "components/Navbar";
import Head from "next/head";
import HomePage from "./homePage";
import Services from "./services";
import Work from "./work";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "./footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cahya-dev</title>
        <meta name="description" content="I Gede Cahya Ari Wibawa" />
        <link
          rel="icon"
          href={`/favicon.ico`}
        />
      </Head>
      <Navbar />
      <HomePage />
      <Services />
      <Work />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
