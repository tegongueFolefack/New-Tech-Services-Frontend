import React, { useState, useEffect } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image"; // Importez le composant Image correctement
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";

const Product = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Produit/")
      .then((response) => response.json())
      .then((data) => {
        setProduits(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wishList, setWishList] = useState([]);

  const handleProductDetails = (product) => {
    navigate(`/product/${product.id}`, {
      state: {
        item: product,
      },
    });
  };

  const handleWishList = (product) => {
    toast.success("Produit ajouté dans les favoris");
    setWishList([...wishList, product]);
  };

  return (
    <>
      {produits.map((product) => (
        <div className="w-full relative group" key={product.id}>
          <div className="lg:h-45  relative overflow-y-hidden">
            <div onClick={() => handleProductDetails(product)}>
              <Image
                className="product-image"
                imageData={product.image?.imageData} // Passer les données d'image
                contentType={product.image?.contentType} // Passer le type de contenu de l'image
                alt={product.nom}
                onClick={() => handleProductDetails(product)}
              />
            </div>
            <div className="absolute top-6 left-8">
              {product.badge && <Badge text="New" />}
            </div>
            <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
              <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                  Comparer
                  <span>
                    <GiReturnArrow />
                  </span>
                </li>
                <li
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.nom,
                        quantity: 1,
                        image: getImageSrc(product.image?.imageData),
                        badge: product.badge,
                        price: product.prixUnitaire,
                        description: product.description,
                      })
                    )
                  }
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Ajouter au panier
                  <span>
                    <FaShoppingCart />
                  </span>
                </li>
                <li
                  onClick={() => handleProductDetails(product)}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Description
                  <span className="text-lg">
                    <MdOutlineLabelImportant />
                  </span>
                </li>
                <li
                  onClick={() => handleWishList(product)}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Ajouter aux favoris
                  <span>
                    <BsSuitHeartFill />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
            {/* Le reste du contenu */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
