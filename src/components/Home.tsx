
const Home = () => {
    return (
        <>
            <section id='home' className='home'>
                <div className='banner'></div>
                <div className='container'>
                    <div className='banner-description'>
                        <h1 className='class-title'>COCKTAIL SEARCH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolores eaque, fuga in maiores quasi? Adipisci aliquid aspernatur atque cumque dolorem in, iusto, laborum maxime sed sit tempore, vero. Nostrum?</p>
                        <a href='#generator'>
                            <button className='btn btn-banner'>FIND YOUR RECIPE</button>
                        </a>
                    </div>
                </div>
            </section>

            <section className='discover'>
                <div className='discover-photo'>
                    <img src="src/images/great-cocktails-qWAFpTpboyQ-unsplash.jpeg" alt="bottle and glassess" className='image'/>
                </div>
                <div className='description'>
                    <h2 className='class-title'>LOREM IPSUM</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur distinctio dolore eligendi exercitationem explicabo ipsum, iure laudantium maxime minima necessitatibus nihil officia possimus quaerat quas quia quibusdam quidem quod, rerum temporibus tenetur velit vero voluptatum. Commodi laudantium optio sint?</p>
                    <button className='btn'>DISCOVER MORE</button>
                </div>
            </section>
        </>

    );
};

export default Home;