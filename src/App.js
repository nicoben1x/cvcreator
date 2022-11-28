import React, { useState } from "react";
import './App.css';

function App() {

  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');

  function addExperiencia() {
    document.querySelector(".exp-form").classList.remove("no-display");
  }

  function preventThis(e) {
    e.preventDefault();
    setNombre(document.querySelector(".nombreClass").value);
    setDni(document.querySelector(".dniClass").value)
    document.querySelector(".resultado").classList.remove("no-display");
    
    //Convierte los datos recibidos del form en un objeto,pero raro.
    const myFormData = new FormData(e.target);
    console.log(myFormData);

    //Convierte ese objeto raro en un objeto normal.
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

  }

  
  function preventThis2(e) {
    e.preventDefault();
    
    
    //Convierte los datos recibidos del form en un objeto,pero raro.
    const myFormData = new FormData(e.target);
    console.log(myFormData);

    //Convierte ese objeto raro en un objeto normal.
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

  }


  return (
    <div className="App">
      <div className="principal-div">
        <h1 >Crea tu CV!</h1>
        <form onSubmit={preventThis} >
          <div className="div-test">
            <label htmlFor="nombre">Ingresa tu nombre:</label>
            <input required className="nombreClass" type="text" name="nombre" />
            <label htmlFor="dni">Ingresa tu DNI:</label>
            <input required className="dniClass" type="number" name="dni" />
            <input className="btn-enviar" type="submit" value="Enviar" />


          </div>


        </form>



        <div className="experiencia">
          <label htmlFor="experienciafor">Ingresa tu Experiencia:</label>
          <button className="btn-enviar" onClick={addExperiencia}>Añadir</button>
          <form onSubmit={preventThis2}className="exp-form no-display">
            <label htmlFor="nombre-exp">Empresa:</label>
            <input required className="nombre-exp" type="text" name="nombre-exp" />
            <label htmlFor="empleo-exp">Empleo:</label>
            <input required className="empleo-exp" type="text" name="empleo-exp" />
            <label htmlFor="fecha-exp">Fecha:</label>
            <input required className="fecha-exp" type="text" name="fecha-exp" />
            <label htmlFor="desc-exp">Descripción:</label>
            <input required className="desc-exp" type="text" name="desc-exp" />
            <label htmlFor="imagen-exp">Imagen:</label>
            <input required className="imagen-exp" type="text" name="imagen-exp" />
            <input className="btn-enviar" type="submit" value="Enviar" />
          </form>
        </div>





      </div>

      <div>
        <h3 className="resultado no-display">Hola {nombre}, tu dni es {dni}.</h3>
      </div>

    </div>
  );
}

export default App;
