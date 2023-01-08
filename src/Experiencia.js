import React, { useState } from "react";

export function Experiencia({arr}) {

    return (<div>{arr.map((experiencia, index) => (
        <div key={index}>
            <h3>{experiencia["nombre-exp"]}</h3>
            <p>{experiencia["fecha-exp"]}</p>
        </div>
    ))}</div>);


}

