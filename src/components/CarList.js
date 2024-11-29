import React, { useState } from "react";
import { cars } from "../data/cars"; // Assurez-vous que le chemin est correct.

const CarList = () => {
  const [selectedType, setSelectedType] = useState("Tous");

  // Fonction pour filtrer les voitures
  const filteredCars =
    selectedType === "Tous"
      ? cars
      : cars.filter((car) => car.type === selectedType);

  return (
    <div>
      <h1>Nos Voitures</h1>

      {/* Dropdown pour sélectionner le type */}
      <label htmlFor="carType">Filtrer par type : </label>
      <select
        id="carType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="Tous">Tous</option>
        <option value="Sportive">Sportive</option>
        <option value="SUV">SUV</option>
        <option value="Électrique">Électrique</option>
        <option value="Vintage">Vintage</option>
      </select>

      {/* Affichage des voitures */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {filteredCars.map((car) => (
          <div
            key={car.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              maxWidth: "300px",
            }}
          >
            <img src={car.image} alt={car.name} style={{ width: "100%" }} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p><strong>Prix :</strong> {car.price}</p>
            <p><strong>Type :</strong> {car.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
