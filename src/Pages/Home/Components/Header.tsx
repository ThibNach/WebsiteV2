import { Link } from "react-router-dom";

const Hero_Header = () => {
    return (
        <header className="py-5 mb-5 text-center bg-p">
            <h1 className="display-3 fw-bold">Thibaut Spreux</h1>
            <p className="lead">Game Developer</p>
            <Link to="/portfolio" className="btn btn-primary btn-lg mt-3">
                Explore My Work
            </Link>
        </header>
    )
};

export default Hero_Header;