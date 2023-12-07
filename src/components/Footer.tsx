import fb from '../../src/icons/icon-fb.png'
import instagram from '../../src/icons/icon-inst.png'
import x from '../../src/icons/icon-x.png'
import yt from '../../src/icons/icon-yt.png'

const Footer: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    return (
        <section style={{ display: isVisible ? 'flex' : 'none' }} className='footer'>
            <div className='container-footer'>
                <h3>COCKTAIL SEARCH</h3>
                <p>YOUR COCKTAIL GENERATOR</p>
                <ul>
                    <li>Privacy</li>
                    <li>Cookie Policy</li>
                    <li>Cookie Preferences</li>
                    <li>Terms & Conditions</li>
                </ul>
                <div className='icons'>
                    <a href='https://www.facebook.com'>
                        <img src={fb} alt='facebook icon' className='icon-socialmedia'/>
                    </a>
                    <a href='https://www.instagram.com'>
                        <img src={instagram} alt='instagram icon' className='icon-socialmedia'/>
                    </a>
                    <a href='https://www.twitter.com'>
                        <img src={x} alt='x icon' className='icon-socialmedia'/>
                    </a>
                    <a href='https://www.youtube.com'>
                        <img src={yt} alt='youtube icon' className='icon-socialmedia'/>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Footer;