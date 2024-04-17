import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import NavTitle from "./NavTitle";

const Price = () => {
  const [value, setValue] = useState([0, 1000]); // Valeurs par défaut du slider

  const handleChange = (event, newValue) => {
    setValue(newValue); // Met à jour les valeurs du slider
  };

  const valuetext = (value) => {
    return `${value} €`; // Formatage du texte de la valeur du slider
  };

  return (
    <div className="cursor-pointer">
      <NavTitle title="Trier par prix" icons={false} />
      <div className="font-titleFont">
        <div style={{ marginBottom: "20px" }}>
          <Typography id="price-slider" gutterBottom>
            Par prix
          </Typography>
          <Slider
            getAriaLabel={() => "Plage de prix"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
