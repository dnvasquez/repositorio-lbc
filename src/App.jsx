// dnvasquez/repositorio-lbc/repositorio-lbc-9fb36bfe7f098ccaa5ef8f7a81ae2f94081d09e9/src/App.jsx
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
  
  const handleExternalLink = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank');
      e.target.value = ""; // Resetea el selector a su estado inicial
    }
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        {/* LOGO AGREGADO AQUÍ */}
        <img src="/LCB-Horizontal_blanco.png" alt="Logo LBC Consultores" className="sidebar-logo" />
        
        <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Inicio</button>
        
        <div className="sidebar-separator"></div>

        <h2>Repositorio de datos</h2>
        
        <select
          value={view}
          onChange={(e) => {
            if (e.target.value !== 'home') {
              setView(e.target.value);
            }
          }}
          className={`sidebar-select ${view !== 'home' ? 'active' : ''}`}
        >
          <option value="home" disabled>Selecciona una sección...</option>
          <option value="vegetation">Formaciones Vegetacionales</option>
          <option value="climate">Regiones Climáticas</option>
          <option value="agroclimatic">Zonas Agroclimáticas</option>
          <option value="edaphic">Zonas Edáficas</option>
          <option value="macrozona">Macrozonas Paisajísticas</option>
        </select>

        <div className="sidebar-separator"></div>

        <h2>Centro de Aplicaciones</h2>
       <h4>KWEN Apps</h4>
        <select onChange={handleExternalLink} className="sidebar-select">
          <option value="">Seleccionar...</option>
          <optgroup label="Fauna">
            <option value="https://www.appsheet.com/start/82a7a1d0-aa58-4f81-988f-4f85eb9b4553#appName=KWENfauna-337919552-24-10-08&page=dashboard&table=DarwinCore&view=Centro+de+descargas">Centro de descargas</option>
            <option value="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-Abundancia/">Abundancia de especies</option>
            <option value="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Fauna-potencial/">Fauna Potencial</option>
          </optgroup>
          <optgroup label="Flora">
            <option value="https://www.appsheet.com/start/b59a0549-b78b-4906-86b7-5f43823cd56c#appName=KWENflora-337919552-24-10-21&page=dashboard&table=Base+de+datos&view=Centro+de+descargas">Centro de descargas</option>
            <option value="https://ge6y46-david-vasquez.shinyapps.io/KWEN-Cobertura-flora/">Cobertura relativa</option>
          </optgroup>
          <optgroup label="Suelo">
            <option value="https://www.appsheet.com/start/5a5af7fd-d911-4673-a85a-533ede97bc2d#appName=KWENsuelo-337919552&page=gallery&sort=%5B%7B%22Column%22%3A%22ID+MENU%22%2C%22Order%22%3A%22Ascending%22%7D%5D&table=Menu&view=Menu">Centro de descargas</option>
          </optgroup>
        </select>
        <h4>GEE Apps</h4>
        <select onChange={handleExternalLink} className="sidebar-select">
          <option value="">Seleccionar...</option>
          <option value="https://ee-dnvasque.projects.earthengine.app/view/dem-app">DEM</option>
          <option value="https://ee-dnvasque.projects.earthengine.app/view/rgbimage-app">Imagen RGB</option>
          <option value="https://ee-dnvasque.projects.earthengine.app/view/lcc-app2">LCC</option>
          <option value="https://ee-dnvasque.projects.earthengine.app/view/iv-app">Índices de Vegetación</option>
          <option value="https://ee-dnvasque.projects.earthengine.app/view/e-agrologico">Series de suelo</option>
        </select>
        
      </aside>
      <main className="content">
        {renderPanel()}
      </main>
    </div>
  );
};

export default App;
