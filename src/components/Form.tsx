import { useState, useEffect } from 'react';
import { getDrinks, DrinkRecipe } from "./api/Recipes.tsx";


function Form() {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState('');
    const [drinks, setDrinks] = useState<DrinkRecipe[] | null>(null);
    const [filteredRecipes, setFilteredRecipes] = useState<DrinkRecipe[]>([]);
    const [selectedIngredientType, setSelectedIngredientType] = useState<string>('gin');

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
                    for (let i = 1; i <= 16; i++) {
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
        setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
        setIngredient('');
    }

    return (
        <div>
            <h1>Choose your ingredients, we will prepare a recipe for you!</h1>
            <form onSubmit={(e) => handleIngredients(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        name='ingredient'
                        placeholder='ex. cucumber'
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn'>
                    Add ingredient
                </button>
            </form>
            <div className='form-group'>
                <label>
                    <input
                        type='radio'
                        name='ingredientType'
                        value='gin'
                        checked={selectedIngredientType === 'gin'}
                        onChange={() => setSelectedIngredientType('gin')}
                    />
                    Gin
                </label>
                <label>
                    <input
                        type='radio'
                        name='ingredientType'
                        value='vodka'
                        checked={selectedIngredientType === 'vodka'}
                        onChange={() => setSelectedIngredientType('vodka')}
                    />
                    Vodka
                </label>
            </div>

            <div>
                <h2>Selected ingredients:</h2>
                <ul>
                    {selectedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Your recipes with selected ingredients:</h2>
                <ul>
                    {filteredRecipes.map((recipe, index) => (
                        <li key={index}>{recipe.strDrink}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Form;


