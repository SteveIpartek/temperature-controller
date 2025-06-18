import React from 'react';
function HistoryList({ history }) {
    return (
        <div>
        <h3>Historial de cambios</h3>
        <ul>
            {history.map((entry, index) =>
            <li key={index}>
                {new Date(entry.time).toLocaleTimeString()} - {entry.temperature}°C
            </li>
            )}
        </ul>
        </div>
    )
}

export default HistoryList;