//import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import PetsList from './components/PetsList'
//import PetsListNew from './components/PetsListNew'
import SlideLovelyCustomer from './components/SlideLovelyCustomer'





function App() {
  const images = [
    '/img_dogs/dog_1.png',
    '/img_dogs/dog_2.png',
    '/img_dogs/dog_3.png',
    '/img_dogs/dog_4.png',
    '/img_dogs/dog_5.png',
    '/img_dogs/dog_6.png',
    '/img_dogs/dog_7.png',
    '/img_dogs/dog_8.png', 
  ]


  return (
    //<PetsListNew />
    //<ProductList />
    <SlideLovelyCustomer images={images} />
  )
}

export default App

/*function App() {
  const [count, setCount] = useState(0)
  const [pets, setPets] = useState([])

  const fetchPets = async () => {
    try {
      const resultado = await fetch('/pets');

      if(!resultado.ok){
        console.log('error ao buscar os pets');
      }

      const data: any = await resultado.json()

      console.log(data);
      

      setPets(data)
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => { fetchPets() }, [])

  if(!pets.length) return <p>pets nao encontrados</p>

  return (
    <>
      <h2>home</h2>
      {
        <ul>
          {
            pets.map((pet: any) => {
              return (
                <li >
                  <p>{pet.id}</p>
                  <p>{pet.name}</p>
                  <p>{pet.price.toFixed(2)}</p>
                </li>
              )
            })
          }
        </ul>
      }


      return (
        <SlideLovelyCustomer images={['dog_1.png', 'dog_2.png', 'dog_3.png']} />
      )
        
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> }
    </>
  )
}
*/


