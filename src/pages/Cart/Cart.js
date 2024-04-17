// Cart.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import { ImCross } from "react-icons/im";
import Image from "../../components/designLayouts/Image";
import { toast } from "react-toastify";

const Cart = () => {
  const [totalAmt, setTotalAmt] = useState("");
  const [products, setProducts] = useState([]);
  const [shippingCharge, setShippingCharge] = useState("");
  const [quantite, setQuantite] = useState(1);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('localProduct')) || [];
    if (storedData.length === 0) {
      console.log('pas de donnée');
    } else {
      setProducts(storedData);
      console.log('données trouvées')
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/Produit/")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('localProduct', JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  useEffect(() => {
    if (totalAmt <= 1000000) {
      setShippingCharge(10000);
    } else if (totalAmt <= 500000) {
      setShippingCharge(5000);
    } else if (totalAmt > 1000000) {
      setShippingCharge(20000);
    }
  }, [totalAmt]);

  const resetCart = () => {
    localStorage.removeItem('localProduct');
    location.reload();
  };

  const deleteItem = (productId) => {
    const updatedProducts = products.filter(item => item.id !== productId);
    setProducts(updatedProducts);
    toast.error("produit supprimé du panier");
  };
  
const drecreaseQuantity = () => {
  setQuantite(quantite-1);

};

const increaseQuantity = () => {
  setQuantite(quantite+1);
};

useEffect(() => {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.prixUnitaire * quantite;
  });
  setTotalAmt(totalPrice);
}, [products, quantite])

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Produit</h2>
            <h2>Prix</h2>
            <h2>Quantité</h2>
            <h2>Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item.id} className="w-full grid grid-cols-5 mb-4 border py-2">
                <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                  <ImCross
                    onClick={() => deleteItem(item.id)}
                    className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                  />
                  <Image className="w-32 h-32" imageData={item.image?.imageData} alt="productImage" />
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
                    <p>{item.prixUnitaire * quantite} FCFA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => resetCart()}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Vider le panier
          </button>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">total du panier</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Prix total
                  <span className="font-semibold tracking-wide font-titleFont">
                    {totalAmt} FCFA
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Frais de livraison
                  <span className="font-semibold tracking-wide font-titleFont">
                    {shippingCharge} FCFA
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    {totalAmt + shippingCharge} FCFA
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                    Proceder au paiement
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
