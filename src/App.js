import './App.css';
import { NavBar } from './components/NavBar';
import { DonutCard } from './components/DonutCard';
import { dataDonut } from "./data/Donut"
import  React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const DonutContext = React.createContext();  

function App() {

  const [isNombreLocalClicked, setIsNombreLocalClicked] = useState(false);
  const handleButtonNombreLocal = () => {
      // Actualiza el estado a true cuando se hace clic en el botón
      setIsNombreLocalClicked(!isNombreLocalClicked);
  };

  function addDonutToFavorites(element) {
    if(listaDonasFavoritas.find((dona) => dona.Id === element.Id)){
      console.log("Dona repetida");
      return;
    }

    let tempListaFavorito = [...listaDonasFavoritas];
    tempListaFavorito.push(element);
    setListaDonasFavoritas(tempListaFavorito);
  }

  function removeDonutToFavorites(element) {
    const updatedFavoritos = listaDonasFavoritas.filter(
      (dona) => dona.Id !== element.Id
    );
    setListaDonasFavoritas(updatedFavoritos);
  }

  function addNewDonut(element){
    setListaDonas([...listaDonas, element])
  }

  const [listaDonas, setListaDonas] = useState(dataDonut);
  const [listaDonasFavoritas, setListaDonasFavoritas] = useState([]);

  return (
    <div>
      <DonutContext.Provider value={{handleButtonNombreLocal , isNombreLocalClicked, listaDonas,addDonutToFavorites}}>
        <NavBar nombreLocal ="MelRo Donuts" 
                elements={listaDonasFavoritas} 
                removeFavorite={removeDonutToFavorites} 
                NewDonut={addNewDonut}
                value={listaDonas}
        />
        <Outlet />
      </DonutContext.Provider>
    </div>
  );
}

export default App;
