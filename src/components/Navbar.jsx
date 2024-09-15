import './components.css'
import '../App.css'
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
    const [menuopn, setmenuopn] = useState(false);

    const emojis = ['🫣', '👻', '🚀', '👋', '🌿', '🐹', '👾', '🔥'];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <><div className="navcontainer">
            <nav className="navbar">
                <p className='logotxt'><span className="logo">🍀</span> Animoji <span className="version">Beta</span></p>
                <p onClick={() => { setmenuopn(prev => !prev) }} className="burgermenu"> {menuopn ? (<IoClose />) : (< HiMenuAlt4 />)}</p>
                <div className="navlistcon">
                    <p className="navsearch navlist">Search Emojis <span>"{emojis[currentEmojiIndex]}"</span></p>
                    <Link className='navlist' to="/collections">Collections</Link>
                    <Link className='navlist' to="/documentation">Documentation</Link>
                    <a href="" className="navlist giticon"><FaGithub /></a>
                </div>
            </nav>
            {menuopn && (<menu className='dropdownmenu'>
                <p className="navsearch navlist">Search Emojis <span>"{emojis[currentEmojiIndex]}"</span></p>
                <Link className='navlist' to="/collections">Collections</Link>
                <Link className='navlist' to="/documentation">Documentation</Link>
                <a href="https://github.com/AnimojiCSS/Animoji" className="navlist giticon"><FaGithub /></a>
            </menu>)}
        </div>
        </>
    )
}