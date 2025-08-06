// dnvasquez/repositorio-lbc/repositorio-lbc-ac3608d3abbf348a38d7de449da6e78542511611/src/App.jsx
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
        <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Inicio</button>
        
        <h2>Sección de informe</h2>
        
        <select
          value={view}
          onChange={(e) => {
            if (e.target.value !== 'home') {
              setView(e.target.value);
            }
          }}
          className={`sidebar-select ${view !== 'home' ? 'active' : ''}`}
        >
          <option value="home" disabled>Selecciona una sección</option>
          <option value="vegetation">Formaciones Vegetacionales</option>
          <option value="climate">Regiones Climáticas</option>
          <option value="agroclimatic">Zonas Agroclimáticas</option>
          <option value="edaphic">Zonas Edáficas</option>
          <option value="macrozona">Macrozonas Paisajísticas</option>
        </select>

        <h2>Enlaces externos</h2>
       
        <div className="sidebar-section">
          <h2>KWEN Apps</h2>
          <h4>Fauna</h4>
          <a href="https://www.appsheet.com/start/82a7a1d0-aa58-4f81-988f-4f85eb9b4553#appName=KWENfauna-337919552-24-10-08&page=dashboard&table=DarwinCore&view=Centro+de+descargas" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Centro de descargas
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-Abundancia/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Abundancia de especies
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-potencial/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Fauna Potencial
          </a>
          <div className="sidebar-separator"></div>
          <h4>Flora</h4>
          <a href="https://www.appsheet.com/start/b59a0549-b78b-4906-86b7-5f43823cd56c#appName=KWENflora-337919552-24-10-21&page=dashboard&table=Base+de+datos&view=Centro+de+descargas" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Centro de descargas
          </a>
          <a href="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Cobertura-flora/" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Cobertura relativa
          </a>
          <div className="sidebar-separator"></div>
          <h4>Suelo</h4>
          <a href="https://www.appsheet.com/start/5a5af7fd-d911-4673-a85a-533ede97bc2d#appName=KWENsuelo-337919552&page=gallery&sort=%5B%7B%22Column%22%3A%22ID+MENU%22%2C%22Order%22%3A%22Ascending%22%7D%5D&table=Menu&view=Menu" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            Centro de descargas
          </a>
          <div className="sidebar-separator"></div>
          <h2>GEE Apps</h2>
          <a href="https://ee-dnvasque.projects.earthengine.app/view/dem-app" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            DEM App
          </a>
          <a href="https://ee-dnvasque.projects.earthengine.app/view/rgbimage-app" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            RGB App
          </a>
          <a href="https://ee-dnvasque.projects.earthengine.app/view/lcc-app2" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            LCC App
          </a>
          <a href="https://ee-dnvasque.projects.earthengine.app/view/iv-app" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            IV App
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
