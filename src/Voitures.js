import React from 'react';

const Voitures = () => {
  // Créer un tableau avec les noms des voitures
  const voitures = ['Voiture 1', 'Voiture 2', 'Voiture 3'];

  // Mapper le tableau pour créer un élément <p> pour chaque voiture
  return (
    <div>
      {voitures.map((voiture, index) => (
        <p key={index}>{voiture}</p>
      ))}
    </div>
  );
};

export default Voitures;