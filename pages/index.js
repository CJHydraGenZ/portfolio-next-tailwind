import { Navbar } from "components/Navbar";
import Head from "next/head";
// import HomePage from "./homePage";
// import Services from "./services";
// import Work from "./work";
// import Clients from "./clients";
// import Contact from "./contact";
import Footer from "./footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HomePage = dynamic(() => import('./homePage'), {
  suspense: true,
})
const Services = dynamic(() => import('./services'), {
  suspense: true,
})
const Work = dynamic(() => import('./work'), {
  suspense: true,
})
const Clients = dynamic(() => import('./clients'), {
  suspense: true,
})
const Contact = dynamic(() => import('./contact'), {
  suspense: true,
})

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
      <Suspense fallback={`Loading...`}>
        <HomePage />
      </Suspense>
      <Services />
      <Suspense fallback={`Loading...`}>
        <Work />
      </Suspense>
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
