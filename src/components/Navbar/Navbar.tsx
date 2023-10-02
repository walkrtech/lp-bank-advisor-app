import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg position-fixed w-100 z-1 pt-3`} style={{ backgroundColor: scrolling ? '#17444f' : 'transparent' }}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <a className="navbar-brand" href="#">
                        <img src="https://advisor-walkr-bucket.s3.amazonaws.com/WalkrLogoLP.svg" alt="Logo" className="img-fluid" />
                    </a>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ff-semiBold text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-semiBold text-white" href="#">WalkrBank</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-semiBold text-white" href="#">WalkrApp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-semiBold text-white" href="#">Planos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-semiBold text-white" href="#">FAQ's</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        {/* Botões de login e cadastre-se */}
                        <button type="button" className={`btn btn-sm btn-outline-secondary border-0 text-white me-2`}>Login</button>
                        <button type="button" className={`btn btn-light btn-sm`}>Cadastre-se</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
