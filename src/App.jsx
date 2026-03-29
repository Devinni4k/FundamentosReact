// Importamos los componentes que creamos
import ClassComponent from "./components/Classcomponents";
import FunctionComponent from "./components/FunctionComponent";

// este es el componente principal de la aplicacion
function App() {

  //el return define lo que se muestra en pantalla
  return (
    <div>
      {/* Titulo principal de la aplicacion) */}
      <h1> Mi Primer Proyecto en React </h1>

      {/*Aqui usamos (renderizamos) el componente de clase */}
      <ClassComponent />

      {/*Aqui usamos (renderizamos) el componente funcional */}
      <FunctionComponent />
    </div>
  );
}

// exportamos app para que react lo use como componente principal
export default App;