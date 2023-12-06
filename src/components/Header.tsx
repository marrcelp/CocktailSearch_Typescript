import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const location = useLocation();


    return (
        <header style={{ display: isVisible ? 'block' : 'none' }} className="header">
            <div className="container">
                <div className="logo">
                    <img src="" alt="Logo" />
                    <span onClick={() => scroll.scrollToTop()}>LOGO</span>
                </div>
                <nav>
                    <ul className="nav-list">
                        {location.pathname === '/' ? (
                            <>
                                <ScrollLink to="home" smooth={true} duration={900}>
                                    <li>HOME</li>
                                </ScrollLink>
                                <ScrollLink to="ourcocktails" smooth={true} duration={900}>
                                    <li>OUR COCKTAILS</li>
                                </ScrollLink>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/#ourcocktails">OUR COCKTAILS</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
