import Home from "@/components/Home";
import Head from "next/head";


export default function Main() {
  return (
    <>
      <Head>
        <title>Billing Application</title>
        <meta name="description" content="Billing Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
