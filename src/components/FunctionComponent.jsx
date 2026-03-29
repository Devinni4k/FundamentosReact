// Definimos un componente funcional (forma moderna de crear componentes)
const FunctionComponent = () => {

    // Retornamos lo que se va a mostrar en pantalla
    return (
        <div>
            {/* Este texto se renderiza en el navegador */}
            <h2>Hola, soy un componente funcional </h2>
        </div>
    );
};

// Exportamos el componente para usarlo en App.jsx
export default FunctionComponent;