import React from 'react';


function Boton(props) {
    return (
        <button style={{color:'red'}}>
            Aprietame fuerte {props.userName}
        </button>
    )
};
export default Boton;