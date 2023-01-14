import React, { useState } from "react";

export function Idiomas({arr}) {

    return (<div>{arr.map((idioma, index) => (
        <div key={index}>
            <h3>{idioma["nombre-idiomas"]}</h3>
            <p>{idioma["nivel-idiomas"]}</p>
        </div>
    ))}</div>);


}

