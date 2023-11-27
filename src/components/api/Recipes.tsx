// import { useEffect, useState } from "react";
//
// const BASE_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1';
//
// export interface Drink {
//     idDrink: string | number,
//     strDrink: string,
//     strDrinkThumb: string,
//     drinkRecipes?: DrinkRecipes[],
//
// }
// export interface DrinkRecipes {
//     idDrink: string | number,
//     strDrink: string,
//     strGlass: string,
//     strInstructions: string,
//     strDrinkThumb: string,
//     strIngredient1: string,
//     strIngredient2: string,
//     strIngredient3: string,
//     strIngredient4: string,
//     strIngredient5: string,
//     strIngredient6: string,
//     strIngredient7: string,
//     strIngredient8: string,
//     strIngredient9: string,
//     strIngredient10: string,
//     strIngredient11: string,
//     strIngredient12: string,
//     strIngredient13: string,
//     strIngredient14: string,
//     strIngredient15: string,
//     strIngredient16: string,
//
// }
//
//
// export function getDrinks(selectedIngredients: string[]) {
//     const API_URL: string = `${BASE_URL}/filter.php?i=gin`;
//
//     const [drinks, setDrinks] = useState<Drink[] | null>(null);
//     const [error, setError] = useState<Error | null>(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 if (!response.ok) {
//                     throw new Error('Problem with response from the server');
//                 }
//                 const data = await response.json();
//
//                 console.log("drinki", data);
//
//                 const drinksDetailsPromises = data.drinks.map((drink: Drink) =>
//                     getRecipes(drink.idDrink, selectedIngredients)
//                 );
//                 console.log("drinksDetailsPromises", drinksDetailsPromises);
//
//                 const drinksDetails = await Promise.all(drinksDetailsPromises);
//
//                 console.log("drinksDetails", drinksDetails);
//                 setDrinks(drinksDetails);
//
//             } catch (error) {
//                 setError(error instanceof Error ? error : new Error('Something went wrong!'));
//             }
//         };
//
//         fetchData();
//     }, [API_URL, selectedIngredients]);
//
//     return { drinks, error };
// }
//
// export function getRecipes(id: string | number, selectedIngredients: string[]) {
//     const API_URL_RECIPES: string = `${BASE_URL}/lookup.php?i=${id}`;
//
//     const [drinkRecipes, setDrinkRecipes] = useState<DrinkRecipes | null>(null);
//     const [error, setError] = useState<Error | null>(null);
//     const [drinkIngredients, setDrinkIngredients] = useState<string[]>([]);
//
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(API_URL_RECIPES);
//                 if (!response.ok) {
//                     throw new Error('Problem with response from the server');
//                 }
//                 const data = await response.json();
//
//                 console.log("przepisy:", data);
//
//                 const drinkIngredients: string[] = []
//                 for (let i = 1; i <= 16; i++){
//                     const ingredientKey = `strIngredient${i}`;
//                     const ingredientValue = data.drinks[0][ingredientKey]
//
//                     if (ingredientValue !== null) {
//                         drinkIngredients.push(ingredientValue)
//                     } else {
//                         break;
//                     }
//                 }
//                 console.log('drinkIngredients:', drinkIngredients);
//
//                 const hasSelectedIngredients = selectedIngredients.every((ingredient) =>
//                     drinkIngredients.includes(ingredient));
//
//                 console.log('hasSelectedIngredients:', hasSelectedIngredients);
//
//                 if (hasSelectedIngredients) {
//                     setDrinkRecipes(data.drinks);
//                     setDrinkIngredients(drinkIngredients);
//                 }
//
//                 console.log('skladniki:', drinkIngredients);
//
//             } catch (error) {
//                 setError(error instanceof Error ? error : new Error('Something went wrong!'));
//             }
//         };
//
//         fetchData();
//     }, [API_URL_RECIPES, selectedIngredients]);
//
//     return { drinkRecipes, drinkIngredients, error };
// }


// import React from "react";

const BASE_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1';

interface Drink {
    idDrink: string | number,
    strDrink: string,
    strDrinkThumb: string,
    // drinkRecipes?: DrinkRecipes[],
}
export interface DrinkRecipe extends Drink {
    strGlass: string,
    strInstructions: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
}


export async function getDrinks(): Promise<{ data: Drink[]; myDrinks: DrinkRecipe[] } | null> {
    const API_URL: string = `${BASE_URL}/filter.php?i=gin`;


    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Problem with response from the server');
    }
    const data = await response.json();

    console.log(data.drinks);
    // return data.drinks;

    const urls = data.drinks.slice(0, 10).map((drink: Drink) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`));

    const promises1 = await Promise.all(urls);
    const promises2 = promises1.map((resp) => resp.json());
    const finalData = await Promise.all(promises2);

    const myDrinks = finalData.map((drink) => drink.drinks.flat()[0] as DrinkRecipe);
    console.log(myDrinks);

    return { data: data.drinks, myDrinks}


}
