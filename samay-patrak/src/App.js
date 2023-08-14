import React from 'react'
import Header from './components/Header';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className="App">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
            <MainContent darkMode={darkMode}  />
            <Footer darkMode={darkMode} />
        </div>
        )
}

export default App;
