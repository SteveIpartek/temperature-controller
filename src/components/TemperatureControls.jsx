import React from 'react';
const TemperatureControls = ({ onIncrease, onDecrease, onReset }) => {
    return (
        <div className="temperature-controls">
            <button onClick={onIncrease}>Subir Temperatura</button>
            <button onClick={onDecrease}>Bajar Temperatura</button>
            <button onClick={onReset}>Reiniciar Temperatura</button>
        </div>
    );
};

export default TemperatureControls;