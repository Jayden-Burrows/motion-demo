import Link from "next/link";
import Home from "../page";
import Nav from "../nav";
import Header from "../header";
import Form from "./form";
import Footer from "../footer";

export default function Contact() {
  return (
    <div>
        <Nav link="/" />
        <Header about={false} />
        <Form />
        <Footer id="footerContact" link="/" />
    </div>
  );
} 