import './App.css';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Ourcocktails from './components/Ourcocktails.tsx';
import FirstEntry from './components/FirstEntry.tsx';
import About from './components/About.tsx';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.tsx";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <BrowserRouter>
            <>
                <FirstEntry isVisible={isVisible} setIsVisible={setIsVisible} />
                <Header isVisible={isVisible} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home isVisible={isVisible} />
                                <Form isVisible={isVisible} />
                                <Ourcocktails isVisible={isVisible} />
                                <Footer isVisible={isVisible} />
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>

            </>
        </BrowserRouter>
    );
}

export default App;
