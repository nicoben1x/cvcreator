import React, { useState } from "react";
import './App.css';

function App() {

  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [experienciaitem, setExperiencia] = useState([]);

  function addExperiencia() {
    document.querySelector(".exp-form").classList.remove("no-display");
  }

  function addEducacion() {
    document.querySelector(".edu-form").classList.remove("no-display");
  }

  function addSkills() {
    document.querySelector(".skills-form").classList.remove("no-display");
  }

  function addIdiomas() {
    document.querySelector(".idiomas-form").classList.remove("no-display");
  }

  function preventThis2(e) {

    // IMPORTANTE !! -- Hay que hacer una funcion por cada segmento, esta esta hecha para experiencia.


    //Evita que se recarge toda la pagina web
    e.preventDefault();

    //Convierte los datos recibidos del form en un objeto,pero raro.
    const myFormData = new FormData(e.target);
    console.log(myFormData);

    //Convierte ese objeto raro en un objeto normal.
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

    //Añade el objeto a la lista de experiencias
    const newArray = experienciaitem;
    newArray.push(formDataObj)
    setExperiencia(newArray);
    console.log(experienciaitem);

    //

    document.querySelector(".exp-form").classList.add("no-display");

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

  return (
    <div className="App">
      <div className="principal-div">
        <h1 >Crea tu CV!</h1>
        <form onSubmit={preventThis} >
          <div className="div-test">
            <label htmlFor="nombre">Ingresa tu nombre:</label>
            <input required className="nombreClass" type="text" name="nombre" />
            <label htmlFor="profesion">Ingresa tu profesion:</label>
            <input required className="profesionClass" type="text" name="profesion" />
            <label htmlFor="desc-per">Descripción:</label>
            <input required className="desc-per" type="text" name="desc-per" />
            <label htmlFor="tel-per">Telefono:</label>
            <input required className="tel-per" type="text" name="tel-per" />
            <label htmlFor="email-per">Email:</label>
            <input required className="email-per" type="email" name="email-per" />
            <label htmlFor="dir-per">Direccion:</label>
            <input required className="dir-per" type="text" name="dir-per" />
            <label htmlFor="edad-per">Edad:</label>
            <input required className="edad-per" type="text" name="edad-per" />
            
            <label htmlFor="dni">Ingresa tu DNI:</label>
            <input required className="dniClass" type="number" name="dni" />

            <label htmlFor="imagen-per">Imagen:</label>
            <input required className="imagen-per" type="text" name="imagen-per" />


            <input className="btn-enviar" type="submit" value="Enviar" />


          </div>


        </form>



        <div className="experiencia">
          <label htmlFor="experienciafor">Ingresa tu Experiencia:</label>
          <button className="btn-enviar" onClick={addExperiencia}>Añadir</button>
          <form onSubmit={preventThis2} className="exp-form no-display">
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

        <div className="educacion">
          <label htmlFor="educacionfor">Ingresa tu Educacion:</label>
          <button className="btn-enviar" onClick={addEducacion}>Añadir</button>
          <form onSubmit={preventThis2} className="edu-form no-display">
            <label htmlFor="nombre-edu">Institucion:</label>
            <input required className="nombre-edu" type="text" name="nombre-edu" />
            <label htmlFor="titulo-edu">Titulo:</label>
            <input required className="titulo-edu" type="text" name="titulo-edu" />
            <label htmlFor="fecha-edu">Fecha:</label>
            <input required className="fecha-edu" type="text" name="fecha-edu" />
            <label htmlFor="desc-edu">Descripción:</label>
            <input required className="desc-edu" type="text" name="desc-edu" />
            <label htmlFor="imagen-exp">Imagen:</label>
            <input required className="imagen-edu" type="text" name="imagen-edu" />
            <input className="btn-enviar" type="submit" value="Enviar" />
          </form>
        </div>

        <div className="skills">
          <label htmlFor="skillsfor">Ingresa tu Habilidad:</label>
          <button className="btn-enviar" onClick={addSkills}>Añadir</button>
          <form onSubmit={preventThis2} className="skills-form no-display">
            <label htmlFor="nombre-skills">Habilidad:</label>
            <input required className="nombre-skills" type="text" name="nombre-skills" />
            <label htmlFor="nivel-skills">Porcentaje:</label>
            <input required className="nivel-skills" type="text" name="nivel-skills" />
            <input className="btn-enviar" type="submit" value="Enviar" />
          </form>
        </div>

        <div className="idiomas">
          <label htmlFor="idiomasfor">Ingresa tu Idioma:</label>
          <button className="btn-enviar" onClick={addIdiomas}>Añadir</button>
          <form onSubmit={preventThis2} className="idiomas-form no-display">
            <label htmlFor="nombre-idiomas">Idioma:</label>
            <input required className="nombre-idiomas" type="text" name="nombre-idiomas" />
            <label htmlFor="nivel-idiomas">Porcentaje:</label>
            <input required className="nivel-idiomas" type="text" name="nivel-idiomas" />
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
