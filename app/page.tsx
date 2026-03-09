import Image from "next/image";
import Link from "next/link";

const baseImgPath = process.env.NODE_ENV == 'development'
  ? ''
  : '/motion-demo';

import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <nav>
        <p>Po Ping</p>
        <p><Link href="/contact">Contact Po Ping</Link></p>
      </nav>
      <header>
        <h1 id="name-heading">Po Ping</h1>
        <img src={baseImgPath + "/headshot.png"} width="120" height="120"
          alt="This is a photo of Po Ping looking very professional" id="headshot" />
      </header>
      <p className="address">Jade Palace, Valley of Peace &#9900; </p>
      <p className="tagline"> Dragon Warrior, Savior of China, and Part-time Noodle Maker
      </p>
      <hr />

        <section id="education" className="body-section">
          <h2>Education</h2>
          <dl>
            <dt>Jade Palace, Master Shifu</dt>
            <dd>2008</dd>
          </dl>
        </section>

        <section id="honors" className="body-section">
          <h2>Honors and Awards</h2>
          <dl>
            <dt>Dragon Warrior</dt>
            <dd>2008-Present</dd>
          </dl>
        </section>

        <section id="skills" className="body-section">
          <h2>Skills</h2>
          <ul>
            <li><span className="bold">Kung Fu:</span> Wuxi Finger Hold, Thundering Wind Hammer</li>
            <li><span className="bold">Spirituality:</span> Inner Peace, Chi Punch, Portal Creation</li>
          </ul>
        </section>

        <section id="leadership" className="body-section">
          <h2>Leadership and Experience</h2>
          <dl>
            <dt><a href="https://athome.fandango.com/content/browse/details/Kung-Fu-Panda/197926?cmp=OrganicSearch~Vudu~GoogleWatch">Dragon Warrior, Leader of Furious Five </a></dt>
            <dd>June 2008 &mdash;Present</dd>
          </dl>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="three-col">
            <div className="card">
              <h3>Tai Lung</h3>
              <img src={baseImgPath + "/taiLung.png"} alt="Image Tai Lung from Kung Fu Panda" />
                <ul>
                  <li> Mastered the art of kung fu and became the Dragon Warrior</li>
                  <li>Defeated the infamous martial arts prodigy, Tai Lung</li>
                </ul>
            </div>
            <div className="card">
              <h3>Lord Shen</h3>
              <img src={baseImgPath + "/shen.png"} alt="Image of Shen from Kung Fu Panda 2" />
                <ul>
                  <li>Saved all of China from Lord Shen's army</li>
                  <li>Destroyed a fleet of ships by redirecting high speed projectiles</li>
                </ul>
            </div>
            <div className="card">
              <h3>Kai: The Collector</h3>
              <img src={baseImgPath + "/kai.png"} alt="Image of Kai from Kung Fu Panda 3" />
                <ul>
                  <li>Led the Furious Five to overcome an army led by General Kai</li>
                  <li>Restored the chi of all kung fu masters</li>
                </ul>
            </div>
          </div>
        </section>

        <footer>
          <p> &copy; <a id="footerContactLink" href="contact.html">Po Ping</a> </p>
        </footer>
    </div>
  );
}