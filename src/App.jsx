import React, { useState } from 'react';
import ClimatePanel from './components/ClimatePanel';
import VegetationPanel from './components/VegetationPanel';
import MacrozonaPanel from './components/MacrozonaPanel';
import EdaphicPanel from './components/EdaphicPanel';

const App = () => {
  const [view, setView] = useState('vegetation');

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Repositorio de datos</h2>
        <button className={view==='vegetation' ? 'active' : ''} onClick={() => setView('vegetation')}>Formaciones Vegetacionales</button>
        <button className={view==='climate' ? 'active' : ''} onClick={() => setView('climate')}>Regiones Climáticas</button>
        <button className={view==='macrozona' ? 'active' : ''} onClick={() => setView('macrozona')}>Macro y subzonas de paisaje</button>
        <button className={view==='edaphic' ? 'active' : ''} onClick={() => setView('edaphic')}>Zonas Edáficas</button>
      </aside>
      <main className="content">
        {view === 'vegetation' && <VegetationPanel />}
        {view === 'climate' && <ClimatePanel />}
        {view === 'macrozona' && <MacrozonaPanel />}
        {view === 'edaphic' && <EdaphicPanel />}
      </main>
    </div>
  );
};

export default App;
