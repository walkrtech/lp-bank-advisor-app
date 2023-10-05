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
        <nav className={`navbar navbar-expand-lg position-fixed w-100 z-1 pt-2`} style={{ backgroundColor: scrolling ? '#022c40' : 'transparent' }}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <a className="navbar-brand" href="#">
                        <img src="https://advisor-walkr-bucket.s3.amazonaws.com/WalkrLogoLP.svg" alt="Logo" className="img-fluid" />
                    </a>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ff-regular text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-regular text-white" href="#WalkrApp">WalkrApp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-regular text-white" href="#Planos">Planos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff-regular text-white" href="#FAQ">FAQ's</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <a href="https://advisor.walkr.app/">
                            <button type="button" className={`btn btn-sm btn-outline-secondary border-0 text-white me-2 ff-semiBold`} style={{ letterSpacing: 1.58 }}>Login</button>
                        </a>
                        <a href="https://advisor.walkr.app/requestFirstAccess">
                            <button type="button" className={`btn btn-light btn-sm ff-semiBold`} style={{ letterSpacing: 1.58 }}>Cadastre-se</button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
