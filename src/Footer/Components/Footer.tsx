const Footer = () => {
    return (
        <footer className="py-4 mt-5 bg-light border-top">
            <div className="container text-center">
                <p className="text-muted small mb-1">© 2026 - Thibaut Spreux - Software Developer</p>
                <p className="text-muted" style={ { fontSize: '0.7rem' } }>
                    Proudly built with <span className="highlight">React</span> & <span
                    className="highlight">Bootstrap</span>
                </p>
                <i className="fa-brands fa-github me-2"></i>
                <span>
                      <a
                                            href={ `https://github.com/ThibNach/WebsiteV2` }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none text-reset cv-link"
                      >
                                            View Source Code
                      </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;