import React from 'react';
import '../styles/home.css';

const HomePanel = () => {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Repositorio de Datos de LBC Consultores</h1>
        <p className="subtitle">
          Una herramienta de consulta
        </p>

        <div className="description-box">
          <p className="description-text">
            Este repositorio centraliza información geoespacial y ambiental de Chile, proporcionando un acceso rápido y sencillo a datos clave para la redacción de informes.
          </p>
          <p className="description-text">
            Utiliza el menú lateral para navegar por las diferentes secciones:
          </p>
          <ul>
            <li><strong>Formaciones Vegetacionales:</strong> Basado en Gajardo (1994).</li>
            <li><strong>Regiones Climáticas:</strong> Basado en Sarricolea et al. (2017).</li>
            <li><strong>Zonas Agroclimáticas:</strong> Basado en Santibañez et al. (2008).</li>
            <li><strong>Zonas Edáficas:</strong> Basado en Luzio (2009).</li>
            <li><strong>Macrozonas y subzonas Paisajísticas:</strong> Basado en MEC Consultores (2018).</li>
          </ul>
        </div>
        
        <div className="footer">
          <p>© 2025 LBC Consultores Ambientales</p>
          <p>Autor: david.vasquez@lbconservation.org</p>
        </div>
      </div>
    </div>
  );
};

export default HomePanel;
