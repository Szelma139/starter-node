import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my very very app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className="container">

          <div className="row">
            <div className="three columns">
              <a className="button button-primary" href="#">
                Anchor button
              </a>
            </div>
            <div className="three columns">
              <a className="button button-primary" href="#">
                Anchor button
              </a>
            </div>
            <div className="three columns">
              <a className="button button-primary" href="#">
                Anchor button
              </a>
            </div>
            <div className="three columns">
              <a className="button button-primary" href="#">
                Anchor button
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
