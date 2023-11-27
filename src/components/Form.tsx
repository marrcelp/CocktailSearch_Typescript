// import { useState, useEffect } from "react";
// import { getDrinks } from "./api/Recipes.tsx";
//
// function Form() {
//
//     const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
//     const [ingredient, setIngredient] = useState('');
//
//
//
//
//     const { drinks } = getDrinks(selectedIngredients)
//
//     function handleIngredients(event:  React.FormEvent<HTMLFormElement>) {
//         event.preventDefault();
//
//         setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
//         setIngredient('');
//
//         console.log('Selected ingredients:', selectedIngredients)
//     }
//
//     return (
//         <div>
//             <h1>Choose your ingredients, we will prepare recipe for you!</h1>
//             <form onSubmit={e => handleIngredients(e)}>
//                 <div className='form-group'>
//                     <input type='text'
//                            className='form-control'
//                            name='ingredient'
//                            placeholder='ex. cucumber'
//                            value={ingredient}
//                            onChange={(e) => setIngredient(e.target.value)}
//                     />
//                 </div>
//                 <button type ='submit' className='btn'>Add ingredient</button>
//             </form>
//
//             <div>
//                 <h2>Seleceted ingredients:</h2>
//                 <ul>
//                     {selectedIngredients.map((ingredient, index) => (
//                         <li key= {index}>{ingredient}</li>
//                     ))}
//                 </ul>
//             </div>
//
//             <div>
//                 <h2>Your recipes with selected ingredients:</h2>
//                 <ul>
//                     {drinks ? (
//                         drinks.map((drink, index) => (
//                             <li key={index}>
//                                 {drink.drinkRecipes ? (
//                                     <div>
//                                         <p>{drink.strDrink}</p>
//                                         <ul>
//                                             {drink.drinkRecipes.map((recipe, recipeIndex) => (
//                                                 <li key={recipeIndex}>{recipe.strGlass} - {recipe.strInstructions}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ) : (
//                                     <p>No recipes available for {drink.strDrink}</p>
//                                 )}
//                             </li>
//                         ))
//                     ) : (
//                         <li>No recipes available</li>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default Form;
//

import { useState, useEffect } from 'react';
import { getDrinks, Drink } from "./api/Recipes.tsx";

function Form() {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState('');
    const [drinks, setDrinks] = useState<Drink[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            const drinksData = await getDrinks(selectedIngredients);
            setDrinks(drinksData);
        };
        fetchData();
    }, [selectedIngredients])





    return (
        <div>
            <h1>Choose your ingredients, we will prepare recipe for you!</h1>
            <form onSubmit={e => handleIngredients(e)}>
                <div className='form-group'>
                    <input type='text'
                           className='form-control'
                           name='ingredient'
                           placeholder='ex. cucumber'
                           value={ingredient}
                           onChange={(e) => setIngredient(e.target.value)}
                    />
                </div>
                <button type ='submit' className='btn'>Add ingredient</button>
            </form>

            <div>
                <h2>Seleceted ingredients:</h2>
                <ul>
                    {selectedIngredients.map((ingredient, index) => (
                        <li key= {index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Your recipes with selected ingredients:</h2>
                <ul>

                </ul>
            </div>
        </div>
    )
}
export default Form;
