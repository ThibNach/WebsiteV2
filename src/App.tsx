import {
    BrowserRouter as Router,
    Routes,
    Route,
}                from 'react-router-dom';
import NavBar    from './NavBar/Components/NavBar';
import Home      from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import AboutMe   from "./Pages/AboutMe/AboutMe";
import Footer    from "./Footer/Components/Footer";

function App() {
    return (
        <Router>
            <NavBar/>
            <main>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/portfolio" element={ <Portfolio/> }/>
                    <Route path="/AboutMe" element={ <AboutMe/> }/>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App
