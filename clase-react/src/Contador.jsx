import React, {useState, useEffect} from "react";

function Botones(props){
    const[count, setCount]= useState(0);

    return(

        <div>
            <button >{props.nombre}</button>
        </div>
    )

}
export default Botones