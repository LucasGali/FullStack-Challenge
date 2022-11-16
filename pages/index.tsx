import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Web3Address } from "../components/Web3Address";
import { Web3Button } from "../components/Web3Button";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>Web3 Next-Boilerplate</title>
        <meta name="description" content="Boilerplate for Web3 dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row justify-between p-4">
        <Link href="/about">
          <p className="text-lg font-light">About</p>
        </Link>
        <Web3Button />
      </nav>

      <main className="grow p-8 text-center">
        <h1 className="pb-8 text-4xl font-bold">Home Page</h1>
        <Web3Address />
      </main>

      <footer className="justify-end p-4">
        <p className="text-lg font-light">Footer</p>
      </footer>
    </div>
  );
};

export default Home;
