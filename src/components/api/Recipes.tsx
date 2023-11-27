const BASE_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1';

export interface Drink {
    idDrink: string | number,
    strDrink: string,
    strDrinkThumb: string,

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


export async function getDrinks(ingredientType: string = 'gin'): Promise<{ data: Drink[]; drinksDetails: DrinkRecipe[] } | null> {
    const API_URL: string = `${BASE_URL}/filter.php?i=${ingredientType}`;


    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Problem with response from the server');
    }
    const data = await response.json();

    console.log(data.drinks);

    function shuffleArray(array: any) {
        for (let i = 0; i <= array.length - 1; i++) {
            let j = Math.floor(Math.random() * i );
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledDrinks = shuffleArray(data.drinks);
    const slicedDrinks = shuffledDrinks.slice(0, 10);

    const urls = slicedDrinks.map((drink: Drink) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`));


    const promises1 = await Promise.all(urls);
    const promises2 = promises1.map((resp) => resp.json());
    const finalData = await Promise.all(promises2);

    const drinksDetails = finalData.map((drink) => drink.drinks.flat()[0] as DrinkRecipe);
    console.log(drinksDetails);

    return { data: data.drinks, drinksDetails}


}
