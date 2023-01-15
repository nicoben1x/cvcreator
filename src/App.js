import React, { useState, useEffect } from "react";
import './App.css';
import { Educacion } from "./Educacion";
import { Experiencia } from "./Experiencia";
import { Habilidad } from "./Habilidad";
import { Idiomas } from "./Idiomas";
import { Usuario } from "./Usuario";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [experienciaitem, setExperiencia] = useState([]);
  const [educacionitem, setEducacion] = useState([]);
  const [habilidaditem, setHabilidad] = useState([]);
  const [idiomaitem, setIdioma] = useState([]);
  const [usuarioi, setUsuarioi] = useState({});

  function addExperiencia() {
    document.querySelector(".exp-form").reset();
    document.querySelector(".exp-form").classList.toggle("no-display");
  }

  function addEducacion() {
    document.querySelector(".edu-form").reset();
    document.querySelector(".edu-form").classList.toggle("no-display");
  }

  function addSkills() {
    document.querySelector(".skills-form").reset();
    document.querySelector(".skills-form").classList.toggle("no-display");
  }

  function addIdiomas() {
    document.querySelector(".idiomas-form").reset();
    document.querySelector(".idiomas-form").classList.toggle("no-display");
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
    const newArray = [...experienciaitem, formDataObj];
    setExperiencia(newArray);
    console.log(experienciaitem);

    //

    document.querySelector(".exp-form").classList.add("no-display");

  }

  function preventThis2Idiomas(e) {

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
    const newArray = [...idiomaitem, formDataObj];
    setIdioma(newArray);
    console.log(idiomaitem);

    //

    document.querySelector(".idiomas-form").classList.add("no-display");

  }

  function preventThis2Habilidad(e) {

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
    const newArray = [...habilidaditem, formDataObj];
    setHabilidad(newArray);
    console.log(habilidaditem);

    //

    document.querySelector(".skills-form").classList.add("no-display");

  }

  function preventThis2Educacion(e) {

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
    const newArray = [...educacionitem, formDataObj];
    setEducacion(newArray);
    console.log(educacionitem);

    //

    document.querySelector(".edu-form").classList.add("no-display");

  }

  function preventThis(e) {
    e.preventDefault();


    //Convierte los datos recibidos del form en un objeto,pero raro.
    const myFormData = new FormData(e.target);
    console.log(myFormData);

    //Convierte ese objeto raro en un objeto normal.
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

    //Añade el objeto a la lista de experiencias
    const newArray = [formDataObj];
    setUsuarioi(formDataObj);


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


            <input className="btn-enviar" type="submit" value="Guardar" />


          </div>


        </form>

        <Usuario arr={usuarioi} />




        <div className="experiencia">
          <label htmlFor="experienciafor">Ingresa tu Experiencia:</label>

          <button className="btn-enviar" onClick={addExperiencia}>↓↑</button>
          <form onSubmit={preventThis2} id="exp-form-id" className="exp-form no-display">
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
            <input className="btn-enviar" type="submit" value="Guardar" />
          </form>




          <Experiencia arr={experienciaitem} />





        </div>

        <div className="educacion">
          <label htmlFor="educacionfor">Ingresa tu Educacion:</label>
          <button className="btn-enviar" onClick={addEducacion}>↓↑</button>
          <form onSubmit={preventThis2Educacion} className="edu-form no-display">
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
            <input className="btn-enviar" type="submit" value="Guardar" />
          </form>


          <Educacion arr={educacionitem} />











        </div>

        <div className="skills">
          <label htmlFor="skillsfor">Ingresa tu Habilidad:</label>
          <button className="btn-enviar" onClick={addSkills}>↓↑</button>
          <form onSubmit={preventThis2Habilidad} className="skills-form no-display">
            <label htmlFor="nombre-skills">Habilidad:</label>
            <input required className="nombre-skills" type="text" name="nombre-skills" />
            <label htmlFor="nivel-skills">Porcentaje:</label>
            <input required className="nivel-skills" type="text" name="nivel-skills" />
            <input className="btn-enviar" type="submit" value="Guardar" />
          </form>


          <Habilidad arr={habilidaditem} />


        </div>

        <div className="idiomas">
          <label htmlFor="idiomasfor">Ingresa tu Idioma:</label>
          <button className="btn-enviar" onClick={addIdiomas}>↓↑</button>
          <form onSubmit={preventThis2Idiomas} className="idiomas-form no-display">
            <label htmlFor="nombre-idiomas">Idioma:</label>
            <input required className="nombre-idiomas" type="text" name="nombre-idiomas" />
            <label htmlFor="nivel-idiomas">Porcentaje:</label>
            <input required className="nivel-idiomas" type="text" name="nivel-idiomas" />
            <input className="btn-enviar" type="submit" value="Guardar" />
          </form>


          <Idiomas arr={idiomaitem} />


        </div>





      </div>

      <div>Holawasdfsdfsdffsa</div>
      <Link state={{usuarioi}} to="/about">
        <button>About</button>
      </Link>




    </div>




  );


}

export default App;


