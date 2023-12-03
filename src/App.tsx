import './App.css'
import Form from "./components/Form.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import Ourcocktails from "./components/Ourcocktails.tsx";
import FirstEntry from "./components/FirstEntry.tsx";
import {useState} from 'react';



function App() {
    const [isVisible, setIsVisible] = useState(false);


  return (
    <>
        <FirstEntry setIsVisible={setIsVisible}/>
        <Header isVisible={isVisible}/>
        <Home isVisible={isVisible}/>
        <Ourcocktails isVisible={isVisible}/>
        <Form isVisible={isVisible}/>

    </>
  )
}

export default App
