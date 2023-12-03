// import { Link } from 'react-router-dom';

//TODO : dodac "Link to" do elementów li w nav.
const Header: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    return (

            <header style={{ display: isVisible ? 'block' : 'none' }} className = 'header'>
                <div className = 'container'>
                    <div className='logo'>
                        <img src =''/>
                        <span>LOGO</span>
                    </div>
                    <nav>
                        <ul className= 'nav-list'>
                            <a href="#home">
                                <li>HOME</li>
                            </a>
                            <a href="#ourcocktails">
                                <li>OUR COCKTAILS</li>
                            </a>
                            <li>ABOUT</li>
                        </ul>
                    </nav>
                </div>
            </header>

    );
};

export default Header;