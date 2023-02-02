import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{
    
    const [valor,setValor]=useState(0)
    const cero=()=>{setValor(valor+0)}
    const uno=()=>{setValor(valor+1)}
    const dos=()=>{setValor(valor+2)}
    const tres=()=>{setValor(valor+3)}
    const cuatro=()=>{setValor(valor+4)}
    const cinco=()=>{setValor(valor+5)}
    const seis=()=>{setValor(valor+6)}
    const siete=()=>{setValor(valor+7)}
    const ocho=()=>{setValor(valor+8)}
    const nueve=()=>{setValor(valor+9)}
    const multiplicacion=()=>{setValor(valor)}
    const divison=()=>{setValor(valor)}
    const suma=()=>{setValor(valor)}
    const resta=()=>{setValor(valor)}
    const igual=()=>{setValor(valor)}
    const borrar=()=>{setValor(valor)}


    return(
        <Fragment>
            <h1>Calculadora En React</h1>
            <tr>
                <td colSpan={4}><input type="number" name="pantallaAriba" id="pantallaAriba" /></td>
            </tr>
            <tr>
                <td colSpan={4}><input type="number" name="pantallaAbajo" id="pantallaAbajo" /></td>
            </tr>
            <tr>
               <td>
               <button type="button" onClick={borrar}>AC</button>
                </td> 
                <td> <button type="button" onClick={divison}>/</button> 
               </td>
            </tr>
            <tr>
               <td>
               <button type="button" onClick={siete}>7</button>
                </td> 
                <td> <button type="button" onClick={ocho}>8</button> 
                </td>
                <td> <button type="button" onClick={nueve}>9</button> 
                </td>
                <td> <button type="button" onClick={multiplicacion}>*</button> 
                </td>
            </tr>
            <tr>
               <td>
               <button type="button" onClick={cuatro}>4</button>
                </td> 
                <td> <button type="button" onClick={cinco}>5</button> 
                </td>
                <td> <button type="button" onClick={seis}>6</button> 
                </td>
                <td> <button type="button" onClick={resta}>-</button> 
                </td>
            </tr>
            <tr>
               <td>
               <button type="button" onClick={uno}>1</button>
                </td> 
                <td> <button type="button" onClick={dos}>2</button> 
                </td>
                <td> <button type="button" onClick={tres}>3</button> 
                </td>
                <td> <button type="button" onClick={suma}>+</button> 
                </td>
            </tr>
            <tr>
               <td>
               <button type="button" onClick={cero}>0</button>
                </td> 
                <td> <button type="button" onClick={igual}>=</button> 
                </td>
            </tr>
             
           
        </Fragment>
    )
}

export default Contador
