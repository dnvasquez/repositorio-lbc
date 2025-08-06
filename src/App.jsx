// dnvasquez/repositorio-lbc/repositorio-lbc-bfead794c41105587190b80b8f2e32f7274b5fd0/src/App.jsx
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
        
        <div className="sidebar-separator"></div>

        <div className="sidebar-section">
          <h2>Enlaces LBC</h2>
          <a href="https://www.appsheet.com/start/82a7a1d0-aa58-4f81-988f-4f85eb9b4553#appName=KWENfauna-337919552-24-10-08&page=dashboard&table=DarwinCore&view=Centro+de+descargas" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Fauna
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-Abundancia/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Fauna Abundancia
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-potencial/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Fauna Potencial
          </a>
          <div className="sidebar-separator"></div>
          <a href="https://www.appsheet.com/start/b59a0549-b78b-4906-86b7-5f43823cd56c#appName=KWENflora-337919552-24-10-21&page=dashboard&table=Base+de+datos&view=Centro+de+descargas" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Flora
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Cobertura-flora/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Flora Cobertura
          </a>
          <div className="sidebar-separator"></div>
          <a href="https://www.appsheet.com/start/5a5af7fd-d911-4673-a85a-533ede97bc2d#appName=KWENsuelo-337919552&page=gallery&sort=%5B%7B%22Column%22%3A%22ID+MENU%22%2C%22Order%22%3A%22Ascending%22%7D%5D&table=Menu&view=Menu" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            KWEN Suelo
          </a>
        </div>
      </aside>
      <main className="content">
        {renderPanel()}
      </main>
    </div>
  );
};

export default App;
