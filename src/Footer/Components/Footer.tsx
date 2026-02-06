const Footer = () => {
    return (
        <footer className="py-4 mt-5 bg-light border-top">
            <div className="container text-center">
                <p className="text-muted small mb-1">© 2026 - Thibaut Spreux - Game Developer</p>
                <p className="text-muted" style={ { fontSize: '0.7rem' } }>
                    Proudly built with <span className="highlight">React</span> & <span
                    className="highlight">Bootstrap</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;