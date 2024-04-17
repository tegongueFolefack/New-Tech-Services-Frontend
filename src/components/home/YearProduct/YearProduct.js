import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";


const YearProduct = () => {
  return (
    <Link to="/shop">
     <div className="w-full h-80 mb-20 flex items-center">
        <div className="w-1/2 h-full">
          <Image
            className="w-full h-full object-cover"
            imgSrc={productOfTheYear}
          />
        </div>
        <div className="w-1/2 px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-primeColor">
            Produit de l'année
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
          Les coffrets  sont des solutions intégrées et sécurisées pour répondre aux besoins électriques,
           mettant en avant leur conception robuste et leur facilité d'installation.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
