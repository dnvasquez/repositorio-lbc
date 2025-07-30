import React, { useState } from 'react';
import '../styles/macrozona.css';

const MacrozonaPanel = () => {
    const [selectedMacrozona, setSelectedMacrozona] = useState('');
    const [selectedSubzona, setSelectedSubzona] = useState('');
    const [description, setDescription] = useState('');

    const macrozonas = {
        'norte-grande': {
            name: 'Norte Grande',
            description: 'se extiende desde el límite septentrional hasta el Río Copiapó, abarcando las regiones de Arica y Parinacota, Tarapacá, Antofagasta y Atacama (norte)',
            subzonas: {
                'borde-costero': 'en el borde costero es posible distinguir un farellón costero que se levanta desde las profundidades del mar, empinándose hasta alturas de 1.000 m, finalizando en la zona de Taltal. En toda su extensión a lo largo del litoral, el farellón se presenta bien conservado y solo parcialmente roto por gargantas profundas de quebradas secas que logran llegar al mar. El farellón actúa como biombo climático, al impedir el paso de la nubosidad al interior.',
                'cordillera-costa': 'la Cordillera de la Costa nace unos 20 km al sur de Arica, donde el Cerro Camaraca es un primer testimonio. Ensanchándose en bisel hacia el sur, tiene un ancho medio de unos 50 km y representa un relieve senil. Desde su nacimiento hasta el Río Loa, se presenta como cerros islas, empinándose solo algunas centenas de metros por encima del plan alto de la pampa.',
                'pampa-tamarugal': 'la Pampa del Tamarugal tiene una superficie estimada en 17.253 km² y se desarrolla como una meseta encerrada entre las cotas 600 y 1.500 m. Es un territorio coherente e ininterrumpido donde las quebradas que descienden desde los planos inclinados orientales no cruzan la pampa, sino que se pierden como rasgo erosivo.',
                'desierto-atacama': 'el Desierto de Atacama se extiende entre el Río Loa por el norte y las sierras Remiendos, Vicuña Mackenna, del Muerto y Peñafiel por el sur. Es una faja de 300 km de eje norte-sur por 60 km de ancho medio. El Desierto de Atacama reúne las características más notables de híper aridez, convirtiéndolo en el desierto más absoluto del planeta.',
                'cordillera-andes': 'se divide en dos sectores diferenciables: El Altiplano (regiones de Arica y Parinacota, y Tarapacá) presenta altura promedio de 4.000 m y ancho variable de 15 a 40 km. En la Región de Antofagasta se distinguen cuatro subunidades: La Puna, Cordillera de los Andes propiamente tal, fosas prealtiplánicas y precordillera.'
            }
        },
        'norte-chico': {
            name: 'Norte Chico',
            description: 'se extiende desde el Río Copiapó hasta el Río Aconcagua, abarcando las regiones de Atacama (sur), Coquimbo y Valparaíso (norte)',
            subzonas: {
                'borde-costero': 'a diferencia de la macrozona anterior, presenta una planicie litoral más desarrollada que comienza en la zona del Río Loa hasta alcanzar su máximo desarrollo en La Serena (30 km en sentido este-oeste entre Tangue y cerro Blanco).',
                'cordillera-costa': 'está fuertemente accidentada por quebradas intermitentes y niveladas por la acción del mar, interrumpida por valles transversales intensamente cultivados. El cordón más importante es El Espino, con alturas superiores a 1.500 msnm.',
                'valles-transversales': 'se presentan con mayor intensidad en el extremo meridional, siendo las más importantes: La Ligua, Catemu, El Melón, Nogales, Montenegro-Rungue, Tiltil y Polpaico (separada de la cuenca de Santiago por el umbral orográfico de El Manzano).',
                'cordillera-andes': 'mantiene altitudes cercanas a 6.000 m (cerro Solo 6.213 m, Cerro Tres Cruces 6.753 m), con disminución paulatina hacia el sur. A diferencia de la zona anterior, el vulcanismo está ausente y se desplaza hacia el oeste, provocando el angostamiento del territorio nacional.'
            }
        },
        'centro': {
            name: 'Centro',
            description: 'se extiende desde el Río Aconcagua hasta el Río Biobío, abarcando las regiones de Valparaíso (sur), Metropolitana de Santiago, Del Libertador General Bernardo O\'Higgins, Maule, Ñuble y Biobío (norte)',
            subzonas: {
                'borde-costero': 'la planicie litoral es mixta, presentando alternancia de extensas playas de acumulación arenosa y sectores acantilados. Entre Aconcagua y estero Casablanca domina la costa alta con algunas playas bajas, seguida de acantilados menores hasta San Antonio.',
                'cordillera-costa': 'es un rasgo bastante definido al sur del Río Aconcagua, manteniéndose hasta la orilla norte del Río Cachapoal. Presenta alturas como La Campana (1.828 m), Roble (2.222 m), Vizcachas (2.046 m), que enmarcan la cuenca de Santiago por el oeste.',
                'cuencas-valles': 'se localizan entre el llano central y el borde oriental de la Cordillera de la Costa. Las más importantes son Cauquenes y Melipilla, más dos importantes depresiones: las cuencas de Santiago y de Rancagua, separadas por el paso de la Angostura de Paine.',
                'llano-centro-sur': 'se abre al sur del valle del Río Mataquito, prolongándose hasta el sur del Río Biobío. Presenta aspecto de planicie suavemente ondulada, intensamente regada, bajo condiciones de clima y suelo que han favorecido su ocupación histórica.',
                'cordillera-andes': 'se enmarca entre el cerro Juncal (norte) y volcán Llaima (sur), presenta abundante retención de nieve debido a su altura y aumento de precipitaciones sólidas. Reaparecen los volcanes del Cuaternario: Tupungato (6.635m), San José (5.856 m) y Maipo (5.318 m).'
            }
        },
        'sur': {
            name: 'Sur',
            description: 'se extiende desde el Río Biobío hasta el Río Palena. Abarca las regiones del Biobío (sur), de La Araucanía, de Los Ríos y de Los Lagos',
            subzonas: {
                'borde-costero': 'las planicies litorales cubren superficies variables, dividiéndose en tres subsectores: entre Río Biobío y Río Tirúa (ancho medio de 25 km), planicie de Carahue (75 km de longitud), y planicie de Maullín (60 km de longitud).',
                'cordillera-costa': 'adquiere nombre propio como Cordillera de Nahuelbuta al sur del Río Biobío. Se extiende 190 km entre Schwager y cerro Mirador, alcanzando ancho máximo de 50 km entre Cañete y Angol. Su punto más alto es el Alto de la Cueva (1.300 m).',
                'llano-ondulado': 'se divide en dos sectores: septentrional entre Río Biobío y Gorbea (170 km de extensión), y meridional entre Paillaco y Calbuco (190 km de longitud). Están separados por un vigoroso relieve que encadena las cordilleras de los Andes y de la Costa.',
                'cordillera-andes': 'presenta conos volcánicos que se levantan aislados en el extremo oriental de los grandes lagos: Villarrica (2.840 m) y Puntiagudo (2.490 m). Es atravesada por sierras y cordones transversales como los Nevados de Caburgua y el Cordón Nevado.'
            }
        },
        'islas-canales': {
            name: 'Islas y Canales',
            description: 'se extiende desde el Archipiélago de Chiloé, hasta el Cabo de Hornos, abarcando los territorios de la cordillera desmembrada y canales interiores de las regiones de Los Lagos, Aysén del General Carlos Ibáñez del Campo y Magallanes y de la Antártica Chilena',
            subzonas: {
                'archipielago-chiloe': 'es continuación meridional de la Cordillera de la Costa más allá del Canal de Chacao. En la Isla Grande de Chiloé se distinguen dos zonas: una montañosa de costas abruptas (al sur) y otra correspondiente a una planicie de abrasión marina disectada por aguas corrientes hacia los mares interiores.',
                'islas-canales': 'al sur de Chiloé, la Cordillera de los Andes se presenta desmembrada por la erosión provocada por hielos y aguas que se adentran en el corazón de las montañas. Se divide en dos sectores: archipielágico (territorio morfológicamente deprimido) y patagónico (hasta la Cordillera Darwin).'
            }
        },
        'austral': {
            name: 'Austral',
            description: 'se extiende desde el Río Palena, hasta Cabo de Hornos, abarcando los territorios de valles trasandinos y pampas de las regiones de Aysén y Magallanes y de la Antártica Chilena',
            subzonas: {
                'valles-trasandinos': 'corresponden al sector del llano central que se encuentra en su mayor parte sumergido por el enérgico hundimiento de esta zona. Se contactan con las cordilleras en un muro costero fuertemente erosionado por fiordos y canales.',
                'campos-hielo': 'se observan extensos campos de hielo destacando el Campo de Hielo Norte (4.400 km²) y el Campo de Hielo Sur (14.000 km², 80% pertenece a Chile) del cual se desprenden 49 glaciares incluyendo el Pío XI, el mayor del hemisferio sur fuera de la Antártica.',
                'pampa-magallanica': 'unidad totalmente plana con suaves ondulaciones y pequeños cordones de escasa altura, correspondientes a cuencas lacustres como las lagunas Blanca y Cabeza del Mar.'
            }
        },
        'antartica': {
            name: 'Antártica',
            description: 'se extiende desde el Cabo de Hornos hasta el Polo Sur, abarcando la Región de Magallanes y de la Antártica Chilena',
            subzonas: {
                'meseta-central': 'ocupa el territorio situado en torno del Polo Sur, es decir, el gran inlandsis.',
                'cordones-andinos': 'se desplazan al norte del paralelo 75º S ocupando cordilleras dispuestas en eje norte-sur hasta las inmediaciones del paralelo 68º S. Los más importantes son los cordones de Jorge Black y Douglas.',
                'zona-peninsular': 'correspondería a una cordillera intensamente anegada por hielos, con disimetría morfológica litoral: costa baja hacia el mar de Wedell y fachada oriental con capa de hielo comunicada mediante la "barrera de hielos de Larsen".',
                'zona-insular': 'corresponde a las islas antepuestas a la península, divididas en archipiélagos subantárticos (islas Shetlands del Sur), separadas de los archipiélagos solidarios de la Antártica por el estrecho de Bransfield.'
            }
        },
        'islas-oceanicas': {
            name: 'Islas Oceánicas',
            description: 'comprende los territorios insulares de Isla de Pascua y Archipiélago Juan Fernández, ubicados en el Océano Pacífico, correspondientes a la Región de Valparaíso',
            subzonas: {
                'isla-pascua': 'se emplaza entre 26º30\' y 27º7\' latitud S. Tiene 166 km² de superficie, 24 km de largo y 12 km de ancho. Las tres principales elevaciones forman un triángulo interior. Comprende territorio de relieve predominantemente plano con alturas máximas que no superan los 510 m.',
                'archipielago-juan-fernandez': 'formado por las islas Robinson Crusoe (93 km²) y Alejandro Selkirk (49 km²), con el peñón de Santa Clara. Son islas volcánicas extraordinariamente abruptas sin planicies, refugio de paisajes y ecosistemas únicos con alta flora y fauna endémica.',
                'islas-san-ambrosio-felix': 'Isla San Ambrosio (2,2 km²) cubierta por fragmentos de lava volcánica, sin playas, con acantilados directos al mar. Isla San Félix (1,4 km²) de origen volcánico con Cerro Amarillo como principal elevación (193 m).',
                'isla-mocha': 'se emplaza entre 38º22\' S y 73º54\' W, con 48 km² de superficie. Posee dos cordones montañosos paralelos norte-sur con topografía accidentada y fuertes pendientes que terminan en meseta de 340 msnm.'
            }
        }
    };

    const subzonaNames = {
        'borde-costero': 'Borde Costero',
        'cordillera-costa': 'Cordillera de la Costa',
        'pampa-tamarugal': 'Pampa del Tamarugal',
        'desierto-atacama': 'Desierto de Atacama',
        'cordillera-andes': 'Cordillera de los Andes',
        'valles-transversales': 'Cuencas y Valles Transversales',
        'cuencas-valles': 'Cuencas y Valles Interiores',
        'llano-centro-sur': 'Llano Centro-Sur',
        'llano-ondulado': 'Llano Ondulado',
        'archipielago-chiloe': 'Archipiélago de Chiloé',
        'islas-canales': 'Islas Continentales y Canales Interiores',
        'valles-trasandinos': 'Cuencas y Valles Trasandinos',
        'campos-hielo': 'Campos de Hielo',
        'pampa-magallanica': 'Pampa Magallánica',
        'meseta-central': 'Meseta Central Antártica',
        'cordones-andinos': 'Cordones Andinos Antárticos',
        'zona-peninsular': 'Zona Peninsular Antártica',
        'zona-insular': 'Zona Insular Antártica',
        'isla-pascua': 'Isla de Pascua',
        'archipielago-juan-fernandez': 'Archipiélago Juan Fernández',
        'islas-san-ambrosio-felix': 'Islas San Ambrosio y San Félix',
        'isla-mocha': 'Isla Mocha'
    };
    
    const handleMacrozonaChange = (e) => {
        const value = e.target.value;
        setSelectedMacrozona(value);
        setSelectedSubzona('');
        setDescription('');
    };

    const handleSubzonaChange = (e) => {
        const subzonaValue = e.target.value;
        setSelectedSubzona(subzonaValue);

        if (selectedMacrozona && subzonaValue) {
            const macrozona = macrozonas[selectedMacrozona];
            const subzonaDescription = macrozona.subzonas[subzonaValue];
            const fullDescription = `El proyecto se localiza dentro de la **Macrozona ${macrozona.name}**, la cual ${macrozona.description}, específicamente en la **subzona ${subzonaNames[subzonaValue]}**. Esta subzona se caracteriza porque ${subzonaDescription}`;
            setDescription(fullDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
        } else {
            setDescription('');
        }
    };

    return (
        <div className="app-container">
            <div className="card">
                <h1 className="title">
                    Macrozonas Paisajísticas de Chile
                </h1>
                <p className="subtitle">
                    Basado en MEC Consultores (2018)
                </p>
                
                <div className="select-container">
                    <label htmlFor="macrozona-select" className="select-label">
                        Selecciona una Macrozona:
                    </label>
                    <select 
                        id="macrozona-select"
                        value={selectedMacrozona} 
                        onChange={handleMacrozonaChange}
                        className="select-box"
                    >
                        <option value="">-- Elige una macrozona --</option>
                        {Object.entries(macrozonas).map(([key, value]) => (
                            <option key={key} value={key}>{value.name}</option>
                        ))}
                    </select>
                </div>

                {selectedMacrozona && (
                    <div className="select-container">
                        <label htmlFor="subzona-select" className="select-label">
                            Selecciona una Subzona:
                        </label>
                        <select 
                            id="subzona-select"
                            value={selectedSubzona} 
                            onChange={handleSubzonaChange}
                            className="select-box"
                        >
                            <option value="">-- Elige una subzona --</option>
                            {macrozonas[selectedMacrozona] && Object.keys(macrozonas[selectedMacrozona].subzonas).map(key => (
                                <option key={key} value={key}>{subzonaNames[key]}</option>
                            ))}
                        </select>
                    </div>
                )}

                {description && (
                    <div className="description-box">
                        <h3 className="description-title">
                            Descripción
                        </h3>
                        <div className="description-text" dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                )}
                
                <div className="footer">
                  <p>© 2025 LBC Consultores Ambientales</p>
                  <p>Autor: david.vasquez@lbconservation.org</p>
                </div>
            </div>
        </div>
    );
}

export default MacrozonaPanel;
