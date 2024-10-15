import { useState, useEffect, ChangeEvent } from 'react'

const BASE_API = 'https:/localhost:5000/recipes';



export default function Header() {

  const [searchCriteria, setSearchCriteria] = useState({});

  function handleChange(evt:ChangeEvent<HTMLInputElement>):void {
    const {name, value} = evt.target;
    setSearchCriteria({...searchCriteria, [name]:value});
  }


  return (
    <Header>

    </Header>
  )
}
