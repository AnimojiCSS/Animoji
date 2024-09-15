import './components.css'
import '../App.css'
import About from './About';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Intro() {
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

    const emojis = ['👌', '😮', '🍩', '🧠', '🍊', '👁️', '🐽', '🎈'];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="introcon">
                <h1 className='introtxt'>Get your emojis animated with Anim<span>{emojis[currentEmojiIndex]}</span>ji</h1>
                <h1 className='introtxt introtxtmob'>Get your emojis <br /> animated with <br /> Anim<span>{emojis[currentEmojiIndex]}</span>ji</h1>
                <Link to="/collections" className="explorebtn">Explore Collections &gt;&gt;</Link>
                <div className="emojiscon">
                    <p className="emojlist el1">🐮</p>
                    <p className="emojlist el2">🤡</p>
                    <p className="emojlist el3">🌿</p>
                    <p className="emojlist el4">🕸️</p>
                    <p className="emojlist el5">🎉</p>
                    <p className="emojlist el6">🍇</p>
                    <p className="emojlist el7">🦚</p>
                    <p className="emojlist el8">✨</p>
                    <p className="emojlist el9">🍺</p>
                    <p className="emojlist el10">🍕</p>
                    <p className="emojlist el11">💎</p>
                    <p className="emojlist el12">✈️</p>
                    <p className="emojlist el13">🦀</p>
                    <p className="elm1 emojilistmob">🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃</p>
                    <p className="elm2 emojilistmob">🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃</p>
                </div>
            </div>
            <About />
        </>
    )
}