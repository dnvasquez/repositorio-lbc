import React, { useState } from 'react';
import '../styles/climate.css';

const ClimatePanel = () => {
      const [selectedClimateCode, setSelectedClimateCode] = useState('');

       const climateData = [
        {
            code: "BWh",
            name: "Desértico Cálido",
            description: "Esta clasificación se caracteriza por precipitaciones extremadamente escasas (inferiores a la mitad del umbral de aridez) y temperatura media anual superior a 18°C. En Chile se localiza en valles costeros del norte como Lluta, Azapa, Vítor, Camarones y Tana, extendiéndose hasta la Pampa del Tamarugal y Mejillones. La influencia de la corriente de Humboldt genera condiciones desérticas con vegetación prácticamente inexistente o limitada a plantas xerófitas adaptadas a la extrema aridez."
        },
        {
            code: "BWk",
            name: "Desértico Frío",
            description: "Esta clasificación climática se caracteriza por precipitaciones extremadamente escasas durante todo el año (menos de la mitad del umbral de aridez) y temperaturas medias anuales inferiores a 18°C, típico de las regiones del Desierto de Atacama y zonas áridas del norte de Chile. Las condiciones de alta presión atmosférica y la influencia de la corriente fría de Humboldt generan un ambiente desértico con amplias oscilaciones térmicas diarias y una vegetación prácticamente inexistente."
        },
        {
            code: "BWk(w)",
            name: "Desértico Frío con Invierno Seco",
            description: "Esta variante del clima desértico frío incorpora la influencia amazónica del sistema monzónico sudamericano, caracterizada por sequía invernal marcada. Se extiende desde el norte de Chile hasta los 24° 21'S, abarcando desde Calama hasta el Salar de Atacama. Las precipitaciones, aunque escasas, se concentran levemente en los meses de verano austral, con una vegetación desértica o prácticamente ausente."
        },
        {
            code: "BSh",
            name: "Estepario Cálido",
            description: "Este clima se caracteriza por precipitaciones escasas (entre la mitad del umbral de aridez y el umbral completo) con temperatura media anual superior a 18°C. Se localiza en los límites de los desiertos subtropicales del norte de Chile. Los inviernos son suaves y los veranos cálidos o muy cálidos, con vegetación natural de estepa adaptada a la aridez y las altas temperaturas."
        },
        {
            code: "BSk",
            name: "Estepario Frío",
            description: "Esta clasificación presenta precipitaciones escasas (entre la mitad del umbral de aridez y el umbral completo) y temperatura media anual inferior a 18°C. Predomina desde los 28° 15'S hasta los 32° 30'S en Chile, en zonas alejadas del mar. Los inviernos son fríos o muy fríos y los veranos pueden ser templados o cálidos, con vegetación natural de estepa que caracteriza el paisaje árido del interior del país."
        },
        {
            code: "BSk(s)",
            name: "Estepario Frío con Verano Seco",
            description: "Esta variante presenta sequía estival marcada debido a la influencia de los vientos del oeste. Se localiza entre los 28° 15'S y 32° 30'S en Chile, caracterizándose por concentración de precipitaciones en invierno. La amplitud térmica es considerable, con inviernos fríos y veranos templados a cálidos pero secos, sustentando una vegetación esteparia adaptada a la aridez estival."
        },
        {
            code: "BSk(w)",
            name: "Estepario Frío con Invierno Seco",
            description: "Esta clasificación incorpora la influencia amazónica con sequía invernal. Se distribuye desde el norte de Chile hasta los 27° 8'S. Las precipitaciones escasas se concentran levemente en verano, mientras los inviernos son secos. La vegetación esteparia se adapta a esta estacionalidad invertida respecto al patrón mediterráneo típico de Chile central."
        },
        {
            code: "BSk'",
            name: "Estepario Frío Euoceánico Atenuado",
            description: "Esta variante se caracteriza por un rango térmico anual que no excede los 16-17°C, indicando fuerte influencia oceánica según el índice de Rivas-Martínez. Se localiza en zonas costeras donde la nubosidad y la influencia marítima atenúan las oscilaciones térmicas. Las precipitaciones, aunque escasas, permiten una vegetación esteparia con características más mesofíticas que las variantes continentales."
        },
        {
            code: "BSk - Patagonia",
            name: "Estepario Patagónico",
            description: "Este clima semiárido se localiza en la región austral de Chile, particularmente en Magallanes. La posición de sotavento respecto a los Andes y la elevación de las islas occidentales generan condiciones de aridez relativa. Los inviernos son muy fríos y ventosos, mientras los veranos son frescos, con vegetación esteparia patagónica adaptada a los fuertes vientos y bajas temperaturas."
        },
        {
            code: "Csa",
            name: "Mediterráneo",
            description: "Este clima presenta inviernos templados y veranos secos y cálidos, con temperaturas del mes más cálido superiores a 22°C. La mayor parte de las precipitaciones caen en invierno o estaciones intermedias. Se distribuye en la costa occidental entre 30° y 40° de latitud, abarcando gran parte de la península ibérica mediterránea y en Chile zonas del interior de California y suroeste de Australia. La vegetación natural es el bosque mediterráneo esclerófilo."
        },
        {
            code: "Csb",
            name: "Mediterráneo de Veranos Frescos",
            description: "Esta clasificación presenta inviernos fríos o templados y veranos secos con temperaturas del mes más cálido inferiores a 22°C. En Chile predomina entre los 32° 30'S y 39° 32'S, siendo el clima característico de la zona central. Las precipitaciones se concentran en invierno, mientras los veranos son secos. La vegetación natural es el bosque mediterráneo esclerófilo adaptado a la sequía estival."
        },
        {
            code: "Csb(h)",
            name: "Mediterráneo de Veranos Frescos de Altura",
            description: "Esta variante se localiza sobre los 1000 m.s.n.m. en la Cordillera de los Andes de Chile central. El umbral altitudinal genera un descenso térmico de aproximadamente 6.5°C por cada 1000 m, modificando significativamente las condiciones respecto al Csb de valle. Mantiene el régimen de precipitaciones mediterráneo pero con temperaturas más frías y mayor acumulación de nieve invernal."
        },
        {
            code: "Csb'",
            name: "Mediterráneo de Veranos Frescos Euoceánico Atenuado",
            description: "Esta clasificación presenta un rango térmico anual que no supera los 16-17°C debido a la fuerte influencia oceánica. Se extiende por la costa desde la región de Atacama hasta Los Lagos, con influencia entre 63 y 120 km hacia el interior. La nubosidad costera y las brisas marinas atenúan las temperaturas extremas, generando veranos frescos y secos con inviernos templados y lluviosos."
        },
        {
            code: "Csc",
            name: "Mediterráneo Frío",
            description: "Esta clasificación presenta veranos fríos con menos de cuatro meses con temperatura media superior a 10°C, manteniendo el régimen de precipitaciones mediterráneo con sequía estival. Se localiza en zonas de mayor altitud o latitud respecto al Csb, particularmente entre los 32° 30'S y 39° 32'S en áreas elevadas. La vegetación corresponde a bosques mediterráneos adaptados a condiciones más frías."
        },
        {
            code: "Csc - Patagonia",
            name: "Mediterráneo Frío Patagónico",
            description: "Esta variante se presenta en la zona sur austral de Chile con carácter sub-mediterráneo. Aunque mantiene cierta concentración de precipitaciones en invierno, la influencia de los vientos del oeste es más débil que en el Csb. Los veranos son fríos y los inviernos rigurosos, con vegetación de transición entre el bosque mediterráneo y las formaciones patagónicas."
        },
        {
            code: "Cfb",
            name: "Marítimo de Costa Occidental u Oceánico",
            description: "Este clima presenta inviernos fríos o templados y veranos frescos, con precipitaciones bien distribuidas durante todo el año sin estación seca marcada. En Chile se localiza desde aproximadamente 39° 32'S hasta 43° S, correspondiendo a la fachada occidental de los continentes entre 45° y 55° de latitud. La vegetación natural son bosques de frondosas templados, característicos del clima oceánico."
        },
        {
            code: "Cfb'",
            name: "Marítimo de Costa Occidental Euoceánico Atenuado",
            description: "Esta variante presenta características oceánicas acentuadas con rango térmico anual muy reducido (inferior a 16-17°C). Se localiza en zonas costeras del sur de Chile donde la influencia marítima es máxima. Las precipitaciones son abundantes y bien distribuidas, con nubosidad frecuente que modera las temperaturas. Los bosques templados lluviosos valdivianos son característicos de esta clasificación."
        },
        {
            code: "Cfb(s)",
            name: "Marítimo de Costa Occidental con Verano Seco",
            description: "Esta clasificación representa una transición entre el clima mediterráneo y el oceánico puro, con ligera tendencia a la sequía estival. Se localiza aproximadamente entre los 39° 32'S y 43° S donde aún persiste cierta influencia del anticiclón del Pacífico en verano. Las precipitaciones, aunque abundantes, muestran un mínimo estival moderado. La vegetación corresponde a bosques templados con características sub-mediterráneas."
        },
        {
            code: "Cfc",
            name: "Marítimo Subártico u Oceánico Frío",
            description: "Este clima se caracteriza por inviernos fríos sin un verdadero verano, con precipitaciones durante todo el año. Se localiza al sur del Cfb, acercándose a los polos, en zonas como el extremo sur de Chile y Argentina. Los fuertes vientos característicos de estas latitudes limitan el desarrollo de vegetación arbórea en algunos lugares, predominando formaciones arbustivas y herbáceas resistentes."
        },
        {
            code: "ET",
            name: "Tundra",
            description: "Esta clasificación presenta temperatura media del mes más cálido entre 0°C y 10°C, impidiendo el desarrollo de vegetación arbórea. En Chile es el clima predominante (27.9% del territorio) debido a la elevación de la Cordillera de los Andes, presente desde el extremo norte hasta el sur. Solo existen musgos y hierbas cuando la temperatura media supera los 0°C. Se localiza desde aproximadamente los 50° hasta 70° de latitud norte y en zonas de alta montaña."
        },
        {
            code: "ET(s)",
            name: "Tundra con Verano Seco",
            description: "Esta variante presenta las características térmicas de la tundra pero con influencia de sequía estival típica del régimen mediterráneo. Se localiza en las altas cumbres de la Cordillera de los Andes en Chile central, donde la altura genera condiciones de tundra pero el régimen de precipitaciones sigue el patrón mediterráneo con concentración invernal. La vegetación es extremadamente escasa y limitada a líquenes y musgos."
        },
        {
            code: "ET(w)",
            name: "Tundra con Invierno Seco",
            description: "Esta clasificación combina las condiciones térmicas de tundra con la influencia amazónica del sistema monzónico sudamericano, presentando sequía invernal marcada. Se extiende desde el norte de Chile hasta los 27° 8'S al noreste del Ojos del Salado (6880 m). Las escasas precipitaciones se concentran en los meses de verano austral, sustentando una vegetación de tundra extremadamente limitada adaptada a la aridez invernal."
        },
        {
            code: "EF",
            name: "Hielos Perpetuos",
            description: "Este clima presenta temperatura media del mes más cálido inferior a 0°C, impidiendo cualquier tipo de vegetación. Representa apenas el 0.1% del territorio chileno, localizado en las mayores alturas de la Cordillera de los Andes y en campos de hielo patagónicos. Es el clima de los hielos permanentes, glaciares y campos de nieve perpetua, característico del interior de Groenlandia, la Antártida y las máximas elevaciones del Himalaya."
        },
        {
            code: "EF(w)",
            name: "Hielos Perpetuos con Invierno Seco",
            description: "Esta variante extremadamente rara combina las condiciones de hielos perpetuos con cierta influencia amazónica que genera una leve estacionalidad en las precipitaciones sólidas, siendo el invierno más seco. Se localiza únicamente en algunas cumbres muy elevadas del extremo norte de Chile donde la altura genera temperaturas permanentemente bajo cero pero aún existe influencia del sistema monzónico sudamericano que aporta mayor humedad estival."
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
