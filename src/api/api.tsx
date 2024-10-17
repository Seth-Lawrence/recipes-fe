const BASE_API = 'https://localhost:5000/recipe/'

export default class RecipesApi {

  static async getRecipes():Promise<JSON> {
    const resp = await fetch (BASE_API + 'all/');
    const recipes: JSON =  await resp.json();

    return recipes;
  }


  static async getRecipe(id: string):Promise<JSON> {
    const resp = await fetch (BASE_API + id);
    const recipe: JSON = await resp.json();

    return recipe;
  }
}
