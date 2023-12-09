import Footer from "./Footer.tsx";
import about1 from '../../src/images/about1.jpeg'
import about2 from '../../src/images/abou2.jpeg'
import about3 from '../../src/images/about3.jpeg'

const About = () => {
    return (
        <>
        <section className='about'>
            <div className='container'>
                    <h1 className='class-title'>ABOUT COCKTAIL SEARCH</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur dolores, omnis qui sunt tempora. Ab adipisci, aut deleniti facilis fugit magnam obcaecati odio ratione. Cum cupiditate maiores similique soluta veritatis? Accusantium corporis dolore est non nostrum obcaecati possimus reprehenderit.</p>
                <div className='about-section'>
                    <div>
                        <img src={about1}/>
                    </div>
                    <div className='about-description'>
                        <h3>WHO ARE WE?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iure sit unde? Accusamus adipisci alias at autem cumque debitis deserunt dicta dolore eos ex facere harum illo incidunt ipsum iusto laudantium magni maiores maxime minus modi molestiae necessitatibus numquam pariatur quasi recusandae repellat rerum sequi sint, suscipit tempora unde vel velit vitae. Ducimus fugit illum minima nostrum sed, sunt unde!</p>
                    </div>
                </div>

                <div className='about-section'>
                    <div className='about-description'>
                        <h3>OUR STORY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque culpa deleniti dignissimos eius eligendi eum eveniet minima molestiae molestias, mollitia nobis provident quaerat sequi sint, vero voluptas. Autem consectetur culpa cumque eum fugiat iste, molestiae quas totam. Aperiam explicabo libero quasi quos. Amet blanditiis deleniti dolore, eaque, exercitationem, facilis fuga itaque minima possimus praesentium recusandae repellat sapiente sit sunt totam. Facilis labore reiciendis sunt velit vitae. Adipisci aliquid animi assumenda cum deleniti dolor dolorem doloremque, esse facere harum id, impedit ipsum iste laudantium magni minima minus nam natus nostrum nulla porro praesentium quia quo sint suscipit tempore unde, vel veritatis vitae voluptatem! Atque debitis magni nulla repellat. Accusantium autem culpa dicta minima obcaecati perferendis quaerat repudiandae sequi soluta velit?</p>
                    </div>
                    <div>
                        <img src={about2}/>
                    </div>
                </div>

                <div className='about-section'>
                    <div>
                        <img src={about3}/>
                    </div>
                    <div className='about-description'>
                        <h3>OUR GENERATOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at cupiditate eos maxime nulla placeat quibusdam quisquam repellat repellendus unde. Autem distinctio laboriosam maxime quo repellat veritatis voluptatum. Ad aliquid, aperiam autem consectetur consequuntur dicta earum enim eos eveniet explicabo illum ipsam labore nemo nisi numquam obcaecati odio optio porro possimus quaerat quia quidem rem sunt ut voluptatibus. Laborum, minima?</p>
                    </div>
                </div>
            </div>


        </section>
        <Footer isVisible={true}/>
        </>
    );
};

export default About;