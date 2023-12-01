// import { Link } from 'react-router-dom';

//TODO : dodac "Link to" do elementów li w nav.
const Header = () => {
    return (

            <header className = 'header'>
                <div className = 'container'>
                    <div className='logo'>
                        <img src =''/>
                        <span>LOGO</span>
                    </div>
                    <nav>
                        <ul className= 'nav-list'>
                            <li>HOME</li>
                            <li>OUR COCKTAILS</li>
                            <li>ABOUT</li>
                        </ul>
                    </nav>
                </div>
            </header>

    );
};

export default Header;