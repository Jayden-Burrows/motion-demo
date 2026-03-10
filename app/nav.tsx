"use client"
import Link from "next/link";
const baseImgPath = process.env.NODE_ENV == 'development'
    ? ''    
    : '/motion-demo'; 

type NavProps = {
    link: string;
};

// Toggle Code From :
// https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9
import { useState } from 'react';

export default function Nav({ link }: NavProps) {
    const [isLight, setIsLight] = useState(true);
    const toggleDarkMode = () => {
        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        setIsLight(() => !isLight)
    };
    return(
        <div>
            <nav>
            <p><Link href={link}>Contact Po Ping</Link></p>
            <button
                className="toggleContainerOn"
                style={{
                    justifyContent: "flex-" + (isLight ? "start" : "end"),
                }}
                onClick={toggleDarkMode}> 
                <div className="toggleBall"/>
            </button>
            </nav>
        </div>
    );
}