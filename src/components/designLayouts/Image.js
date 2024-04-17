import React from "react";

const Image = ({ imageData, className }) => {
  // Vérification si les données de l'image sont disponibles
  if (!imageData) {
    console.log('Image non disponible');
    return ;
  }

  // Construction de l'URL de données de l'image
  const base64Image = `data:image;base64,${imageData}`;

  // Rendu de l'image
  return <img className={className} src={base64Image} alt="Product" />;
};

export default Image;
