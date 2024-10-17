import { useState, useEffect, ChangeEvent } from 'react'
import getRecipes from '../api/api'

export default function Header() {

  const [searchCriteria, setSearchCriteria] = useState({});

  useEffect(function getRecipesOnMount() {


  })


  function handleChange(evt:ChangeEvent<HTMLInputElement>):void {
    const {name, value} = evt.target;
    setSearchCriteria({...searchCriteria, [name]:value});
  }


  return (
    <nav>

    </nav>
  )
}
