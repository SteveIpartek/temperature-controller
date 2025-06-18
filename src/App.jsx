import React, { useState, useEffect } from 'react';
import './App.css';
import TemperatureDisplay from './components/TemperatureDisplay.jsx';
import TemperatureControls from './components/TemperatureControls.jsx';
import HistoryList from './components/HistoryList.jsx';

export default function App() {
  const [history, setHistory] = useState(() => {
    try {
      const storedHistory = localStorage.getItem('temperatureHistory');
      return storedHistory ? JSON.parse(storedHistory) : [];
    } catch (error) {
      console.error("Error cargando el historial de localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('temperatureHistory', JSON.stringify(history));
    } catch (error) {
      console.error("Error guardando el historial en localStorage:", error);
    }
  }, [history]);

  const [temperatura, setTemperatura] = useState(20);

  const addHistoryEntry = (temp) => {
    const newEntry = {
      time: new Date().toISOString(),
      temperature: temp,
    };
    setHistory((prevHistory) => [...prevHistory, newEntry]);
  };

  const aumentarTemperatura = () => {
    const nuevaTemp = Math.min(temperatura + 1, 40); 
    setTemperatura(nuevaTemp);
    addHistoryEntry(nuevaTemp);
  };

  const disminuirTemperatura = () => {
    const nuevaTemp = Math.max(temperatura - 1, 0); 
    setTemperatura(nuevaTemp);
    addHistoryEntry(nuevaTemp);
  };

  const resetearTemperatura = () => {
    const nuevaTemp = 20;
    setTemperatura(nuevaTemp);
    addHistoryEntry(nuevaTemp);
    setHistory([]); // si quieres limpiar el historial cuando resetees
  };

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperatura={temperatura} />
      <TemperatureControls
        onIncrease={aumentarTemperatura}
        onDecrease={disminuirTemperatura}
        onReset={resetearTemperatura}
      />
      <HistoryList history={history} />
    </div>
  );
}



