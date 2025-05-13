import React from 'react';


type Pet = {
    name: string;
    size: string;
    price: number;
    images: string[];
};

type PetsCardProps = {
  pets: Pet
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    textAlign: 'center' as const,
  },
  image: {
    width: '100%',
    height: '120px',
    objectFit: 'cover' as const,
    borderRadius: '8px',
  },
}

const PetsCard: React.FC<PetsCardProps> = ({ pets }) => {
    const { name, size, price, images } = pets; 

    return (
        <div style={styles.card}>
            <img 
            src={`/img_dogs/${images[0] || 'dog_1.png'}`}
            alt={name}
            style={styles.image}
            />
           
           <h2>{name}</h2>
           <p>Size: {size}</p>
           <p>Price: ${price.toFixed(2)}</p>    
        </div>
    );
};

export default PetsCard;
//{images[0] || '/img_dogs/dog_1.png'}  