//importamos React y component para poder crear un componente de clase
import React, { Component } from "react";

//Definimos una clase que extiende de component (esto lo convierte en component de React)
class ClassComponent extends Component {

    //el metodo render() es obligatorio en componentes de clase
    //aqui es donde se retorna lo que se va a mostrar en pantalla
    render() {
        return (
            <div>
                {/*Este texto se renderiza en el navegador */}
                <h2>Hola, soy un componente de clase </h2>
            </div>
        );
    }
}

//Exportamos el componente para poder usarlo en otros archivos
export default ClassComponent;