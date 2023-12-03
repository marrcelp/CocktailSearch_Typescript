import {useState, useEffect } from 'react';
import {getDrinks, DrinkRecipe } from "./api/Recipes.tsx";

function getRecipeIngredients(recipe: DrinkRecipe): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
        const ingredientKey = `strIngredient${i}` as keyof DrinkRecipe;
        const ingredient: any = recipe[ingredientKey];

        if (ingredient) {
            ingredients.push(ingredient); // Konwersja na małe litery
        }
    }

    return ingredients;
}

function MissingIngredients({ selectedIngredients, recipeIngredients }: { selectedIngredients: string[], recipeIngredients: string[] }) {
    const lowerSelectedIngredients = selectedIngredients.map(ingredient => ingredient.toLowerCase()); // Konwersja na małe litery

    const missingIngredients = recipeIngredients.filter(ingredient => !lowerSelectedIngredients.includes(ingredient.toLowerCase()));

    if (missingIngredients.length > 0) {
        return (
            <div>
                <p>You are missing the above {missingIngredients.length - 1} ingredients marked in red to prepare this drink.</p>
            </div>
        );
    } else {
        return null;
    }
}


const Form: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState('');
    const [drinks, setDrinks] = useState<DrinkRecipe[] | null>(null);
    const [filteredRecipes, setFilteredRecipes] = useState<DrinkRecipe[]>([]);
    const [selectedIngredientType, setSelectedIngredientType] = useState<string>('gin');
    const [selectedRecipe, setSelectedRecipe] = useState<DrinkRecipe | null>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);


    useEffect(() => {
        const fetchData = async () => {
            const drinksData = await getDrinks(selectedIngredientType);
            if (drinksData) {
                setDrinks(drinksData.drinksDetails);
            }
        };
        fetchData();
    }, [selectedIngredientType])

    useEffect(() => {
        if (drinks && selectedIngredients.length > 0) {
            const filtered = drinks.filter((recipe) => {
                return selectedIngredients.some((ingredient) => {
                    for (let i = 1; i < 16; i++) {
                        const ingredientKey = `strIngredient${i}` as keyof DrinkRecipe;
                        const ingredientValue = String(recipe[ingredientKey]);
                        if (ingredientValue.toLowerCase().includes(ingredient.toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                });
            });
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes([]);
        }
    }, [selectedIngredients, drinks]);

    function handleIngredients(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (ingredient.length >= 3){
        setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
        setIngredient('');
    }}

    function handleRecipeClick(recipe: DrinkRecipe) {
        setSelectedRecipe(recipe);
        setIsExpanded(!isExpanded); // Dodaj tę linię, aby zmieniać stan rozwinięcia/zwiniecia
    }


    return (
        <section style={{ display: isVisible ? 'block' : 'none' }} id='generator' className='generator'>
            <h1 className='class-title'>CHOOSE YOUR INGREDIENTS, WE WILL PREPARE A RECIPE FOR YOU!</h1>
            <div className='form-group'>
                <label>
                    <input
                        type='radio'
                        name='ingredientType'
                        value='gin'
                        // checked={selectedIngredientType === 'gin'}
                        defaultChecked={true}
                        onChange={() => {

                            setSelectedIngredientType('gin')
                            // setSelectedIngredients(prevIngredients => [...prevIngredients, 'Gin'])
                        }}
                    />
                    Gin
                </label>
                <label>
                    <input
                        type='radio'
                        name='ingredientType'
                        value='vodka'
                        // checked={selectedIngredientType === 'vodka'}
                        // defaultChecked={false}
                        onChange={() => {
                            setSelectedIngredientType('vodka')
                            // setSelectedIngredients(prevIngredients => [...prevIngredients, 'Vodka'])
                        }}
                    />
                    Vodka
                </label>
                <label>
                    <input
                        type='radio'
                        name='ingredientType'
                        value='tequila'
                        // checked={selectedIngredientType === 'vodka'}
                        // defaultChecked={false}
                        onChange={() => {
                            setSelectedIngredientType('tequila')
                            // setSelectedIngredients(prevIngredients => [...prevIngredients, 'Vodka'])
                        }}
                    />
                    Tequila
                </label>
            </div>
            <form onSubmit={(e) => handleIngredients(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        name='ingredient'
                        placeholder='ex. Tonic Water'
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn'>
                    Add ingredient
                </button>
            </form>


            <div>
                <h2>Selected ingredients:</h2>
                <ul>
                    {selectedIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                </ul>
            </div>

            <div className='selected_ingredients'>
                <h2>Your recipes with selected ingredients:</h2>
                <ul>

                    {filteredRecipes.map((recipe, index) => (
                        <li key={index}>
                            <div onClick={() => handleRecipeClick(recipe)}>
                                {recipe.strDrink}
                            </div>
                            {selectedRecipe && selectedRecipe.idDrink === recipe.idDrink && isExpanded && (
                                <div className='drink_details'>
                                    <img src={selectedRecipe.strDrinkThumb}
                                         style={{width: '150px', height: '150px', border: '2px solid black', borderRadius: '20px'}}
                                         alt='Drink image'
                                    />
                                    <h3>Instruction:</h3>
                                    <p>{selectedRecipe.strInstructions}</p>
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        {(() => {

                                            const ingredients = [];
                                            for (let i = 1; i <= 15; i++) {
                                                const ingredientKey = `strIngredient${i}` as keyof DrinkRecipe;
                                                const measureKey = `strMeasure${i}` as keyof DrinkRecipe;
                                                const measure: any = selectedRecipe[measureKey];
                                                const ingredient: any = selectedRecipe[ingredientKey];
                                                const selectedIngredientstoLower = selectedIngredients.map(element => element.toLowerCase());
                                                if (ingredient) {
                                                    ingredients.push(<li style={{ color: selectedIngredientstoLower.includes(
                                                        ingredient.toLowerCase()) ||
                                                        (ingredient.toLowerCase() === 'gin' ||
                                                            ingredient.toLowerCase() === 'vodka'||
                                                            ingredient.toLowerCase() === 'tequila') ?
                                                            'green' : 'red' }} key={i}>{ingredient} - {measure}</li>);
                                                }

                                            }
                                            return ingredients;
                                        })()}
                                    </ul>
                                    <MissingIngredients
                                        selectedIngredients={selectedIngredients}
                                        recipeIngredients={getRecipeIngredients(recipe)}
                                    />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>



        </section>
    );
}

export default Form;


