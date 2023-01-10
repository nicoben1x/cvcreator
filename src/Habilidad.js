import React, { useState } from "react";

export function Habilidad({arr}) {

    return (<div>{arr.map((habilidad, index) => (
        <div key={index}>
            <h3>{habilidad["nombre-skills"]}</h3>
            <p>{habilidad["nivel-skills"]}</p>
        </div>
    ))}</div>);


}
