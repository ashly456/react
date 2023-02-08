import React, {useState, useEffect} from "react";

function Pantalla(props){
    const[count, setCount]= useState(0);

    return(

        <div>
           <input type="number" name="pantalla" id="pantalla"/>
        </div>
    )

}
export default Pantalla