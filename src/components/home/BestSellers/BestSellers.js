import React, { useState, useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetchBestSellersFromBackend();
  }, []);

  const fetchBestSellersFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/Image/");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des meilleurs ventes");
      }
      const data = await response.json();
      setBestSellers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getImageFormat = (contentType) => {
    if (contentType && contentType.includes("image/jpeg")) {
      return "jpeg";
    } else if (contentType && contentType.includes("image/jpg")) {
      return "jpg";
    }else if (contentType && contentType.includes("image/png")) {
      return "png";
    } else if (contentType && contentType.includes("image/gif")) {
      return "gif";
    } else {
      return "jpg"; // Format par défaut
    }
  };

  return (
    <div className="w-full pb-20">
      <Heading heading="Meilleurs ventes" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {bestSellers.map((product, index) => (
        <Product
          key={index} // Utilisation de l'index comme clé
          _id={product.id}
          img={`data:image/${getImageFormat(product.contentType)};base64,${product.image}`} 
          productName={product.nom}
          price={product.prix_unitaire}
          color={product.couleur}
          badge={product.badge}
          des={product.description}
        />
      ))}
      </div>
    </div>
  );
};

export default BestSellers;
