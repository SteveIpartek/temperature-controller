import React from 'react';

const TemperaturaDisplay = ({ temperatura }) => {
    let mensaje = "";
    let color = "";
    

    if (temperatura < 15) {
        mensaje = "¡Hace frío!";
        color = "blue";
    } else if (temperatura >= 15 && temperatura < 25) { 
        mensaje = "Temperatura agradable";
        color = "green";
    } else if (temperatura >= 25) {
        mensaje = "¡Hace calor!";
        color = "red";
    }

    return (
        <div>
            <h2>Temperatura Actual: {temperatura}°C</h2>
            <p style={{ color }}>{mensaje}</p>
        </div>
    );
}

export default TemperaturaDisplay;


