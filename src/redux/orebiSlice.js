import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  checkedBrands: [],
  checkedCategorys: [],
  brandImages: {},
  categoryImages: {},
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // Dispatch a success toast
      toast.success("Product added to cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      // Dispatch a success toast
      toast.error("produit supprimé du panier");
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      
      // Vérifier si brand est null ou undefined
      if (!brand || !brand.id) {
        console.error("Brand object or its id is null or undefined");
        return;
      }
    
      const isBrandChecked = state.checkedBrands.some(
        (b) => b.id === brand.id
      );
    
      // Créer une nouvelle liste de marques en fonction de l'état actuel
      let updatedBrands = [...state.checkedBrands];
    
      if (isBrandChecked) {
        updatedBrands = updatedBrands.filter(
          (b) => b.id !== brand.id
        );
      } else {
        updatedBrands.push(brand);
      }
    
      // Mettre à jour l'état avec les marques mises à jour
      state.checkedBrands = updatedBrands;
    },
    

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b.id === category.id
      );
    
      // Créer une nouvelle liste de catégories en fonction de l'état actuel
      let updatedCategories = [...state.checkedCategorys];
    
      // Vérifier si la catégorie est déjà cochée
      if (isCategoryChecked) {
        // Si oui, la retirer de la liste
        updatedCategories = updatedCategories.filter(
          (b) => b.id !== category.id
        );
      } else {
        // Sinon, l'ajouter à la liste
        updatedCategories.push(category);
      }
    
      // Retourner un nouvel objet d'état avec la liste mise à jour
      state.checkedCategorys = updatedCategories;
    },

    setBrandImages: (state, action) => {
      const { brandId, imagesData } = action.payload;
      state.brandImages[brandId] = imagesData;
    },
  
    setCategoryImages: (state, action) => {
      const { categoryId, imagesData } = action.payload;
      state.categoryImages[categoryId] = imagesData;
    },
  },
});

export const {
  setBrandImages,
  setCategoryImages,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = orebiSlice.actions;
export default orebiSlice.reducer;
