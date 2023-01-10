import React, { useState } from "react";

export function Usuario({arr}) {

    return(
        <div>
            <h3>{arr.nombre}</h3>
            <p>{arr.profesion}</p>
        </div>
   );


}
