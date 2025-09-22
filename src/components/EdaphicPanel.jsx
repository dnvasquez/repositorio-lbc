import React, { useState } from 'react';
import '../styles/edaphic.css';

const EdaphicPanel = () => {
    const [selectedZone, setSelectedZone] = useState('');
    const [selectedSubzone, setSelectedSubzone] = useState('');

    const edaphicData = {
        "1": {
            name: "Zona Desértica de Chile",
            subzones: {
                "1.1": {
                    name: "Llanuras Depositacionales de la Depresión Intermedia",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Desértica de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en la Depresión Intermedia, una fosa tectónica de dirección norte-sur, conformada por ignimbritas y riolitas terciarias sobre las que se han acumulado depósitos aluviales, lacustres y de riadas holocénicas que constituyen el material parental de los suelos. Estos suelos ocupan extensas llanuras suavemente onduladas o planos remanentes (pampas), son generalmente delgados, con texturas gruesas, colores pardos a pardo oscuro y pedregosidad superficial abundante. La mayoría presenta pH entre 8,4 y 8,9 y contenido de carbono orgánico inferior a 0,5% en el epipedón, clasificándose taxonómicamente como Torriorthents o Lithic Haplocambids, con aptitud agrícola muy restringida (Clases VI-VII). Las características edáficas varían según la localización topográfica: los suelos desarrollados sobre terrazas aluviales antiguas presentan algo de estructura subangular y mejor drenaje, mientras que en depresiones locales pueden acumular sales o presentar compactación incipiente."
                },
                "1.2": {
                    name: "Salares y Suelos con Alto Contenido Salino",
                    description: "El área del proyecto se encuentra próxima a sectores clasificados como Suelos de la Zona Desértica de Chile. Según Luzio et al. (2009), estas áreas corresponden a cuencas cerradas dentro de la Depresión Intermedia, donde la escasa escorrentía y la evaporación intensa han generado depósitos evaporíticos con costras duras de sales. Estos suelos ocupan superficies planas o suavemente onduladas, son estratificados, de textura variable (desde franca a franco arcillosa), con colores claros y fuerte acumulación de sales solubles. La mayoría presenta pH entre 8,5 y 9,8 y contenido de carbono orgánico muy bajo (<0,3%) en la superficie, clasificándose taxonómicamente como Typic Haplosalids, con aptitud agrícola nula debido a la extrema salinidad (CE hasta 500 dS/m) y escasa estructura. Las características edáficas varían según la profundidad del nivel freático: en sectores con flujo subterráneo activo se reduce la acumulación salina, mientras que en zonas endorreicas se generan condiciones altamente limitantes para el desarrollo vegetal."
                },
                "1.3": {
                    name: "Valles Cordilleranos",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Desértica de Chile. Según Luzio et al. (2009), los sectores de valles cordilleranos corresponden a corredores estrechos de orientación este-oeste, donde el material parental está constituido por depósitos fluviales recientes retrabajados, con influencia coluvial desde las laderas adyacentes. Estos suelos ocupan terrazas bajas y pisos de valle, son poco profundos (hasta 80 cm), con texturas medias a gruesas, colores pardo claro y moderada permeabilidad. La mayoría presenta pH entre 7,2 y 8,0 y contenido de carbono orgánico entre 0,3 y 0,8% en el epipedón, clasificándose taxonómicamente como Ustorthents, con aptitud agrícola limitada (Clases IV-V) en sectores planos y con disponibilidad de agua. Las características edáficas varían según la frecuencia de inundación: en áreas cercanas a cursos de agua se observan suelos con mejor desarrollo estructural, mientras que en terrazas más altas predomina la pedregosidad y la baja retención hídrica."
                },
                "1.4": {
                    name: "Bofedales y Vegas",
                    description: "El área del proyecto se encuentra en una región donde también se desarrollan Suelos de la Zona Desértica de Chile. Según Luzio et al. (2009), los suelos saturados se ubican en depresiones del Altiplano y cuencas cerradas, donde el material parental corresponde a depósitos orgánicos acumulados durante el Holoceno. Estos suelos ocupan planos inundables, son profundos (>100 cm), de textura fina, colores oscuros, y con acumulación significativa de materia orgánica y sales en algunos casos. La mayoría presenta pH entre 7,6 y 8,5 y contenido de carbono orgánico que puede superar el 30% en los horizontes superiores, clasificándose taxonómicamente como Haplofibrist, Haplohemist o Endoaquents, con aptitud agrícola específica para praderas húmedas o conservación de humedales. Las características edáficas varían según el tipo de bofedal o vega: en laderas hay mayor drenaje, mientras que en fondos planos se presentan condiciones más anóxicas y salinas."
                },
                "1.5": {
                    name: "Sector Costero",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Desértica de Chile. Según Luzio et al. (2009), el sector costero corresponde a una franja entre la línea de costa y la cumbre de la Cordillera de la Costa, donde predominan depósitos coluviales y marinos con fuerte influencia salina. Estos suelos ocupan terrazas marinas y lomajes suaves, son delgados (<60 cm), con texturas gruesas, colores claros y alta salinidad superficial. La mayoría presenta pH entre 8,4 y 9,2 y contenido de carbono orgánico inferior a 1% en el epipedón, clasificándose taxonómicamente como Torriorthents o Haplocambids, con aptitud agrícola muy baja debido a su escasa retención de humedad, pedregosidad y salinidad. Las características edáficas varían según el grado de exposición marina: en terrazas altas se observan depósitos carbonatados, mientras que en zonas bajas puede predominar el sodio en el complejo de intercambio."
                }
            }
        },
        "2": {
            name: "Zona Árida y Semiárida de Chile",
            subzones: {
                "2.1": {
                    name: "Depresión Intermedia del Norte Chico",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Árida y Semiárida de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en la Depresión Intermedia del Norte Chico, un corredor longitudinal de origen tectónico limitado por las cordilleras de la Costa y de Los Andes. Esta unidad está conformada por depósitos aluviales, coluviales y fluvio-glaciales que constituyen el material parental de los suelos. Los suelos se desarrollan en terrazas, abanicos y fondos de valle, siendo de profundidad media (80–120 cm), con texturas medias a gruesas, colores pardos y pardo oscuros, y buena permeabilidad. La mayoría presenta pH entre 7,2–8,4 y contenidos de carbono orgánico entre 0,8 y 1,4% en el epipedón, clasificándose taxonómicamente como Haplocambids o Haploxerolls, con aptitud agrícola moderada (Clases III–IV). Las características edáficas varían según el grado de encostramiento y pedregosidad: en terrazas altas es común la presencia de capas endurecidas o suelos con drenaje limitado, mientras que en fondos de valle se observan perfiles más profundos y fértiles."
                },
                "2.2": {
                    name: "Cordillera de la Costa del Norte Chico",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Árida y Semiárida de Chile. Según Luzio et al. (2009), el proyecto se ubica en la Cordillera de la Costa del Norte Chico, una unidad morfoestructural compuesta por rocas intrusivas y metamórficas paleozoicas y mesozoicas, que actúan como material parental de los suelos. Estos suelos se desarrollan sobre coluvios y saprolitos, en laderas de fuerte pendiente con procesos erosivos intensos. Son generalmente delgados (40–80 cm), con texturas gruesas, colores pardo rojizos y baja retención de humedad. La mayoría presenta pH entre 6,0–7,2 y contenidos de carbono orgánico bajos (0,5–1,0%), clasificándose como Haploxeralfs o Dystrustepts, con aptitud preferente para uso forestal o conservación (Clases V–VII). Las características edáficas varían según la cobertura vegetal: en áreas con matorral o bosque relicto se presentan mejores condiciones de estabilidad estructural, mientras que en zonas degradadas domina la erosión laminar y la compactación superficial."
                },
                "2.3": {
                    name: "Precordillera Andina del Norte Chico",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Árida y Semiárida de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en la Precordillera Andina del Norte Chico, caracterizada por fuertes pendientes, abanicos coluviales y materiales de remoción en masa derivados de rocas volcánicas, intrusivas y metamórficas. Los suelos ocupan laderas y conos de deyección, con profundidad media (60–100 cm), texturas medias, colores pardo claros y alta pedregosidad superficial. La mayoría presenta pH entre 7,4–8,6 y contenidos de carbono orgánico entre 0,4 y 0,9%, clasificándose taxonómicamente como Ustorthents o Haplocambids, con aptitud agrícola muy restringida (Clases VI–VII), debido a su escasa retención de agua, elevada pendiente y riesgo de erosión. Las características edáficas varían según la estabilidad de los materiales coluviales: en abanicos más antiguos se observa incipiente desarrollo de horizonte B, mientras que en laderas activas predominan suelos jóvenes sin estructura definida."
                },
                "2.4": {
                    name: "Altiplano y Sectores Andinos Altos",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Árida y Semiárida de Chile. Según Luzio et al. (2009), esta unidad corresponde a sectores de altura de la cordillera andina, con altiplanicies internas y cuencas cerradas formadas sobre tobas volcánicas y sedimentos lacustres. Los suelos se desarrollan en ambientes fríos y áridos, con oscilaciones térmicas marcadas. Son de profundidad variable, con texturas medias a finas, colores grises o pardo grisáceos, y limitada evolución pedogenética. La mayoría presenta pH entre 7,8–9,2 y contenidos de carbono orgánico bajos a moderados (0,8–1,2%), clasificándose como Haplocambids, Haplosalids o Haplocalcids, con aptitud agrícola nula o muy restringida (Clases VI–VIII), principalmente por la aridez, salinidad y clima extremo. Las características edáficas varían según el régimen hídrico: en sectores con nivel freático superficial se observan horizontes de acumulación salina o carbonatada, mientras que en zonas más secas predominan suelos delgados con horizonte C próximo a superficie."
                }
            }
        },
        "3": {
            name: "Zona Mediterránea Árida de Chile",
            subzones: {
                "3.1": {
                    name: "Suelos de los sectores cordilleranos",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Mediterránea Árida de Chile. Según Luzio et al. (2009), el proyecto se emplaza específicamente en sectores cordilleranos de la Cordillera de Los Andes, entre la línea de vegetación altoandina y el límite de las nieves permanentes. En esta unidad de relieve predominan condiciones climáticas de tipo estepa fría, con una marcada concentración de precipitaciones invernales y alta variabilidad térmica, aunque los registros climáticos aún son escasos. Los suelos presentes en estos sectores son someros, con escasa evolución pedogenética y sin diferenciación clara de horizontes. Se desarrollan sobre material parental de origen andesítico y basáltico, con dominancia de fracciones gruesas (gravas angulares y arenas), alta pedregosidad y textura arenosa. Su morfología corresponde a suelos esqueletales, con escasa capacidad de retención de humedad, buen drenaje natural y cobertura vegetal abierta, dominada por especies herbáceas del tipo Stipa y Festuca. Taxonómicamente, corresponden a Entisols, y desde el punto de vista de su uso potencial, se consideran con una Capacidad de Uso Clase VIII, es decir, con fines exclusivos de preservación sin posibilidad de uso agrícola o forestal intensivo."
                },
                "3.2": {
                    name: "Suelos de los sectores de la precordillera de Los Andes",
                    description: "El área del proyecto se ubica en la zona clasificada como Suelos de la Zona Mediterránea Árida de Chile, específicamente en sectores de precordillera andina, sobre terrazas, piedmonts y cerros que se extienden hacia la Depresión Intermedia. Según Luzio et al. (2009), los suelos de estos sectores presentan un grado de desarrollo pedogenético intermedio, con presencia de epipedones mólicos, horizontes cámbicos o argílicos, dependiendo de la unidad geomorfológica. En los piedmonts y terrazas aluviales, los suelos son moderadamente profundos a profundos, bien estructurados y con buena capacidad de arraigamiento. Presentan texturas francas a franco arcillosas, colores pardo oscuro en el matiz 10YR, pH entre 6,0 y 7,5 y contenidos variables de carbono orgánico (0,8–6,3%). Se clasifican principalmente como Haploxerolls, algunos con horizontes árgicos o propiedades últicas. Las fases más aptas, en pendientes suaves y buena profundidad, se ubican en Clases II y III de Capacidad de Uso. En contraste, los suelos formados sobre cerros con pendientes superiores al 20% suelen ser delgados (menos de 60 cm), con desarrollo incipiente y fuerte limitación por pedregosidad, siendo considerados como Lithic Haploxerolls o Entisols. Estas fases presentan limitaciones importantes para el uso agrícola y se ubican en Clases VI y VII de Capacidad de Uso, recomendándose su uso exclusivo para conservación o cobertura forestal"
                },
                "3.3": {
                    name: "Suelos de la depresión intermedia",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Mediterránea Árida de Chile. Según Luzio (2010), el proyecto se ubica específicamente en la Depresión Intermedia, una fosa tectónica de dirección norte-sur que se extiende entre la Cordillera de la Costa y la Precordillera de Los Andes, rellena por más de 500 m de sedimentos fluviales, aluviales y glaciales que constituyen el material parental de los suelos. En este sector, los suelos ocupan principalmente terrazas aluviales, abanicos y conos asociados a cursos de agua activos o antiguos, desarrollándose sobre sedimentos aluviales de gravas redondeadas o facetadas en matriz arenosa o franca. Son generalmente profundos (100–140 cm), con texturas medias a gruesas, estructura de bloques subangulares y colores pardos a pardo oscuro (10YR y 7.5YR). Presentan buena permeabilidad y drenaje, salvo en algunas fases con relieve ligeramente cóncavo, donde puede ser imperfecto. La mayoría de estos suelos presenta pH entre 6,8 y 8,2, con contenidos de carbono orgánico en el epipedón entre 1,5 y 1,6%, y saturación de bases superior al 75%. Taxonómicamente, predominan los Mollisols, con un 80% clasificado como Haploxerolls (Subgrupos Fluventic, Ultic y Entic), mientras que el resto corresponde a Inceptisols del Gran Grupo Haploxerept. Poseen buena aptitud agrícola, clasificándose principalmente en Clases de Capacidad de Uso I a III, aunque algunas fases con drenaje imperfecto alcanzan Clase IV."
                },
                "3.4": {
                    name: "Suelos de la cordillera de la costa",
                    description: ""
                }
            }
        },
        "4": {
    name: "Zona Mediterránea Húmeda",
    subzones: {
        "4.1": {
            name: "Sector Údico–Mésico",
            description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Mediterránea Húmeda de Chile. Según Luzio (2010), este sector se ubica en el tramo norte de la zona, con un régimen údico–mésico que combina disponibilidad hídrica adecuada y amplitud térmica marcada. Los suelos se desarrollan a partir de materiales volcánicos y depósitos aluviales, predominando los Andisols y Mollisols en sectores planos y la Depresión Intermedia. Son generalmente profundos, de texturas medias a finas y con buena estructura, lo que les otorga buena aptitud agrícola. En contraposición, en áreas de pendiente, como la Precordillera y la Cordillera de la Costa, aparecen suelos más delgados o meteorizados, con limitaciones por erosión y baja fertilidad, destinados principalmente a uso forestal. La aptitud agrícola varía desde Clases II–III en valles y terrazas hasta Clases VI–VIII en laderas con fuertes pendientes."
        },
        "4.2": {
            name: "Sector Údico–Isomésico",
            description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Mediterránea Húmeda de Chile. Según Luzio (2010), este sector corresponde al tramo sur de la zona, caracterizado por un régimen údico–isomésico con temperaturas más uniformes a lo largo del año. Los suelos se forman sobre materiales volcánicos, glaciares y aluviales, predominando los Andisols en la Depresión Intermedia, con buena estructura y fertilidad, aptos para agricultura intensiva. También se desarrollan suelos con drenaje deficiente, conocidos como ñadis, que presentan limitaciones para el cultivo. En laderas y cordones montañosos son comunes los Inceptisols y Ultisols, con mayor acidez, menor fertilidad y susceptibilidad a la erosión, lo que restringe su uso a actividades forestales o de conservación. La aptitud agrícola varía desde Clases II–III en sectores bien drenados hasta Clases VI–VIII en áreas con pendiente o drenaje deficiente."
        }
    }
},
        "5": {
            name: "Zona Húmeda",
            subzones: {
                "5.1": {
                    name: "Andisols del sector central",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Húmeda de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en el sector central, donde predominan suelos derivados de cenizas volcánicas holocénicas que cubren una variedad de formas del relieve, como terrazas aluviales, terrazas fluvioglaciales y lomeríos morrénicos. Estos suelos se desarrollan sobre materiales parentales diversos, como gravas, arcillas glaciares y rocas basálticas meteorizadas, lo que determina su variabilidad morfológica y química. Son generalmente profundos (100–200 cm), con texturas que van de franco limosa a franco arcillo limosa, colores oscuros en superficie y buena estructura en bloques subangulares. Presentan pH ácido (4,7–6,3) y alto contenido de carbono orgánico en el epipedón (hasta 13%), clasificándose taxonómicamente como Hapludands y Fulvudands. Poseen alta capacidad de retención de fósforo y buena porosidad, aunque algunas fases presentan tixotropía y estratificación volcánica que pueden limitar su estabilidad. La aptitud agrícola es variable: desde Clases II–III en terrazas estables hasta Clases VI–VIII en laderas escarpadas con riesgo de deslizamiento."
                },
                "5.2": {
                    name: "Suelos con alta saturación de bases",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Húmeda de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en el sector oriental de esta zona, donde predominan suelos desarrollados en planicies y terrazas de origen glacial y lacustre. Estos suelos se emplazan sobre materiales parentales variados, como gravas angulares, limos y arcillas sedimentarias, en un paisaje modelado por antiguos procesos glaciales y lacustres, actualmente sometido a un clima de características más xéricas, con precipitaciones entre 300 y 500 mm anuales. Los suelos son generalmente moderadamente profundos a profundos (50–108 cm), con texturas desde franco arenosa hasta arcillosa, y colores pardos oscuros a negro en los horizontes superficiales. Presentan buena estructura, buen drenaje en la mayoría de los casos y notable presencia de rasgos redoximórficos en fases mal drenadas. Su pH varía de levemente ácido a alcalino (6,3–8,6) y presentan altos niveles de saturación de bases en todo el perfil (>50%), clasificándose taxonómicamente como Haploxerolls y Palexerolls. La aptitud agrícola es moderada a limitada, con predominio de Clases IV a VII, aunque algunas fases con mejor drenaje y textura permiten su uso en Clase III. La presencia de estratificación volcánica y material glacial intercalado añade heterogeneidad y complejidad a estos suelos."
                },
                "5.3": {
                    name: "Suelos en posición de terrazas con horizonte cámbico",
                    description: "El área del proyecto está inserta en la zona clasificada como Suelos de la Zona Húmeda de Chile. Según Luzio et al. (2009), el proyecto se ubica específicamente en sectores de lomajes suaves y terrazas aluviales recientes, donde se desarrollan suelos sin propiedades ándicas, formados sobre depósitos de origen mixto —aluvial, glacial y fluvioglacial—. Estos suelos se localizan en pendientes variables, desde 5 hasta 30%, sobre sustratos de gravas angulares, arcillas glaciares o sedimentos estratificados que dificultan la separación clara de los procesos formativos. Son generalmente profundos (hasta 160 cm), con texturas que evolucionan desde franco arenosa en el epipedón hasta arcillo limosa en profundidad, colores pardos a negros en superficie, y estructura en bloques subangulares bien desarrollada. Presentan buen drenaje, pH entre 6,0 y 7,0, y una saturación de bases media a baja (6–61%), clasificándose taxonómicamente como Dystrudepts, mayoritariamente en los subgrupos Andic y Humic. Su aptitud agrícola es limitada (Clases IV–VII), debido a la estratificación y a la pendiente del terreno, aunque algunas fases en terrazas aluviales suaves pueden alcanzar Clase III."
                }
            }
        }
    };
    
    const handleZoneChange = (e) => {
        const zoneId = e.target.value;
        setSelectedZone(zoneId);
        setSelectedSubzone('');
    };

    const handleSubzoneChange = (e) => {
        setSelectedSubzone(e.target.value);
    };

    const getDescription = () => {
        if (!selectedZone || !selectedSubzone) return '';
        const zone = edaphicData[selectedZone];
        if (!zone || !zone.subzones[selectedSubzone]) return '';
        return zone.subzones[selectedSubzone].description;
    };

    return (
        <div className="app-container">
            <div className="card">
                <h1 className="title">
                    Zonas Edáficas de Chile
                </h1>
                <p className="subtitle">
                    Basado en Luzio W. (2009)
                </p>
                
                <div className="select-container">
                    <label htmlFor="zone-select" className="select-label">
                        Selecciona una Zona Edáfica:
                    </label>
                    <select 
                        id="zone-select"
                        value={selectedZone} 
                        onChange={handleZoneChange}
                        className="select-box"
                    >
                        <option value="">-- Elige una zona --</option>
                        {Object.entries(edaphicData).map(([key, zone]) => (
                            <option key={key} value={key}>
                                {zone.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedZone && (
                    <div className="select-container">
                        <label htmlFor="subzone-select" className="select-label">
                            Selecciona una Subzona:
                        </label>
                        <select 
                            id="subzone-select"
                            value={selectedSubzone} 
                            onChange={handleSubzoneChange}
                            className="select-box"
                        >
                            <option value="">-- Elige una subzona --</option>
                            {Object.entries(edaphicData[selectedZone].subzones).map(([key, subzone]) => (
                                <option key={key} value={key}>
                                    {subzone.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {getDescription() && (
                    <div className="description-box">
                        <h3 className="description-title">
                            Descripción
                        </h3>
                        <div className="description-text">
                            {getDescription()}
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

export default EdaphicPanel;
