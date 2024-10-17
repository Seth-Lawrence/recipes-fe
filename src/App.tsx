import {useEffect, useState} from 'react'

import RecipesApi from './api/api'

import './App.css'

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState({});

  useEffect(function getRecipesOnMount() {
    async function getRecipes() {
      const recipesData = await RecipesApi.getRecipes();
      setRecipes(recipesData);
      setRecipes(recipes);
      setIsLoading(false);
    }
    getRecipes();
  })


  return (
    <>
    {isLoading ? <div>Loading...</div> : recipes}
    </>
  )
}
