import React, { useState } from "react";

export function Educacion({arr}) {

    return (<div>{arr.map((educacion, index) => (
        <div key={index}>
            <h3>{educacion["nombre-edu"]}</h3>
            <p>{educacion["titulo-edu"]}</p>
        </div>
    ))}</div>);


}

