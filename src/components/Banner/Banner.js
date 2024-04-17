import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CustomSlide = ({ libelle, imageData, text, buttonLink, buttonText }) => {
 // Vérifier l'extension de l'image
 let imgExtension = '';
 if (libelle.endsWith('.jpg') || libelle.endsWith('.jpeg')) {
   imgExtension = 'jpeg';
 } else if (libelle.endsWith('.png')) {
   imgExtension = 'png';
 } else if (libelle.endsWith('.gif')) {
   imgExtension = 'gif';
 } // Ajoutez d'autres extensions si nécessaire
 
 // Créer l'URL de l'image en fonction de l'extension
 const imgSrc = `data:image/${imgExtension};base64,${imageData}`;

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#F5F5F3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "450px",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      >
        <h1
          style={{
            marginBottom: "15px",
            fontSize: "2.5rem",
            color: "#000",
            fontWeight: "700",
          }}
        >
          {libelle}
        </h1>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "1.5rem",
            color: "#666",
          }}
        >
          {text}
          
        </p>

        <Link to={buttonLink}>
          <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
            {buttonText}
          </button>
        </Link>
      </div>
      <div style={{ marginLeft: "10px", width: "800px", height: "300px" }}> 
        {/* Utilisation de l'URL de l'image */}
        <img src={imgSrc} alt={libelle} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
};

const Banner = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Récupérer les images depuis l'API du backend
    fetch("http://localhost:8080/Image/")
      .then(response => response.json())
      .then(data => {
        setImages(data); // Mettre à jour l'état local avec les données des images
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des images :", error);
      });
  }, []);

  
  const settings = {
    dots: false, // Cette ligne supprime la barre de numérotation
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "#262626",
          borderRight: "3px #262626 solid",
          padding: "8px 0",
          cursor: "pointer",
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "25px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {images.map((image, index) => (
          <CustomSlide
            key={index}
            imageData={image.imageData}
            libelle={image.libelle}
            text="Les énergies renouvelables, comme le solaire, l'éolien et l'hydroélectricité, sont des alternatives durables et respectueuses de l'environnement, ne contribuant pas aux émissions de gaz à effet de serre" // Vous pouvez remplacer ce texte par celui de votre choix
            buttonLink
            buttonText="Voir plus"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
