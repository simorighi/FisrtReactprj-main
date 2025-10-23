/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Orb from "./components/Orb/Orb.tsx";/* 
import SpotlightCardUsage from "./components/Card/SpotlightCardUsage.tsx"; */
/* import CircularGallery from './components/Gallery/CircularGallery.tsx'
import SpotlightCard from './components/Card/SpotlightCard.tsx'
import SpotlightCardUsage from './components/Card/SpotlightCardUsage.tsx' */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      {/* MODIFICARE IL RESPONSE */}
      <div className="continer ">
        <div className="row">
          <div className="col orbita">
            <Orb
              hoverIntensity={0.9}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>
      <App />
      
    </BrowserRouter>
  </React.StrictMode>
);
