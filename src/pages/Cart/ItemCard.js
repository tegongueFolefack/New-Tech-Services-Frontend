import React, {useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import Image from "../../components/designLayouts/Image";
import { toast } from "react-toastify";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({item}) => {

  const [quantite, setQuantite] = useState(1);

  const deleteItem = (productId) => {
    const storedData = JSON.parse(localStorage.getItem('localProduct')) || [];
    
    // Recherche du produit dans le panier par son ID
    const updatedData = storedData.filter(item => item.id !== productId);
    
    // Mise à jour des données dans le stockage local
    localStorage.setItem('localProduct', JSON.stringify(updatedData));
    //toast.error("produit supprimé du panier");
    
    // Rafraîchissement de la page
    location.reload();
};

  

 const drecreaseQuantity = () => {
    setQuantite(quantite-1);

};


const increaseQuantity = () => {
  setQuantite(quantite+1);
};



  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => deleteItem(item.id)}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <Image className="w-32 h-32" imageData={item.image?.imageData}  alt="productImage" />
        
        <h1 className="font-titleFont font-semibold">{item.nom}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {item.prixUnitaire} FCFA
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => drecreaseQuantity(item.id)}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{quantite}</p>
          <span
            onClick={() => increaseQuantity(item.id)}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>{quantite * item.prixUnitaire} FCFA</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
