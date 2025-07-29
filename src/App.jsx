import React, { useState } from 'react';
import ClimatePanel from './components/ClimatePanel';
import VegetationPanel from './components/VegetationPanel';

const App = () => {
  const [view, setView] = useState('vegetation');

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>LBC Panel</h2>
        <button className={view==='vegetation' ? 'active' : ''} onClick={() => setView('vegetation')}>Formaciones Vegetacionales</button>
        <button className={view==='climate' ? 'active' : ''} onClick={() => setView('climate')}>Regiones Climáticas</button>
      </aside>
      <main className="content">
        {view === 'vegetation' ? <VegetationPanel /> : <ClimatePanel />}
      </main>
    </div>
  );
};

export default App;