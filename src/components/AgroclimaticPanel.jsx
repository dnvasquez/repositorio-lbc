import React, { useState } from 'react';
import '../styles/agroclimatic.css';

const AgroclimaticPanel = () => {
    const [selectedZone, setSelectedZone] = useState('');

    const agroclimaticData = {
        "1": {
            name: "Zonas Desérticas a Hiper-áridas (Arica a Coquimbo)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zonas Desérticas a Hiper-áridas. Estas zonas presentan precipitaciones anuales inferiores a 100 mm, con un período seco que se extiende por 11 o 12 meses del año. El déficit hídrico anual supera los 1200 mm y el índice de humedad invernal se mantiene por debajo de 0,2, lo que significa que la precipitación durante la estación húmeda no alcanza a cubrir ni el 20% de las demandas de evapotranspiración potencial. No existe excedente invernal de precipitación, por lo que el escurrimiento superficial es extremadamente escaso y errático. A pesar de esta marcada deficiencia hídrica, esta zona cuenta con la mayor acumulación anual de días grado, desde 1600 hasta más de 3000."
        },
        "2": {
            name: "Zona Árida (Coquimbo a Aconcagua)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Árida. La precipitación anual varía desde 100 mm en Coquimbo a 300 mm en Aconcagua. El período seco se extiende por 8 a 11 meses y el déficit hídrico anual se mantiene entre 1000 y 1200 mm. El índice de humedad invernal oscila entre valores algo inferiores a 0,5 y algo superiores a 1, evidenciando la existencia de una corta estación húmeda de 1 o 2 meses. El régimen térmico acumula anualmente entre 1600 y 1700 días grado."
        },
        "3": {
            name: "Zona Semiárida (Aconcagua a Región del Maule)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Semiárida. Se extiende entre el río Aconcagua y la Región del Maule, excluyendo la cordillera de Los Andes en esta última región. También incluye una importante superficie pampeana en Magallanes y algunos sectores transandinos de Aysén. El período seco se reduce a 7 u 8 meses, el déficit hídrico anual se mantiene entre 800 y 1000 mm. El período húmedo varía entre 2 y 4 meses. El índice de humedad invernal se mantiene entre 1 y 3, revelando la existencia de un invierno breve pero con humedad suficiente. El excedente invernal de precipitaciones varía entre algunas decenas de milímetros hasta algo por sobre los 300 mm anuales. El régimen térmico acumula anualmente 1200 a 1600 días grado."
        },
        "4": {
            name: "Zona Esteparia Fría de Altura (Puna o Altiplano)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Esteparia Fría de Altura. Situada por sobre los 3000 metros en Los Andes nororientales del territorio chileno. En verano, esta área recibe la visita de las depresiones tropicales provenientes de la región amazónica, provocando una estación de lluvias estivales que va de diciembre a marzo. La precipitación anual se sitúa entre los 150 y 300 milímetros. Por la altitud, el régimen térmico es extremadamente frío con una acumulación anual de días grado no superior a 500. Se registran heladas (temperaturas inferiores a 0°C) durante todo el año. El periodo seco dura entre 8 y 12 meses."
        },
        "5": {
            name: "Zona Sub-húmeda (Región del Maule al Bío-Bío)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Sub-húmeda. Se extiende entre la Región del Maule y el río Bío-Bío. Incluye la cordillera andina de las regiones de Santiago y el Libertador Bernardo O'Higgins. El período seco dura alrededor de 6 a 8 meses y la estación húmeda unos 4 meses. El déficit hídrico se mantiene entre 700 y 900 mm/año. El excedente hídrico se sitúa entre 300 y 400 mm/año. El índice de humedad del invierno es de 3 a 5. Con la excepción de algunos núcleos cálidos del secano interior, el régimen térmico acumula anualmente entre 1600 y 1200 días-grado, similar a la zona semiárida situada más al norte."
        },
        "6": {
            name: "Zona Húmeda (Del Bío-Bío al Toltén)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Húmeda. Se extiende entre el río Bío-Bío y la Región de La Araucanía por el interior, proyectándose hasta la Región del Maule por la cordillera andina. El período seco dura entre 3 y 6 meses, con un déficit hídrico de 500 a 800 mm/año. El período húmedo dura 5 a 6 meses. El excedente hídrico va de 400 a más de 1000 mm/año, con un índice de humedad invernal de 5 a 12. Los días grado decrecen desde 1200 en el límite norte de esta zona, hasta unos 900 en el límite sur de la Región de La Araucanía."
        },
        "7": {
            name: "Zona Per-húmeda (del Toltén al Sur)",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Per-húmeda. Se extiende desde el río Toltén al Sur, proyectándose hacia el norte por la cordillera de los Andes y la costa. No existe un período seco propiamente tal, por lo que el déficit hídrico tiende a ser casi nulo. El período húmedo es de 8 a 12 meses, con excedentes hídricos superiores a 1300 mm/año. Los días-grado van desde los 900 en el límite con la Región de Los Lagos a unos 500 en Chiloé."
        },
        "8": {
            name: "Zona Esteparia Fría Semiárida",
            description: "Según Santibáñez et al. (2008), el área del proyecto se encuentra en la zona clasificada como Zona Esteparia Fría Semiárida. Comprende las regiones orientales de Aysén y Magallanes, especialmente en Tierra del Fuego. La precipitación se encuentra en equilibrio precario con la evapotranspiración, de modo que cualquier deficiencia de lluvias genera períodos de sequía. Los días grado no superan los 400 anuales."
        }
    };
    
    const handleZoneChange = (e) => {
        setSelectedZone(e.target.value);
    };

    const getSelectedZoneData = () => {
        if (!selectedZone) return null;
        return agroclimaticData[selectedZone];
    };

    const selectedZoneData = getSelectedZoneData();

    return (
        <div className="app-container">
            <div className="card">
                <h1 className="title">
                    Zonas Agroclimáticas de Chile
                </h1>
                <p className="subtitle">
                    Basado en Santibáñez et al. (2008)
                </p>
                
                <div className="select-container">
                    <label htmlFor="agroclimatic-zone-select" className="select-label">
                        Selecciona una Zona Agroclimática:
                    </label>
                    <select 
                        id="agroclimatic-zone-select"
                        value={selectedZone} 
                        onChange={handleZoneChange}
                        className="select-box"
                    >
                        <option value="">-- Elige una zona --</option>
                        {Object.entries(agroclimaticData).map(([key, zone]) => (
                            <option key={key} value={key}>
                                {zone.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedZoneData && (
                    <div className="description-box">
                        <h3 className="description-title">
                            {selectedZoneData.name}
                        </h3>
                        <div className="description-text">
                            {selectedZoneData.description}
                        </div>
                    </div>
                )}
                
                <div className="footer">
                    <p>© 2025 LBC Consultores Ambientales</p>
                    <p>Autor: david.vasquez@lbconservation.org</p>
                </div>
            </div>
        </div>
    );
};

export default AgroclimaticPanel;