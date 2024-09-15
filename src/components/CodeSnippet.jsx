import './Components.css';
import { IoCopy } from "react-icons/io5"; import { SiTicktick } from "react-icons/si";

import { useState, useEffect } from 'react';

export default function Codeblock(props) {
    const [copied, setCopied] = useState(false);

    const copycode = () => {
        const codeText = document.querySelector('.codetxt').textContent;
        navigator.clipboard.writeText(codeText);
        setCopied(true);
    };
    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    return (
        <>
            <div className="codecon">
                <div className="codetop">
                    <div className="codecirclecon">
                        <span style={{ backgroundColor: '#ff7979' }} className="circle"></span>
                        <span style={{ backgroundColor: '#fafa73' }} className="circle"></span>
                        <span style={{ backgroundColor: '#5af586' }} className="circle"></span>
                    </div>
                    {!copied ? (
                        <p onClick={copycode} style={{ color: '#458cd4' }} className="cpytxt"><IoCopy /> Copy</p>
                    ) : (
                        <p style={{ color: '#5af586' }} className="cpytxt"><SiTicktick /> Copied</p>
                    )}
                </div>
                <div className="codein">
                    <span className="codetxt code">{props.code}</span>
                </div>
            </div>
        </>
    );
}
