import React, { useEffect, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500 );
    }, []);

    return (
        <div>
            {
            loading 

            ?

            <div class="app">
                <PulseLoader color="#1967B9" />
            </div>

            :

            <div>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
            }
        </div>
    )
}

export default App;