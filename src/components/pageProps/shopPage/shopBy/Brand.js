import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/orebiSlice";

const Brand = ({setBrandImages}) => {
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBrandsFromBackend();
  }, []);

  const fetchBrandsFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/Marque/");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des marques");
      }
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleBrand = async (brandId) => {
    dispatch(toggleBrand(brandId));

    try {
      const response = await fetch(
        `http://localhost:8080/Produit/marque/${brandId}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des images");
      }
      const imagesData = await response.json();
      console.log("Images récupérées :", imagesData); // Afficher les données des images dans la console
      setBrandImages((prevImages) => ({
        ...prevImages,
        [brandId]: imagesData,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavTitle title="Filtrer par marque" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {brands.map((brand) => (
            <li
              key={brand.id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={brand.id}
                onChange={() => handleToggleBrand(brand.id)}
              />
              {brand.libelle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brand;
