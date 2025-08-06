// dnvasquez/repositorio-lbc/repositorio-lbc-ac3608d3abbf348a38d7de449da6e78542511611/src/components/HomePanel.jsx
import React from 'react';
import '../styles/home.css';

const HomePanel = () => {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Portal de Herramientas y Datos LBC</h1>
        <p className="subtitle">
          Tu punto de acceso centralizado a repositorios y aplicaciones.
        </p>

        <div className="description-box">
          <p className="description-text">
            Bienvenido al portal unificado de LBC Consultores. Esta plataforma ha sido diseñada para centralizar y agilizar el acceso a todas nuestras herramientas digitales, reuniendo en un solo lugar la información para informes y las aplicaciones de uso frecuente.
          </p>
          <p className="description-text">
            Utiliza el menú lateral para navegar por las dos áreas principales:
          </p>
          <ul>
            <li>
              <strong>Repositorio de Datos:</strong> Accede a información clave para la elaboración de informes, incluyendo:
              <ul>
            <li><strong>Formaciones Vegetacionales:</strong> Basado en Gajardo (1994).</li>
            <li><strong>Regiones Climáticas:</strong> Basado en Sarricolea et al. (2017).</li>
            <li><strong>Zonas Agroclimáticas:</strong> Basado en Santibañez et al. (2008).</li>
            <li><strong>Zonas Edáficas:</strong> Basado en Luzio (2009).</li>
            <li><strong>Macrozonas y subzonas Paisajísticas:</strong> Basado en MEC Consultores (2018).</li>
              </ul>
            </li>
            <li>
              <strong>Centro de Aplicaciones:</strong> Encuentra enlaces directos a nuestras aplicaciones externas, como las <strong>KWEN Apps</strong> (Fauna, Flora, Suelo) y las <strong>GEE Apps</strong>.
            </li>
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
