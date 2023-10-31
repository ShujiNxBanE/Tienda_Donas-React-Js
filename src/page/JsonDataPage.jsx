import { DonutContext } from "../App";
import React, { useContext } from "react";

const jsonStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '750px',
    margin: '20px auto',
  },
  jsonBlock: {
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
    color: '#333',
  },
};

export function JsonDataPage() {
  const donutContext = useContext(DonutContext);
  const { listaDonas } = donutContext;

  return (
    <div style={jsonStyles.container}>
      <pre style={jsonStyles.jsonBlock}>
        {'[\n'}
        {listaDonas.map((data, index) => (
          <span key={index}>
            {'  {\n'}
            {'    "Id": ' + data.Id + ',\n'}
            {'    "Nombre": "' + data.Nombre + '",\n'}
            {'    "Precio": ' + data.Precio + ',\n'}
            {'    "Imagen": "' + data.Imagen + '",\n'}
            {'    "Descripcion": "' + data.Descripcion + '"\n'}
            {'  },\n'}
          </span>
        ))}
        {']\n'}
      </pre>
    </div>
  );
}
