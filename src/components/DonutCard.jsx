import "../Css/DonutCard.css";
import { InfoDonut } from "./InfoDonut";
import { DonutContext } from "../App";
import { useContext } from "react";
export function DonutCard(props) {

  const donutContext = useContext(DonutContext);

  const alertStyle = {
      margin:"10px",
      display:"flex",
      width:"70%",
      justifyContent: "space-between",
      fontFamily: "Arial, sans-serif",
      fontSize: "18px"
  };

  return (
    <>
      {donutContext.isNombreLocalClicked ? (
        <div class="alert alert-danger" role="alert" style={alertStyle}>
            <a>Descubre el paraíso de las donas en MelRo Donuts, donde cada mordisco es una explosión de sabor. 
            Desde las clásicas glaseadas hasta las creaciones únicas, nuestras donas son una delicia fresca y tentadora. 
            Ven a disfrutar de momentos dulces en MelRo Donuts, Avenida Glaseado, #123, Ciudad Dulce, Nicaragua. 
            ¡Te esperamos con las mejores donas de la ciudad!</a>
            <img src="https://i.pinimg.com/564x/f4/ce/44/f4ce44ea6e7d8918823e765335c9443f.jpg" width="120px" height="120px"/>
        </div>
      ) : null}
      <div className="card-container">
        <div className="card-set">
          {props.value.map((value) => (
            <InfoDonut value={value} addFavorite={props.addFavorite} />
          ))}
        </div>
      </div>
    </>
  );
}