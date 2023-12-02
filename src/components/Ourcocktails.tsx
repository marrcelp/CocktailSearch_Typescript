const Ourcocktails = () => {
    return (
        <section id='ourcocktails' className='our_cocktails'>
            <div className='our_cocktails-overlay'>
            <h2 className='cocktail-title'>OUR COCKTAILS</h2>
            <div className='container container-cocktails'>
                <div className='drink_recipe'>
                    <img src="src/images/d2.png" alt="bottle and glassess" className='image'/>
                    <h3 className='class-title'>LOREM IPSUM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur blanditiis, dolore ea facere id iure quaerat veniam voluptates!</p>
                    <a href=''>
                        <span>SEE THE RECIPE</span>
                    </a>
                </div>
                <div className='drink_recipe'>
                    <img src="src/images/d3.png" alt="bottle and glassess" className='image'/>
                    <h3 className='class-title'>LOREM IPSUM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque laboriosam quam repellat sint sit, soluta totam voluptate. Obcaecati, quasi?</p>
                    <a href=''>
                        <span>SEE THE RECIPE</span>
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Ourcocktails;