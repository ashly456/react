
import React from 'react';

const BotonLimpiar = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonLimpiar;