import React, { useState } from 'react';
import '../styles/climate.css';

const ClimatePanel = () => {
      const [selectedClimateCode, setSelectedClimateCode] = useState('');

      const climateData = [
        {
          code: "ET",
          name: "Tundra por Altura",
          description: "Esta clasificación climática se caracteriza por temperaturas medias anuales por debajo de 10°C debido a la elevación de los Andes, con precipitaciones escasas que generalmente ocurren en forma de nieve durante los meses de invierno. La vegetación es limitada y está adaptada a condiciones de alta montaña, con una estación de crecimiento muy corta y condiciones ambientales extremas que definen este ecosistema de alta altitud."
        },
        {
          code: "BWk",
          name: "Desértico Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de 200 mm anuales) y temperaturas medias anuales inferiores a 18°C, típico de las regiones del Desierto de Atacama y zonas áridas del norte de Chile. Las condiciones de alta presión atmosférica y la influencia de la corriente fría de Humboldt generan un ambiente desértico con amplias oscilaciones térmicas diarias y una vegetación prácticamente inexistente."
        },
        {
          code: "Csb",
          name: "Mediterráneo de Verano Templado",
          description: "Esta clasificación climática se caracteriza por un régimen de precipitaciones concentradas en los meses de invierno (mayo-agosto) con veranos secos y templados, donde las temperaturas del mes más cálido no superan los 22°C. La influencia oceánica modera las temperaturas extremas y reduce la amplitud térmica anual, generando condiciones climáticas favorables para el desarrollo de vegetación esclerófila y actividades agrícolas de la zona centro-sur de Chile."
        },
        {
          code: "BSk",
          name: "Semiárido Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones escasas (entre 200-400 mm anuales) concentradas principalmente en los meses de invierno, con temperaturas medias anuales inferiores a 18°C y veranos relativamente secos. Este clima de transición entre las zonas áridas del norte y las templadas del sur se presenta principalmente en la precordillera y valles interiores, donde la continentalidad acentúa las oscilaciones térmicas y limita el desarrollo de la vegetación a especies adaptadas a la aridez."
        },
        {
          code: "Cfb",
          name: "Templado Oceánico",
          description: "Esta clasificación climática se caracteriza por precipitaciones distribuidas durante todo el año sin estación seca marcada, con temperaturas moderadas donde el mes más cálido no supera los 22°C y el más frío se mantiene sobre los 0°C. La fuerte influencia oceánica del Pacífico modera las temperaturas extremas y mantiene una humedad constante, generando condiciones favorables para el desarrollo de bosques templados y una vegetación exuberante típica del sur de Chile."
        },
        {
          code: "Cfc",
          name: "Templado Oceánico Frío",
          description: "Esta clasificación climática se caracteriza por precipitaciones abundantes durante todo el año sin estación seca definida, con temperaturas frescas donde el mes más cálido presenta menos de 4 meses con temperaturas superiores a 10°C. La influencia oceánica austral genera condiciones de alta humedad y temperaturas moderadamente bajas, favoreciendo el desarrollo de bosques siempreverdes y una vegetación adaptada a condiciones de frío y humedad constante en las regiones más australes del país."
        },
        {
          code: "Csc",
          name: "Mediterráneo Frío",
          description: "Esta clasificación climática se caracteriza por un régimen de precipitaciones concentradas en los meses de invierno con veranos secos, donde menos de 4 meses presentan temperaturas superiores a 10°C y el mes más cálido no supera los 22°C. Este clima se presenta en zonas de mayor elevación dentro de las regiones mediterráneas, donde la altitud modera las temperaturas y genera condiciones más frías que favorecen el desarrollo de vegetación adaptada a inviernos húmedos y veranos secos pero templados."
        },
        {
          code: "BWh",
          name: "Desértico Cálido",
          description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de 200 mm anuales) y temperaturas medias anuales superiores a 18°C, típico de las regiones más cálidas del Desierto de Atacama. Las condiciones de alta presión atmosférica subtropical generan cielos despejados y radiación solar intensa, creando un ambiente desértico con temperaturas elevadas, baja humedad relativa y una vegetación prácticamente ausente debido a las condiciones de aridez extrema."
        },
        {
          code: "EF",
          name: "Hielo Perpetuo",
          description: "Esta clasificación climática se caracteriza por temperaturas permanentemente bajo el punto de congelación durante todo el año, con presencia de hielos y glaciares permanentes en las zonas de mayor elevación de la Cordillera de los Andes. Las condiciones extremas de frío y la acumulación constante de nieve y hielo impiden el desarrollo de cualquier tipo de vegetación, configurando un paisaje de alta montaña dominado por formaciones glaciares y condiciones climáticas polares debido a la altitud."
        }
      ];

      const handleClimateChange = (e) => {
        setSelectedClimateCode(e.target.value);
      };

      const getSelectedClimate = () => {
        if (!selectedClimateCode) return null;
        return climateData.find(climate => climate.code === selectedClimateCode);
      };
      
      const selectedClimate = getSelectedClimate();

      return (
        <div className="app-container">
          <div className="card">
            <h1 className="title">
              Clasificación Climática de Chile Continental
            </h1>
            <p className="subtitle">
              Basado en Sarricolea et al. (2017)
            </p>
            
            <div>
              <div className="select-container">
                <label htmlFor="climate-select" className="select-label">
                  Selecciona una Región Climática:
                </label>
                <select 
                  id="climate-select"
                  value={selectedClimateCode} 
                  onChange={handleClimateChange}
                  className="select-box"
                >
                  <option value="">-- Elige un tipo de clima --</option>
                  {climateData.map((climate) => (
                    <option key={climate.code} value={climate.code}>
                      {climate.code} - {climate.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedClimate && (
                <div className="description-box">
                  <h3 className="description-title">
                    {selectedClimate.name} ({selectedClimate.code})
                  </h3>
                  <p className="description-text">
                    {selectedClimate.description}
                  </p>
                </div>
              )}
            </div>
            
            <div className="footer">
              <p>© 2025 LBC Consultores Ambientales</p>
		<p>Autor: david.vasquez@lbconservation.org</p>
            </div>
          </div>
        </div>
      );
    }

export default ClimatePanel;
