import "./App.css";

// 1. Importer useSate (c'est une fonction)
// 2. Créer un état par défaut en appelant useState
// 3. Ajouter une intéraction pour modifier l'état

import React, { useState } from "react";
import BtnMore from "./components/BtnMore";
import BtnLess from "./components/BtnLess";
import BtnReset from "./components/BtnReset";

function App() {
  // UseState retourne un tableau
  // Il défini la valeur initiale de l'état
  // On va démarrer le compteur à zéro

  // const tab = useState(0);

  // Destructuring avec les tableaux
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <div className="counter-box">
          <BtnLess less={setCounter} value={counter} />
          <p className="counter-content">{counter}</p>
          <BtnMore more={setCounter} value={counter} />
        </div>

        <BtnReset reset={setCounter} value={counter} />
      </div>
    </>
  );
}

export default App;
