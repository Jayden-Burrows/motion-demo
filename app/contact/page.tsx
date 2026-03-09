import Link from "next/link";
import Home from "../page";

export default function Contact() {
  return (
    <div>
        <nav>
            <p>Jayden Burrows</p>
            <p><Link href="/">About Jayden Burrows</Link></p>
        </nav>

        <header>
            <h1 id="name-heading">Jayden Burrows</h1>
        </header>
        <h2 id="contact-me">Contact Me:</h2>
        <p className="address">Bogart, GA 30622 &#9900; (706) 308-0997 &#9900;
            jmb00097@uga.edu </p>

        <section>
            <form className="one-col" method="POST" action="https://formsubmit.co/el/salada">
            <label htmlFor="Name">Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="name" type="text" id="Name" required />
            <label htmlFor="Email">Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="Email" name="email" id="Email" required/>
            <label htmlFor="Message">Message:</label>
            <textarea name="message" id="Message"></textarea>
            <button type='submit'>Send</button>
            </form>
        </section>
        <footer id="contact-footer">
            <p> &copy; <a id="footerContactLink" href="index.html">Jayden Burrows</a> <a id="linkedin" href="https://www.linkedin.com/in/jayden-burrows"><i
                className="fa-brands fa-linkedin"></i></a> </p>
        </footer>
    </div>
  );
} 