
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

            </div>
        </section>
    );
};

export default Footer;