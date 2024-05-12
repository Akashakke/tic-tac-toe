import Image from "next/image";
import Head from "next/head";
import Board from "./components/Board";

export default function Home() {
  return (
    <div className="container mx-auto">
    <Head>
      <title className="text-2xl">Tic Tac Toe</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="text-4xl text-center my-8">Tic Tac Toe</h1>
      <Board />
    </main>

  </div>
  );
}
