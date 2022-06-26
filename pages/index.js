import { Navbar } from "components/Navbar";
import Head from "next/head";
import HomePage from "./homePage";
import Services from "./services";
import Work from "./work";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASEPART}/favicon.ico`}
        />
      </Head>
      <Navbar />
      <HomePage />
      <Services />
      <Work />
    </div>
  );
}
