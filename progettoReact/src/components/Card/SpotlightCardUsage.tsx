import React from "react";
import SpotlightCard from "./SpotlightCard";


const SpotlightCardUsage: React.FC = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(189, 148, 61, 0.2)"
    >
      <div className="text-center mt-4">
        <h3>Benvenuto negli Appunti!</h3>
        <p>Seleziona una materia per iniziare a studiare ✨</p>
      </div>
    </SpotlightCard>
  );
};

export default SpotlightCardUsage;
