import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import './assets/styles/CursorLightning.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-lightning';
        document.body.appendChild(cursor);

        function moveCursor(e: MouseEvent) {
            cursor.style.left = e.clientX - 20 + 'px';
            cursor.style.top = e.clientY - 20 + 'px';
        }
        function showCursor() {
            cursor.classList.add('active');
        }
        function hideCursor() {
            cursor.classList.remove('active');
        }
        document.body.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', showCursor);
        document.body.addEventListener('mouseleave', hideCursor);
        return () => {
            document.body.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', showCursor);
            document.body.removeEventListener('mouseleave', hideCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;