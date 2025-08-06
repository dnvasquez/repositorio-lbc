import React from 'react';
import '../styles/home.css';

const HomePanel = () => {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Portal de Herramientas y Datos LBC</h1>
        <p className="subtitle">
          Punto de acceso centralizado a repositorios y aplicaciones.
        </p>

        <div className="description-box">
          <p className="intro-text">
            Bienvenido al portal de datos de LBC Consultores. Esta plataforma centraliza y agiliza el acceso a datos y herramientas digitales.
          </p>

          <div className="home-section">
            <h4 className="section-title">📂 Repositorio de Datos</h4>
            <p className="section-description">
              Accede a información para la elaboración de informes, incluyendo:
            </p>
            <ul className="data-list">
            <li><strong>Formaciones Vegetacionales:</strong> Basado en Gajardo (1994).</li>
            <li><strong>Regiones Climáticas:</strong> Basado en Sarricolea et al. (2017).</li>
            <li><strong>Zonas Agroclimáticas:</strong> Basado en Santibañez et al. (2008).</li>
            <li><strong>Zonas Edáficas:</strong> Basado en Luzio (2009).</li>
            <li><strong>Macrozonas y subzonas Paisajísticas:</strong> Basado en MEC Consultores (2018).</li>
            </ul>
          </div>

          <div className="home-section">
            <h4 className="section-title">🚀 Centro de Aplicaciones</h4>
            <p className="section-description">
              Encuentra los enlaces directos a nuestras aplicaciones, como las <strong>KWEN Apps</strong> (Fauna, Flora y Suelo) y las aplicaciones de Google Earth Engine <strong>(GEE Apps)</strong>.
            </p>
          </div>
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
