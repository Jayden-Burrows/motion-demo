import Link from "next/link";
import Nav from "../components/nav";
import Header from "../components/header";
import Form from "./form";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
        <Nav about={false} link="/" />
        <Header about={false} />
        <Form />
        <Footer id="footerContact" link="/" />
    </div>
  );
} 