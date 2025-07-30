import React, { useState } from 'react';
import ClimatePanel from './components/ClimatePanel';
import VegetationPanel from './components/VegetationPanel';
import MacrozonaPanel from './components/MacrozonaPanel';
import EdaphicPanel from './components/EdaphicPanel';
import HomePanel from './components/HomePanel';
import AgroclimaticPanel from './components/AgroclimaticPanel';

const App = () => {
  const [view, setView] = useState('home');

  const renderPanel = () => {
    switch (view) {
      case 'vegetation':
        return <VegetationPanel />;
      case 'climate':
        return <ClimatePanel />;
      case 'macrozona':
        return <MacrozonaPanel />;
      case 'edaphic':
        return <EdaphicPanel />;
      case 'agroclimatic':
        return <AgroclimaticPanel />;
      case 'home':
      default:
        return <HomePanel />;
    }
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Repositorio de datos</h2>
        <button className={view==='home' ? 'active' : ''} onClick={() => setView('home')}>Inicio</button>
        <button className={view==='vegetation' ? 'active' : ''} onClick={() => setView('vegetation')}>Formaciones Vegetacionales</button>
        <button className={view==='climate' ? 'active' : ''} onClick={() => setView('climate')}>Regiones Climáticas</button>
        <button className={view==='agroclimatic' ? 'active' : ''} onClick={() => setView('agroclimatic')}>Zonas Agroclimáticas</button>
        <button className={view==='edaphic' ? 'active' : ''} onClick={() => setView('edaphic')}>Zonas Edáficas</button>
        <button className={view==='macrozona' ? 'active' : ''} onClick={() => setView('macrozona')}>Macrozonas Paisajísticas</button>
      </aside>
      <main className="content">
        {renderPanel()}
      </main>
    </div>
  );
};

export default App;
