"use client"
import Link from "next/link";
const baseImgPath = process.env.NODE_ENV == 'development'
    ? ''    
    : '/motion-demo'; 

import { useState } from 'react';

export default function Nav() {
    const [isLight, setIsLight] = useState(true);
    const toggleDarkMode = () => {
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setIsLight(() => !isLight)
    };
    return(
        <div>
            <nav>
            <p> <a href="#"> Po Ping </a></p>
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