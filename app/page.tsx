"use client"

import Link from "next/link";

import Contact from "./contact/page";
import Nav from "./nav";
import Header from "./header";
import Education from "./education";
import Honors from "./honors";
import Leadership from "./leadership";
import Skills from "./skills";
import Projects from "./projects";
import Footer from "./footer";

import { useEffect } from 'react';
// Toggle Code From :
// https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9
import { keepTheme } from './themes';

export default function Home() {
  useEffect(() => {
      keepTheme();
  })
  return (
    <div>
      <Nav link="/contact" />
      <Header about={true} />
      <Education /> 
      <Honors />
      <Skills />
      <Leadership />
      <Projects />
      <Footer link="/contact" />
    </div>
  );
}