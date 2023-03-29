import { createContext, useState, useEffect } from "react";

// Creo el contexto y lo guardo en una constante. Se exporta para poder envolver el componente que necesite el contexto (Ej: main.jsx)
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Almacena el resultado de la solicitud http
  const [data, setData] = useState([]);
  // Indica visualmente si se esta realizando la petición http
  const [isLoading, setIsLoading] = useState(false);
  // Almacena cualquier error que pueda ocurrir en la solicitud http
  const [error, setError] = useState("");

  useEffect(() => {
    // Activamos el loading ya que hare una solicitud http
    setIsLoading(true);

    try {
      // Realización solicitud http
      fetch("pizzas.json")
        .then((response) => {
          // Consulto si la respuesta es exitosa
          if (!response.ok) {
            throw new Error("No se pudo obtener la respuesta");
          }
          // Convierto respuesta en json
          return response.json();
        })
        .then((jsonData) => {
          // Actualizo el estado con la respuesta de la consulta
          setData(jsonData);
        });
    } catch (error) {
      // Actualizar el estado de error, si es que existiese
      setError(error.message);
    } finally {
      // Se actualiza estado loading ya que la consulta ha finalizado
      setIsLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
