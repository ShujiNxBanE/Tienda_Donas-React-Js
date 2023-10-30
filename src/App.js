import './App.css';
import { NavBar } from './components/NavBar';
import { DonutCard } from './components/DonutCard';
import { dataDonut } from "./data/Donut"
import { useState } from 'react';

function App() {

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
      <NavBar nombreLocal ="MelRo Donuts" 
              elements={listaDonasFavoritas} 
              removeFavorite={removeDonutToFavorites} 
              NewDonut={addNewDonut}
              value={listaDonas}
      />
      <DonutCard value={listaDonas} addFavorite={addDonutToFavorites} />
      
    </div>
  );
}

export default App;
