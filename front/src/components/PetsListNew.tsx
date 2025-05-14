import { useEffect, useState } from "react";
import { Pet } from "../types/Pets";
import PetsCard from "./PetsCard";



export default function PetsListNew() {

    const [pets, setPets] = useState<Pet[]>([])

    const fetchPets = async () => {
        
        const res = await fetch('/pets')

        console.log(res);

        if(!res.ok) {
            console.log('erro');
            console.log(res.statusText);
        }

        const json = await res.json();

        setPets(json.result)
}

useEffect(() => {
    fetchPets()
}, [])

if(!pets.length) return <p>pets empty...</p>

return (
    pets.map( pet => <PetsCard pets={pet} />)
)
}