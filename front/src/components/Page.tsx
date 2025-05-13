
import PetsCard from './PetsCard';
import { Pet } from '../types/Pets';

const pets: Pet[] = [
  {
    name: 'Rex',
    size: 'Médio',
    price: 29.9,
    images: ['dog_1.png'],
  },
  {
    name: 'Bolt',
    size: 'Pequeno',
    price: 19.9,
    images: ['dog_2.png'],
  },
  {
    name: 'Luna',
    size: 'Grande',
    price: 39.9,
    images: ['dog_3.png'],
  },
];

export default function Page() {
  return (
    <div>
      <h2>Pets disponíveis</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {pets.map((pet, index) => (
          <PetsCard key={index} pets={pet} />
        ))}
      </div>
    </div>
  );
}









/*export default function Page() {
    return <h2>page</h2>
}*/