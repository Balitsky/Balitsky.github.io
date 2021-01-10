import React from 'react';
import './App.css';
import AudioStream from "./components/AudioStream";
import Background from "./components/Background";
import WelcomePage from "./components/WelcomePage";

function App() {
    return (
        <>
            <Background/>
            <WelcomePage>
                <AudioStream/>
            </WelcomePage>
        </>
    );
}

export default App;