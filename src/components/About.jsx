import './Components.css'
import { Link } from 'react-router-dom';
import CodeS from './CodeSnippet';
import { FaGithub } from "react-icons/fa";

import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoAngular } from "react-icons/io5";
import { RiVuejsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiGatsbyLine } from "react-icons/ri";
import { RiSvelteLine } from "react-icons/ri";


export default function About() {
    const embedcode = ['<link rel="icon" type="image/svg+xml" href="/vite.svg" />']
    const CSSimport = ["@import url('path / to / your / file.css')"]
    return (
        <>
            <div className="abtextra"></div>
            <div className="aboutcon">
                <p className="abttopic">Bring your emojis to life with over 50+ open-sourced animated emoji Components!</p>
                <div className="abtinscon">
                    <p className="abtinfo">Embed code in the <span style={{ color: 'blue' }}> &lt;head&gt;</span> of your html.</p>
                    <CodeS code={embedcode} />
                </div>
                <div className="abtinscon">
                    <p className="abtinfo"><span style={{ color: 'blue' }}>@import</span> through your CSS file.</p>
                    <CodeS code={CSSimport} />
                </div>
                <p className="abttopic">Supported by</p>
                <div className="supportcon">
                    <AiOutlineHtml5 />
                    <IoLogoReact /><br />
                    <IoLogoAngular />
                    <RiVuejsFill />
                    <RiNextjsFill />
                    <RiGatsbyLine />
                    <RiSvelteLine />
                </div>
                <footer>
                    <b>Animoji</b>
                    <Link to="/collections">Collections</Link>
                    <Link to="/documentation">Documentation</Link>
                    <a href="https://github.com/AnimojiCSS/Animoji" className="navlist giticon"><FaGithub /></a>
                </footer>
            </div>
        </>
    )
}