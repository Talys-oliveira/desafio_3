/* import React, { useEffect, useState } from 'react';
import PetsCard from './PetsCard';
import { Pet } from '../types/Pets';

const PetsList: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
}

const fetchPetS = async () => {
    try {
    const res = await fetch('/pets');
    if (!res.ok) {
        throw new Error(`Erro ao buscar os pets ${res.statusText}`);
    }
    //console.log(res);

    const data = await res.json();
    console.log(data.result);
    setpets(data.result);
    } catch (err: any) {
        setError(err.message || 'Erro desconhecido');
    } finally {
        setLoading(false);
    }    
};

useEffect(() => {    
}, []);

if (!pets.length) return <p>Products emoty...</p>
if (loading)  return <p>Carregando pets...</p>
if (error) return <p>Erro: {error}</p>

return (
    <div style={styles.grid}>
    {pets.map((pets) => (
     <PetsCard key={pets.name + 1} pets={pets} />
    ))}
    </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
    },
};  

export default PetsList;

  

function setPets(data: any) {
        throw new Error('Function not implemented.'); 
    }

*/


