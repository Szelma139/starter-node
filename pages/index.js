import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Card } from "@components/Card";


export default function Home() {
  return (
    <div>
<div className="cards">
  <div className="card">
    <Card/>
  </div>
  <div className="card">
    <Card/>
  </div>
  <div className="card">
    <Card/>
  </div>
  <div className="card">
    <Card/>
  </div>
  </div>

      <Footer />
    </div>
  );
}
