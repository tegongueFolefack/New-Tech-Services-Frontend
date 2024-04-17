import React, { useState, useEffect } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";

const Category = ({ setCategoryImages }) => {
  const [categories, setCategories] = useState([]); // State pour stocker les catégories

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategoriesFromBackend(); // Appel de la fonction au chargement du composant
  }, []);

  const fetchCategoriesFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/Categorie/"); // Endpoint pour récupérer les catégories
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des catégories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleCategory = async (categoryId) => {
    dispatch(toggleCategory(categoryId)); // Envoyer seulement l'ID de la catégorie

    try {
      const response = await fetch(
        `http://localhost:8080/Produit/categorie/${categoryId}`
      ); // Endpoint pour récupérer les images liées à la catégorie sélectionnée
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des images");
      }
      const imagesData = await response.json();
      console.log("Images récupérées :", imagesData); // Afficher les données des images dans la console
      setCategoryImages((prevImages) => ({
        ...prevImages,
        [categoryId]: imagesData,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <NavTitle title="Filtrer par catégorie" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map((category) => (
            <li
              key={category.id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={category.id}
                onChange={() => handleToggleCategory(category.id)}
              />
              {category.intitule}
              {/* <span
                className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
              >
                <ImPlus />
              </span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;