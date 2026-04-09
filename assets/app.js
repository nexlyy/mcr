/* ════════════════════════════════════════
   ЧТО МЕНЯТЬ: текст между кавычками " "
   ОТКРЫТЬ В БЛОКНОТЕ → Ctrl+F → найти текст
   → изменить → Ctrl+S → F5 в браузере
   ════════════════════════════════════════ */
var CONTENT = {
  hero: {
    tagline: "Engineering · Geology · Innovation",
    subtitle: "Mine · Construction · Recycling"
  },
  about: {
    title_en:"MCR Planet is a universe where science and engineering deliver perfect solutions.",
    title_es:"MCR Planet es un universo donde la ciencia y la ingeniería ofrecen soluciones perfectas.",
    title_pl:"MCR Planet to wszechświat, w którym nauka i inżynieria dostarczają doskonałych rozwiązań.",
    p1_en:"<strong>MCR Planet</strong> is an engineering-geological company focused on solving complex problems at the intersection of scientific and applied disciplines.",
    p1_es:"<strong>MCR Planet</strong> es una empresa de ingeniería geológica enfocada en resolver problemas complejos en la intersección de las disciplinas científicas y aplicadas.",
    p1_pl:"<strong>MCR Planet</strong> to firma inżynieryjno-geologiczna skupiona na rozwiązywaniu złożonych problemów na styku dyscyplin naukowych i stosowanych.",
    p2_en:"Our core specialisation is the development and implementation of engineering-geological solutions for standard and non-standard projects combining geology, ecology, beneficiation and construction.",
    p2_es:"Nuestra especialización principal es el desarrollo e implementación de soluciones ingeniero-geológicas para proyectos estándar y no estándar que combinan geología, ecología, beneficiación y construcción.",
    p2_pl:"Naszą podstawową specjalizacją jest opracowywanie i wdrażanie rozwiązań inżynieryjno-geologicznych dla projektów standardowych i niestandardowych łączących geologię, ekologię, wzbogacanie i budownictwo.",
    p3_en:"We work with both natural and anthropogenic minerals, including the processing and economic utilisation of man-made formations and mining industry waste. Our approach is based on combining a scientific base with engineering practice.",
    p3_es:"Trabajamos tanto con minerales naturales como antropogénicos, incluyendo el procesamiento y la utilización económica de formaciones artificiales y residuos de la industria minera. Nuestro enfoque se basa en combinar una base científica con la práctica de ingeniería.",
    p3_pl:"Pracujemy zarówno z minerałami naturalnymi, jak i antropogenicznymi, w tym z przetwarzaniem i ekonomicznym wykorzystaniem formacji sztucznych i odpadów przemysłu wydobywczego. Nasze podejście opiera się na łączeniu bazy naukowej z praktyką inżynierską.",
    stats: [
      {n:"3",   l_en:"Core Divisions",      l_es:"Divisiones Principales", l_pl:"Główne Dywizje"},
      {n:"17+", l_en:"Services & Solutions", l_es:"Servicios y Soluciones",  l_pl:"Usługi i Rozwiązania"},
      {n:"3",   l_en:"Languages",            l_es:"Idiomas",                 l_pl:"Języki"},
      {n:"∞",   l_en:"Potential Projects",   l_es:"Proyectos Potenciales",   l_pl:"Potencjalne Projekty"}
    ]
  },
  contacts: {
    company:"MCR Planet",
    email:"info@mcrgroup.biz",
    phone:"+XX XXX XXX XX XX"
  },
  divisions: [
    {
      id: "mine", cls: "mine", num: "01",
      name_en: "Mine", name_es: "Minería", name_pl: "Górnictwo",
      services: [
        {
          id:"geo", num:"01",
          title_en:"Geological Services", title_es:"Servicios Geológicos", title_pl:"Usługi Geologiczne",
          desc_en:"Comprehensive geological and geotechnical surveys for both mining and civil construction — from deposit assessment for industrial clients to site investigations for private developers. We reduce investment risks and ensure regulatory compliance across all project scales.",
          desc_es:"Estudios geológicos y geotécnicos integrales para minería y construcción civil — desde la evaluación de yacimientos para clientes industriales hasta investigaciones de terreno para promotores privados. Reducimos los riesgos de inversión y garantizamos el cumplimiento normativo.",
          desc_pl:"Kompleksowe badania geologiczne i geotechniczne zarówno dla górnictwa, jak i budownictwa — od oceny złóż dla klientów przemysłowych po badania podłoża dla deweloperów prywatnych. Redukujemy ryzyko inwestycyjne i zapewniamy zgodność z przepisami.",
          points_en:["Geological mapping and structural analysis (mining deposits and construction sites)", "Geophysical surveys including georadar investigations — for both deep exploration and shallow utility detection", "Laboratory sample analysis and petrographic studies (ore, waste rock, soils, and foundation materials)", "Waste rock, tailings, and spoil tip characterisation — geochemistry, acid rock drainage potential, and hazard classification", "Engineering geology for residential and commercial construction — soil mechanics, foundation design parameters, and slope stability", "Investment risk assessment and feasibility reporting (for mining projects) — or geotechnical reports for building permits", "Geological documentation and regulatory compliance packages (mining licenses or construction approvals)", "Geotechnical assessment for waste dump, tailings storage facility siting — and for building foundation design"],
          points_es:["Cartografía geológica y análisis estructural (yacimientos mineros y obras de construcción)", "Investigaciones geofísicas incluyendo georadar — para exploración profunda y detección de servicios superficiales", "Análisis de muestras en laboratorio y estudios petrográficos (mineral, roca estéril, suelos y materiales de cimentación)", "Caracterización de estériles, relaves y escombreras — geoquímica, potencial de drenaje ácido y clasificación de peligros", "Geología de ingeniería para construcción residencial y comercial — mecánica de suelos, parámetros de diseño de cimentaciones y estabilidad de taludes", "Evaluación de riesgos de inversión e informes de viabilidad (proyectos mineros) o informes geotécnicos para permisos de construcción", "Documentación geológica y paquetes de cumplimiento normativo (licencias mineras o aprobaciones de construcción)", "Evaluación geotécnica para ubicación de escombreras y balsas de relaves — y para el diseño de cimentaciones de edificios"],
          points_pl:["Kartowanie geologiczne i analiza strukturalna (złoża górnicze i place budów)", "Badania geofizyczne z georadarem — dla głębokiej eksploracji i płytkiej detekcji mediów", "Laboratoryjne analizy próbek i badania petrograficzne (rudy, skały płonne, grunty i materiały fundamentowe)", "Charakterystyka odpadów, odpadów skalnych i hałd — geochemia, potencjał kwaśnego drenażu i klasyfikacja zagrożeń", "Geologia inżynierska dla budownictwa mieszkaniowego i komercyjnego — mechanika gruntów, parametry projektowania fundamentów i stateczność skarp", "Ocena ryzyka inwestycyjnego i raporty wykonalności (projekty górnicze) lub raporty geotechniczne do pozwoleń na budowę", "Dokumentacja geologiczna i pakiety zgodności regulacyjnej (koncesje górnicze lub pozwolenia budowlane)", "Ocena geotechniczna dla lokalizacji składowisk i stawów osadowych — oraz projektowania fundamentów budynków"]
        },
        {
          id:"exp", num:"02",
          title_en:"Exploration Support", title_es:"Apoyo a la Exploración", title_pl:"Wsparcie Eksploracji",
          desc_en:"Full-cycle support for exploration and site investigations — serving both civil construction (residential, commercial, infrastructure) and industrial mining (greenfield projects, technogenic deposits, tailings, waste dumps, spoil tips). From manual drilling for house foundations to mechanical drilling for resource definition. All documentation prepared in compliance with Polish standards (PN, PN-EN, Eurocode) and local regulatory requirements.",
          desc_es:"Apoyo integral para trabajos de exploración e investigaciones de terreno — tanto para construcción civil como para minería industrial. Toda la documentación preparada conforme a las normas polacas (PN, PN-EN, Eurocódigo) y requisitos reglamentarios locales.",
          desc_pl:"Kompleksowe wsparcie prac eksploracyjnych i badań podłoża — zarówno dla budownictwa, jak i przemysłu wydobywczego. Cała dokumentacja przygotowana zgodnie z normami polskimi (PN, PN-EN, Eurokod) i lokalnymi przepisami.",
          points_en:["Exploration and site investigation programme design — drill hole layout, sampling density, and budget for civil or industrial projects", "Field works management and supervision — manual auger drilling (civil), core drilling, reverse circulation, and trenching (industrial)", "Borehole logging and geophysical surveys — shallow utility detection (civil) or deep exploration wells (industrial)", "Laboratory sample preparation and analysis — soil mechanics for foundations (civil) or ore grade and waste geochemistry (industrial)", "QA/QC protocols — certified blanks, standards, and duplicates for reliable, auditable data", "Data correlation, interpretation, and 3D modelling — foundation models for construction or geological block models for mining", "Process optimisation and operational efficiency — real-time grade control (industrial) or cost-effective site investigation workflows (civil)", "Full documentation package — geotechnical reports for building permits (civil) or resource reports for mining license applications (industrial)"],
          points_es:["Diseño del programa de exploración — distribución de sondeos, densidad de muestreo y presupuesto", "Gestión y supervisión de trabajos de campo — sondeos manuales, perforación a rotación, RC y calicatas", "Registro de sondeos y prospección geofísica — detección superficial de servicios o pozos de exploración profunda", "Preparación y análisis de muestras en laboratorio — mecánica de suelos para cimentaciones o ley del mineral y geoquímica de estériles", "Protocolos de QA/QC — blancos, estándares y duplicados certificados para datos fiables y auditables", "Correlación, interpretación y modelización 3D de datos — modelos de cimentación para construcción o modelos de bloques geológicos para minería", "Optimización de procesos y eficiencia operacional — control de ley en tiempo real o flujos de trabajo rentables", "Paquete completo de documentación — informes geotécnicos para permisos de construcción o informes de recursos para solicitudes de licencias mineras"],
          points_pl:["Projektowanie programu eksploracji — rozmieszczenie otworów, gęstość próbkowania i budżet", "Zarządzanie i nadzór prac terenowych — wiercenia ręczne, rdzeniowe, RC i wykopy", "Profilowanie otworów i badania geofizyczne — płytka detekcja mediów lub głębokie otwory eksploracyjne", "Przygotowanie i analiza próbek laboratoryjnych — mechanika gruntów dla fundamentów lub gatunek rudy i geochemia odpadów", "Protokoły QA/QC — certyfikowane blanki, standardy i duplikaty dla wiarygodnych danych", "Korelacja, interpretacja i modelowanie 3D — modele fundamentów dla budownictwa lub blokowe modele geologiczne dla górnictwa", "Optymalizacja procesów i efektywność operacyjna — kontrola gatunku w czasie rzeczywistym lub efektywne kosztowo badania", "Pełny pakiet dokumentacji — raporty geotechniczne do pozwoleń budowlanych lub raporty zasobowe do wniosków o koncesje"]
        },
        {
          id:"res", num:"03",
          title_en:"Resource Verification", title_es:"Verificación de Recursos", title_pl:"Weryfikacja Zasobów",
          desc_en:"Independent assessment and confirmation of mineral reserves, technogenic deposits (tailings, waste dumps, spoil tips), and construction raw material stocks. We provide credible, audit-ready reports for investors, banks, insurance companies, and regulatory authorities — serving both industrial mining and civil construction sectors.",
          desc_es:"Evaluación independiente y confirmación de reservas minerales, depósitos tecnogénicos y existencias de materias primas para construcción. Informes auditables para inversores, bancos, aseguradoras y autoridades regulatorias.",
          desc_pl:"Niezależna ocena i potwierdzenie zasobów mineralnych, złóż antropogenicznych i zapasów surowców budowlanych. Wiarygodne raporty dla inwestorów, banków, ubezpieczycieli i organów regulacyjnych.",
          points_en:["Independent reserve estimation in compliance with Polish standards and EU reporting guidelines", "Independent audit of existing geological and exploration data", "Third-party verification for bank financing, insurance, or regulatory approval", "Cross-validation using alternative methodologies (geostatistics, comparative drilling, laboratory re-testing)", "Verification of construction raw material stocks — sand, gravel, clay, crushed stone for civil projects", "Technogenic deposit verification — tailings, waste dumps, and spoil tips with residual value assessment", "Certified reporting for mining license applications and environmental permitting"],
          points_es:["Estimación independiente de reservas conforme a normas polacas y directrices de informes de la UE", "Auditoría independiente de datos geológicos y de exploración existentes", "Verificación de terceros para financiación bancaria, seguros o aprobación regulatoria", "Validación cruzada mediante metodologías alternativas (geoestadística, perforación comparativa)", "Verificación de existencias de materias primas para construcción — arena, grava, arcilla, piedra triturada", "Verificación de depósitos tecnogénicos — relaves, escombreras y depósitos de carbón con evaluación de valor residual", "Informes certificados para solicitudes de licencias mineras y permisos ambientales"],
          points_pl:["Niezależne szacowanie zasobów zgodnie z normami polskimi i wytycznymi UE", "Niezależny audyt istniejących danych geologicznych i eksploracyjnych", "Weryfikacja strony trzeciej dla finansowania bankowego, ubezpieczeń lub zgody regulacyjnej", "Wzajemna walidacja przy użyciu alternatywnych metodologii (geostatystyka, wiercenia porównawcze)", "Weryfikacja zapasów surowców budowlanych — piasek, żwir, glina, kruszywo", "Weryfikacja złóż antropogenicznych — odpady, hałdy i zwałowiska z oceną wartości rezydualnej", "Certyfikowane raporty do wniosków o koncesje górnicze i pozwolenia środowiskowe"]
        },
        {
          id:"adv", num:"04",
          title_en:"Mining Entry Advisory", title_es:"Consultoría de Entrada Minera", title_pl:"Doradztwo Wejścia Górniczego",
          desc_en:"Strategic consulting for the launch of new mining and quarrying projects — from regulatory navigation and permitting to operational setup and team formation. Serving both industrial mineral mining (ore, tailings, waste dumps, spoil tips) and civil construction raw materials (sand, gravel, clay, crushed stone).",
          desc_es:"Consultoría estratégica para el lanzamiento de nuevos proyectos de minería y canteras — desde la navegación regulatoria y permisos hasta la puesta en marcha operativa y formación de equipos.",
          desc_pl:"Doradztwo strategiczne przy uruchamianiu nowych projektów górniczych i kamieniołomów — od regulacji i uzyskiwania pozwoleń po operacyjne przygotowanie i budowę zespołu.",
          points_en:["Regulatory framework analysis and permitting strategy — including concessions, environmental decisions, and mining license applications (WUG, OUG, PIG-PIB)", "Business model and project structure development — CAPEX/OPEX modelling, royalty structures, and joint venture frameworks", "Asset due diligence and technical audit — verification of existing data, reserve estimates, and infrastructure condition", "Operational readiness assessment and roadmap — from site preparation to first production", "Team formation support — recruiting key personnel (mine manager, geologist, HSE officer, equipment operators) and defining roles", "Partner and investor introduction support — local and international, including debt financing and equipment leasing options", "Specialised advisory for technogenic deposits — tailings, waste dumps, and spoil tips with residual value potential"],
          points_es:["Análisis del marco regulatorio y estrategia de permisos — incluyendo concesiones, resoluciones ambientales y solicitudes de licencias", "Desarrollo de modelo de negocio y estructura del proyecto — modelización CAPEX/OPEX, estructuras de regalías y marcos de joint venture", "Due diligence de activos y auditoría técnica — verificación de datos existentes, estimaciones de reservas y condición de infraestructuras", "Evaluación de preparación operacional y hoja de ruta — desde la preparación del terreno hasta la primera producción", "Apoyo a la formación de equipos — contratación de personal clave y definición de roles", "Apoyo para introducción a socios e inversores — locales e internacionales, incluidas opciones de financiación de deuda y arrendamiento de equipos", "Asesoramiento especializado para depósitos tecnogénicos — relaves, escombreras con potencial de valor residual"],
          points_pl:["Analiza ram regulacyjnych i strategia uzyskiwania pozwoleń — w tym koncesje, decyzje środowiskowe i wnioski o licencje górnicze", "Opracowanie modelu biznesowego i struktury projektu — modelowanie CAPEX/OPEX, struktury tantiem i ramy joint venture", "Due diligence aktywów i audyt techniczny — weryfikacja istniejących danych, szacunków zasobów i stanu infrastruktury", "Ocena gotowości operacyjnej i plan działania — od przygotowania terenu do pierwszej produkcji", "Wsparcie w budowaniu zespołu — rekrutacja kluczowego personelu i definiowanie ról", "Wsparcie we wprowadzaniu do partnerów i inwestorów — lokalnych i międzynarodowych", "Specjalistyczne doradztwo dla złóż antropogenicznych — odpady, hałdy z potencjałem wartości rezydualnej"]
        },
        {
          id:"cbp", num:"05",
          title_en:"Cross-Border Projects", title_es:"Proyectos Transfronterizos", title_pl:"Projekty Transgraniczne",
          desc_en:"End-to-end management of complex international mining and quarrying projects — combining exploration, extraction, and operation across multiple jurisdictions. Serving both industrial mineral projects (ore, tailings, waste dumps, spoil tips) and civil construction raw materials (sand, gravel, clay, crushed stone). We bridge regulatory, logistical, and cultural gaps.",
          desc_es:"Gestión integral de proyectos internacionales complejos de minería y canteras — combinando exploración, extracción y operación en múltiples jurisdicciones. Salvamos barreras regulatorias, logísticas y culturales.",
          desc_pl:"Kompleksowe zarządzanie złożonymi międzynarodowymi projektami górniczymi — łączące eksplorację, wydobycie i operacje w wielu jurysdykcjach. Pokonujemy bariery regulacyjne, logistyczne i kulturowe.",
          points_en:["Multi-jurisdiction project coordination — synchronising exploration, permitting, and construction across borders", "Cross-border regulatory compliance — mining licenses, environmental permits, customs, and tax treaties", "International logistics for equipment, samples, and materials — including customs clearance and hazardous goods handling", "International technical team mobilisation — visas, work permits, accommodation, and site integration", "Technology transfer and localisation — adapting foreign technologies to local conditions, standards, and workforce skills", "Documentation and language support — certified translations, legalisation, apostille, and cross-border contract structuring", "Specialised cross-border advisory for technogenic deposits — tailings, waste dumps, and spoil tips with international investment or off-take agreements"],
          points_es:["Coordinación de proyectos multijurisdiccionales — sincronizando exploración, permisos y construcción", "Cumplimiento normativo transfronterizo — licencias mineras, permisos ambientales, aduanas y tratados fiscales", "Logística internacional para equipos, muestras y materiales — incluyendo despacho aduanero", "Movilización de equipos técnicos internacionales — visados, permisos de trabajo, alojamiento", "Transferencia de tecnología y localización — adaptando tecnologías extranjeras a condiciones locales", "Apoyo de documentación e idiomas — traducciones certificadas, legalización, apostilla", "Asesoramiento transfronterizo especializado para depósitos tecnogénicos"],
          points_pl:["Koordynacja projektów wielojurysdykcyjnych — synchronizacja eksploracji, pozwoleń i budowy", "Transgranyczna zgodność regulacyjna — licencje górnicze, pozwolenia środowiskowe, cła i traktaty podatkowe", "Logistyka międzynarodowa dla sprzętu, próbek i materiałów — w tym odprawa celna", "Mobilizacja międzynarodowych zespołów technicznych — wizy, zezwolenia na pracę, zakwaterowanie", "Transfer technologii i lokalizacja — adaptacja zagranicznych technologii do lokalnych warunków", "Wsparcie dokumentacyjne i językowe — tłumaczenia certyfikowane, legalizacja, apostille", "Specjalistyczne doradztwo transgraniczne dla złóż antropogenicznych"]
        },
        {
          id:"ant", num:"06",
          title_en:"Anthropogenic Mining", title_es:"Minería Antropogénica", title_pl:"Górnictwo Antropogeniczne",
          desc_en:"Extraction of valuable resources from industrial waste streams — tailings storage facilities, waste rock dumps, and coal spoil tips. We turn environmental liabilities into economic assets, supporting circular economy and ESG compliance.",
          desc_es:"Extracción de recursos valiosos de residuos industriales — instalaciones de almacenamiento de relaves, vertederos de roca estéril y escombreras de carbón. Convertimos pasivos ambientales en activos económicos.",
          desc_pl:"Wydobycie cennych zasobów z odpadów przemysłowych — stawów osadowych, hałd skalnych i zwałowisk węglowych. Przekształcamy zobowiązania środowiskowe w aktywa ekonomiczne.",
          points_en:["Waste characterisation and resource evaluation — tailings, waste rock, and spoil tips (grade, mineralogy, geochemistry)", "Secondary resource extraction technology selection — flotation, leaching, gravity separation, magnetic separation, or bioleaching", "Environmental impact mitigation during reprocessing — dust suppression, water recirculation, and neutralisation of acid-generating materials", "Legal and regulatory classification — transitioning waste status to secondary raw material (end-of-waste criteria, permitting)", "Economic model for waste-to-resource conversion — CAPEX/OPEX, revenue from recovered minerals, and co-product sales (briquettes, aggregates)", "Post-processing site management — tailings dry stacking, land rehabilitation, and closure of former storage facilities", "Integration with briquetting and agglomeration — converting residual material into saleable products (fuel briquettes, construction aggregates, backfill)"],
          points_es:["Caracterización de residuos y evaluación de recursos — relaves, roca estéril y escombreras", "Selección de tecnología de extracción secundaria — flotación, lixiviación, separación gravimétrica, magnética o biolixiviación", "Mitigación del impacto ambiental durante el reprocesamiento — supresión de polvo, recirculación de agua y neutralización", "Clasificación legal y regulatoria — transitando el estado de residuo a materia prima secundaria", "Modelo económico para la conversión de residuo en recurso — CAPEX/OPEX y ventas de coproductos", "Gestión posterior al procesamiento — apilamiento en seco de relaves y rehabilitación del terreno", "Integración con briquetado y aglomeración — convirtiendo material residual en productos comercializables"],
          points_pl:["Charakterystyka odpadów i ocena zasobów — odpady, skały płonne i hałdy", "Dobór technologii wydobycia wtórnego — flotacja, ługowanie, grawitacja, separacja magnetyczna lub bioługowanie", "Łagodzenie wpływu środowiskowego podczas przeróbki — tłumienie pyłu, recyrkulacja wody i neutralizacja", "Prawna i regulacyjna klasyfikacja — zmiana statusu odpadu na surowiec wtórny", "Model ekonomiczny konwersji odpadu na zasób — CAPEX/OPEX i sprzedaż produktów ubocznych", "Zarządzanie terenem po przeróbce — suche składowanie odpadów i rekultywacja", "Integracja z brykietowaniem i aglomeracją — przekształcanie materiału resztkowego w produkty handlowe"]
        },
        {
          id:"phy", num:"07",
          title_en:"Bioremediation & Biomass Valorisation", title_es:"Biorremediación y Valorización de Biomasa", title_pl:"Bioremediacja i Waloryzacja Biomasy",
          desc_en:"Integrated plant-based solutions for contaminated sites, tailings, waste dumps, and spoil tips — combining soil and air remediation with biomass production for energy, wood processing, and recovery of rare earth elements (REE) and other valuable components.",
          desc_es:"Soluciones integradas basadas en plantas para sitios contaminados, relaves, vertederos y escombreras — combinando remediación del suelo y el aire con producción de biomasa para energía, procesamiento de madera y recuperación de tierras raras (REE).",
          desc_pl:"Zintegrowane rozwiązania roślinne dla terenów skażonych, stawów osadowych, hałd i zwałowisk — łączące remediację gleby i powietrza z produkcją biomasy na potrzeby energii, przetwórstwa drewna i odzysku pierwiastków ziem rzadkich (REE).",
          points_en:["Site assessment for bioremediation and biomass potential — soil contamination, metal content (including REE), climate, and timeline", "Hyperaccumulator and fast-growing species selection — for REE recovery (willow, miscanthus, ferns), biomass yield, and wood quality", "Cultivation and plantation management — including phytostabilisation, phytoextraction, and optimisation for multiple outputs", "Rare earth elements (REE) recovery from plant biomass — neodymium, lanthanum, cerium, praseodymium, and other critical raw materials", "Biomass conversion to biofuel — wood pellets, briquettes, chips, or syngas for heat and power generation", "Wood harvesting for timber and wood processing — construction lumber, pallets, furniture blanks, or engineered wood products", "Air quality improvement and soil cleansing — capture of airborne particulates, heavy metal immobilisation, and gradual soil restoration", "Post-project land use planning — agricultural return, reforestation, carbon credit certification, or preparation for civil construction", "Carbon credit certification and trading — verified emission reductions (carbon sequestration in biomass and soil) for compliance or voluntary carbon markets"],
          points_es:["Evaluación del sitio para biorremediación y potencial de biomasa — contaminación del suelo, contenido metálico (incluido REE), clima y cronograma", "Selección de especies hiperacumuladoras y de crecimiento rápido — para recuperación de REE, rendimiento de biomasa y calidad de madera", "Cultivo y gestión de plantaciones — incluyendo fitoestabilización, fitoextracción y optimización para múltiples productos", "Recuperación de tierras raras (REE) de biomasa vegetal — neodimio, lantano, cerio, praseodimio y otros materiales críticos", "Conversión de biomasa en biocombustible — pellets de madera, briquetas, astillas o gas de síntesis para generación de calor y energía", "Cosecha de madera para procesamiento — madera de construcción, paletas o productos de madera de ingeniería", "Mejora de la calidad del aire y limpieza del suelo — captura de partículas, inmovilización de metales pesados y restauración gradual del suelo", "Planificación del uso del terreno posterior al proyecto — retorno agrícola, reforestación o preparación para construcción civil", "Certificación y comercio de créditos de carbono — reducciones de emisiones verificadas para mercados de carbono de cumplimiento o voluntarios"],
          points_pl:["Ocena terenu pod kątem bioremediacji i potencjału biomasy — skażenie gleby, zawartość metali (w tym REE), klimat i harmonogram", "Dobór gatunków hiperakumulujących i szybkorosnących — dla odzysku REE, plonów biomasy i jakości drewna", "Uprawa i zarządzanie plantacjami — w tym fitostabilizacja, fitoekstrakcja i optymalizacja dla wielu produktów", "Odzysk pierwiastków ziem rzadkich (REE) z biomasy roślinnej — neodym, lantan, cer, prazeodym i inne materiały krytyczne", "Konwersja biomasy na biopaliwo — pelety drzewne, brykiety, zrębki lub gaz syntezowy do produkcji ciepła i energii", "Pozyskiwanie drewna do przetwórstwa — drewno konstrukcyjne, palety lub wyroby z drewna inżynierskiego", "Poprawa jakości powietrza i oczyszczanie gleby — wychwytywanie pyłów, immobilizacja metali ciężkich i stopniowa odbudowa gleby", "Planowanie użytkowania terenu po projekcie — powrót rolniczy, zalesianie lub przygotowanie pod budownictwo", "Certyfikacja i handel kredytami węglowymi — zweryfikowane redukcje emisji dla rynków carbon compliance lub dobrowolnych"]
        }
      ]
    },
    {
      id: "construction", cls: "construction", num: "02",
      name_en: "Construction", name_es: "Construcción", name_pl: "Budownictwo",
      services: [
        {
          id:"ind", num:"01",
          title_en:"Industrial Installations", title_es:"Instalaciones Industriales", title_pl:"Instalacje Przemysłowe",
          desc_en:"Design and full turnkey construction of industrial facilities — from initial concept to commissioning, tailored to the specific demands of mining and heavy industry.",
          desc_es:"Diseño y construcción llave en mano de instalaciones industriales — desde el concepto inicial hasta la puesta en marcha, adaptado a las demandas específicas de la minería y la industria pesada.",
          desc_pl:"Projektowanie i budowa obiektów przemysłowych pod klucz — od koncepcji do uruchomienia, dostosowane do wymagań górnictwa i przemysłu ciężkiego.",
          points_en:["Concept design and feasibility studies (CAPEX/OPEX, risk assessment)", "Detailed engineering, 3D modeling, and technical documentation", "Construction management, occupational safety, health, environmental protection, and quality control using non-destructive testing methods", "Commissioning, staff training, and handover support", "Post-commissioning warranty and operational maintenance", "Modular construction, IIoT integration, in-house logistics for heavy gear.", "Zero-accident culture, dust suppression, ESG compliance."],
          points_es:["Diseño conceptual y estudios de viabilidad (CAPEX/OPEX, evaluación de riesgos)", "Ingeniería detallada, modelado 3D y documentación técnica", "Gestión de construcción, seguridad laboral, salud, protección ambiental y control de calidad", "Puesta en marcha, formación de personal y apoyo para la entrega", "Garantía post-puesta en marcha y mantenimiento operacional", "Construcción modular, integración IIoT, logística interna para equipos pesados", "Cultura cero accidentes, supresión de polvo, cumplimiento ESG"],
          points_pl:["Projekt koncepcyjny i studia wykonalności (CAPEX/OPEX, ocena ryzyka)", "Szczegółowe inżynieria, modelowanie 3D i dokumentacja techniczna", "Zarządzanie budową, BHP, ochrona środowiska i kontrola jakości z badaniami nieniszczącymi", "Uruchomienie, szkolenie personelu i wsparcie przy odbiorze", "Gwarancja po uruchomieniu i konserwacja operacyjna", "Budownictwo modułowe, integracja IIoT, własna logistyka ciężkiego sprzętu", "Kultura zerowej liczby wypadków, tłumienie pyłu, zgodność ESG"]
        },
        {
          id:"eng", num:"02",
          title_en:"Engineering Support", title_es:"Soporte de Ingeniería", title_pl:"Wsparcie Inżynieryjne",
          desc_en:"Continuous engineering support throughout all stages of project implementation — ensuring technical integrity, schedule adherence, and adaptive problem-solving.",
          desc_es:"Soporte continuo de ingeniería en todas las etapas de implementación del proyecto — garantizando integridad técnica, cumplimiento del cronograma y resolución adaptativa de problemas.",
          desc_pl:"Ciągłe wsparcie inżynieryjne na wszystkich etapach realizacji projektu — zapewniające integralność techniczną, dotrzymanie harmonogramu i adaptacyjne rozwiązywanie problemów.",
          points_en:["On-site and remote engineering supervision", "Technical risk identification and mitigation", "Change management and scope control", "Progress reporting and stakeholder communication", "Digital document management and on-site resolution of design discrepancies"],
          points_es:["Supervisión de ingeniería in situ y remota", "Identificación y mitigación de riesgos técnicos", "Gestión de cambios y control del alcance", "Informes de progreso y comunicación con partes interesadas", "Gestión digital de documentos y resolución in situ de discrepancias de diseño"],
          points_pl:["Nadzór inżynieryjny na miejscu i zdalny", "Identyfikacja i ograniczanie ryzyka technicznego", "Zarządzanie zmianami i kontrola zakresu", "Raporty postępu i komunikacja z interesariuszami", "Cyfrowe zarządzanie dokumentacją i rozwiązywanie rozbieżności projektowych na miejscu"]
        },
        {
          id:"tec", num:"03",
          title_en:"Technology Partnerships", title_es:"Asociaciones Tecnológicas", title_pl:"Partnerstwa Technologiczne",
          desc_en:"Strategic collaboration with leading technology providers to integrate advanced solutions into industrial construction and operations.",
          desc_es:"Colaboración estratégica con los principales proveedores de tecnología para integrar soluciones avanzadas en la construcción y operaciones industriales.",
          desc_pl:"Strategiczna współpraca z wiodącymi dostawcami technologii w celu integracji zaawansowanych rozwiązań w budownictwie i operacjach przemysłowych.",
          points_en:["Identification and vetting of best‑in‑class technology partners for each project scope", "Structuring of joint ventures, licensing agreements, and technology access contracts", "Seamless integration and on‑site adaptation of partner technologies", "Comprehensive training and hands‑on knowledge transfer for client teams", "Access to exclusive technologies and preferential pricing through long‑term partnerships"],
          points_es:["Identificación y evaluación de los mejores socios tecnológicos para cada alcance de proyecto", "Estructuración de joint ventures, acuerdos de licencia y contratos de acceso tecnológico", "Integración perfecta y adaptación in situ de tecnologías de socios", "Formación integral y transferencia práctica de conocimientos para equipos de clientes", "Acceso a tecnologías exclusivas y precios preferenciales a través de asociaciones a largo plazo"],
          points_pl:["Identyfikacja i weryfikacja najlepszych partnerów technologicznych dla każdego zakresu projektu", "Strukturyzacja joint venture, umów licencyjnych i kontraktów dostępu do technologii", "Płynna integracja i adaptacja technologii partnerskich na miejscu", "Kompleksowe szkolenia i praktyczny transfer wiedzy dla zespołów klientów", "Dostęp do ekskluzywnych technologii i preferencyjnych cen poprzez długoterminowe partnerstwa"]
        },
        {
          id:"eqp", num:"04",
          title_en:"Tailings, Waste Rock & Spoil Tip Processing Equipment", title_es:"Equipos para Procesamiento de Relaves y Residuos", title_pl:"Sprzęt do Przeróbki Odpadów i Zwałowisk",
          desc_en:"Supply of equipment for reprocessing all types of mining waste — tailings storage facilities, waste rock dumps, and coal spoil tips — extracting residual valuable minerals, and converting residual material into briquettes, pellets, or aggregates for commercial use.",
          desc_es:"Suministro de equipos para el reprocesamiento de todo tipo de residuos mineros — instalaciones de almacenamiento de relaves, vertederos de roca estéril y escombreras de carbón — extrayendo minerales valiosos residuales y convirtiendo el material en briquetas, pellets o áridos.",
          desc_pl:"Dostawa sprzętu do przeróbki wszystkich typów odpadów górniczych — stawów osadowych, hałd skalnych i zwałowisk węglowych — wydobywającego resztkowe cenne minerały i przetwarzającego materiał w brykiety, pelety lub kruszywa.",
          points_en:["Waste stream analysis and recovery potential assessment for tailings, dumps, and spoil tips", "Selection of reprocessing equipment for fines, slimes, coarse waste rock, and coal spoil", "Procurement, logistics, and site delivery of complete waste treatment lines", "Installation supervision and performance testing with recovery rate verification", "After-sales support, wear parts supply, and process optimisation for maximum yield", "Briquetting, pelletising, and agglomeration equipment — converting residual waste into saleable products", "Binder mixing and dosing systems — precise formulation for strong, durable briquettes and pellets"],
          points_es:["Análisis de la corriente de residuos y evaluación del potencial de recuperación", "Selección de equipos de reprocesamiento para finos, lodos, roca estéril gruesa y carbón", "Adquisición, logística y entrega en obra de líneas completas de tratamiento de residuos", "Supervisión de instalación y pruebas de rendimiento con verificación de tasa de recuperación", "Soporte post-venta, suministro de piezas de desgaste y optimización de procesos", "Equipos de briquetado, peletización y aglomeración — convirtiendo residuos en productos comercializables", "Sistemas de mezcla y dosificación de aglomerantes — formulación precisa para briquetas y pellets duraderos"],
          points_pl:["Analiza strumienia odpadów i ocena potencjału odzysku", "Dobór sprzętu do przeróbki drobnych, szlamów, gruboziarnistych skał płonnych i węgla", "Zakup, logistyka i dostawa kompletnych linii przeróbki odpadów na plac budowy", "Nadzór montażu i testy wydajności z weryfikacją wskaźnika odzysku", "Wsparcie posprzedażowe, dostawa części zużywalnych i optymalizacja procesów", "Sprzęt do brykietowania, peletowania i aglomeracji — przekształcanie odpadów w produkty handlowe", "Systemy mieszania i dozowania spoiw — precyzyjna formulacja dla trwałych brykietów i peletów"]
        }
      ]
    },
    {
      id: "recycling", cls: "recycling", num: "03",
      name_en: "Recycling", name_es: "Reciclaje", name_pl: "Recykling",
      services: [
        {
          id:"wst", num:"01",
          title_en:"Waste Processing — Mining & Industrial Tailings", title_es:"Procesamiento de Relaves y Residuos Industriales", title_pl:"Przeróbka Odpadów Górniczych i Przemysłowych",
          desc_en:"Mechanical and physical processing of mining waste — tailings, waste rock, and spoil tips from coal, ferrous metals (Fe, Mn, Cr), base metals (Cu, Zn, Pb, Ni, Co), precious metals (Au, Ag, Pt, Pd), and rare earth elements (REE). Transforming low-grade stockpiles into marketable concentrates and secondary raw materials — including clean sand for construction and industry.",
          desc_es:"Procesamiento mecánico y físico de residuos mineros — relaves, roca estéril y escombreras de carbón, metales ferrosos, metales base, metales preciosos y tierras raras (REE). Transformando stockpiles de baja ley en concentrados comercializables.",
          desc_pl:"Mechaniczna i fizyczna przeróbka odpadów górniczych — odpadów, skał płonnych i zwałowisk węglowych, metali żelaznych, metali podstawowych, metali szlachetnych i pierwiastków ziem rzadkich (REE). Przekształcanie ubogich stockpili w konflikty rynkowe.",
          points_en:["Waste stream characterisation and liberation analysis — particle size, mineralogy, metal distribution (including trace precious metals and REE), clay content, and comminution behaviour", "Processing technology selection and design — crushing, grinding, screening, gravity separation, magnetic separation, flotation, sensor-based sorting, or hydrometallurgical extraction for REE", "Coal waste processing — recovery of middlings and fine coal from spoil tips for fuel or power generation", "Sand cleaning and desliming — removal of clay, silt, fine gangue, and residual reagents from technogenic sands to produce clean fractions for construction, glass industry, or foundry use", "Base and precious metals tailings processing — copper, zinc, lead, nickel, cobalt, plus gold, silver, platinum, palladium — recovering residual sulphides, oxides, and native metals", "Ferrous metals waste processing — iron, manganese, chromium — magnetic separation and gravity concentration for metallurgical feed", "Rare earth elements (REE) recovery from tailings — neodymium, lanthanum, cerium, praseodymium, scandium, yttrium — using gravity pre-concentration, flotation, or acid leaching", "Yield optimisation and quality control — grade-recovery curves, real-time monitoring, and concentrate certification", "Tailings dewatering and dry stacking — reducing water consumption and eliminating wet tailings dams", "Regulatory compliance and environmental monitoring — permits, discharge limits, dust control, and water recirculation"],
          points_es:["Caracterización de residuos y análisis de liberación — tamaño de partícula, mineralogía, distribución de metales, contenido de arcilla", "Selección y diseño de tecnología de procesamiento — trituración, molienda, cribado, separación gravimétrica, flotación o extracción hidrometalúrgica", "Procesamiento de residuos de carbón — recuperación de intermedios y carbón fino de escombreras", "Limpieza y deslamado de arena — eliminación de arcilla, limo y reactivos residuales de arenas tecnogénicas", "Procesamiento de relaves de metales base y preciosos — cobre, zinc, plomo, níquel, cobalto, oro, plata, platino, paladio", "Procesamiento de residuos de metales ferrosos — hierro, manganeso, cromo — separación magnética y concentración gravimétrica", "Recuperación de tierras raras (REE) de relaves — neodimio, lantano, cerio, praseodimio, escandio, itrio", "Optimización del rendimiento y control de calidad — curvas grado-recuperación y monitorización en tiempo real", "Deshidratación de relaves y apilamiento en seco — reduciendo el consumo de agua", "Cumplimiento regulatorio y monitoreo ambiental — permisos, límites de vertido y control de polvo"],
          points_pl:["Charakterystyka strumienia odpadów i analiza uwolnienia — rozmiar ziarna, mineralogia, rozkład metali, zawartość gliny", "Dobór i projektowanie technologii przeróbki — kruszenie, mielenie, przesiewanie, grawitacja, flotacja lub ekstrakcja hydrometalurgiczna", "Przeróbka odpadów węglowych — odzysk miałów i drobnego węgla ze zwałowisk", "Czyszczenie i odszlamowanie piasku — usuwanie gliny, mułu i resztkowych reagentów z piasków technogenicznych", "Przeróbka odpadów metali podstawowych i szlachetnych — miedź, cynk, ołów, nikiel, kobalt, złoto, srebro, platyna, pallad", "Przeróbka odpadów metali żelaznych — żelazo, mangan, chrom — separacja magnetyczna i koncentracja grawitacyjna", "Odzysk pierwiastków ziem rzadkich (REE) z odpadów — neodym, lantan, cer, prazeodym, skand, itr", "Optymalizacja wydajności i kontrola jakości — krzywe gatunek-odzysk i monitoring w czasie rzeczywistym", "Odwadnianie odpadów i suche składowanie — redukcja zużycia wody", "Zgodność regulacyjna i monitoring środowiskowy — pozwolenia, limity zrzutów i kontrola pyłu"]
        },
        {
          id:"req", num:"02",
          title_en:"Recycling Equipment & Processing Lines", title_es:"Equipos para Procesamiento de Relaves", title_pl:"Sprzęt do Przeróbki Odpadów Górniczych",
          desc_en:"Mechanical and physical processing of mining waste — tailings, waste rock, and spoil tips from coal, ferrous metals (Fe, Mn, Cr), base metals (Cu, Zn, Pb, Ni, Co), precious metals (Au, Ag, Pt, Pd), and rare earth elements (REE). Transforming low-grade stockpiles into marketable concentrates and secondary raw materials — including clean sand for construction and industry.",
          desc_es:"Procesamiento mecánico y físico de residuos mineros de todos los tipos — transformando stockpiles en concentrados comercializables y materias primas secundarias, incluyendo arena limpia para construcción e industria.",
          desc_pl:"Mechaniczna i fizyczna przeróbka wszystkich typów odpadów górniczych — przekształcanie stockpili w konflikty rynkowe i surowce wtórne, w tym czysty piasek do budownictwa i przemysłu.",
          points_en:["Waste stream characterisation and liberation analysis — particle size, mineralogy, metal distribution (including trace precious metals and REE), clay content, and comminution behaviour", "Processing technology selection and design — crushing, grinding, screening, gravity separation, magnetic separation, flotation, sensor-based sorting, or hydrometallurgical extraction for REE", "Coal waste processing — recovery of middlings and fine coal from spoil tips for fuel or power generation", "Sand cleaning and desliming — removal of clay, silt, fine gangue, and residual reagents from technogenic sands to produce clean fractions for construction, glass industry, or foundry use", "Base and precious metals tailings processing — copper, zinc, lead, nickel, cobalt, plus gold, silver, platinum, palladium — recovering residual sulphides, oxides, and native metals", "Ultra-fine particle processing — separation and recovery of valuable components (precious metals, REE, fine sulphides) from particles down to 0.001 mm (1 micron), maximising yield from historically unrecoverable fines", "Ferrous metals waste processing — iron, manganese, chromium — magnetic separation and gravity concentration for metallurgical feed", "Rare earth elements (REE) recovery from tailings — neodymium, lanthanum, cerium, praseodymium, scandium, yttrium — using gravity pre-concentration, flotation, or acid leaching", "Yield optimisation and quality control — grade-recovery curves, real-time monitoring, and concentrate certification", "Tailings dewatering and dry stacking — reducing water consumption and eliminating wet tailings dams", "Regulatory compliance and environmental monitoring — permits, discharge limits, dust control, and water recirculation"],
          points_es:["Caracterización del residuo y análisis de liberación — tamaño de partícula, mineralogía, distribución de metales, contenido de arcilla", "Selección y diseño de tecnología — trituración, molienda, cribado, separación gravimétrica, flotación", "Procesamiento de residuos de carbón — recuperación de intermedios y carbón fino", "Limpieza y deslamado de arena — producción de fracciones limpias para construcción, vidrio o fundición", "Procesamiento de relaves de metales base y preciosos — cobre, zinc, plomo, níquel, oro, plata, platino, paladio", "Tecnología de separación de partículas ultrafinas — recuperación de metales preciosos y REE de partículas hasta 0,001 mm", "Procesamiento de residuos de metales ferrosos — separación magnética y concentración gravimétrica", "Recuperación de REE de relaves — neodimio, lantano, cerio, praseodimio, escandio, itrio", "Optimización del rendimiento y control de calidad", "Deshidratación de relaves y apilamiento en seco", "Cumplimiento regulatorio y monitoreo ambiental"],
          points_pl:["Charakterystyka odpadu i analiza uwolnienia — rozmiar ziarna, mineralogia, rozkład metali, zawartość gliny", "Dobór i projektowanie technologii — kruszenie, mielenie, przesiewanie, grawitacja, flotacja", "Przeróbka odpadów węglowych — odzysk miałów i drobnego węgla", "Czyszczenie i odszlamowanie piasku — produkcja czystych frakcji do budownictwa, szkła lub odlewnictwa", "Przeróbka odpadów metali podstawowych i szlachetnych — miedź, cynk, ołów, nikiel, złoto, srebro, platyna, pallad", "Technologia separacji cząstek ultrarzadkich — odzysk metali szlachetnych i REE z cząstek do 0,001 mm", "Przeróbka odpadów metali żelaznych — separacja magnetyczna i koncentracja grawitacyjna", "Odzysk REE z odpadów — neodym, lantan, cer, prazeodym, skand, itr", "Optymalizacja wydajności i kontrola jakości", "Odwadnianie odpadów i suche składowanie", "Zgodność regulacyjna i monitoring środowiskowy"]
        },
        {
          id:"irt", num:"03",
          title_en:"Innovative Recycling Technologies", title_es:"Tecnologías Innovadoras de Reciclaje", title_pl:"Innowacyjne Technologie Recyklingu",
          desc_en:"Advanced proprietary and integrated technologies that increase profitability and environmental performance of mining waste processing — including ultra-fine particle separation (down to 0.001 mm), coal briquette production, sand cleaning, and energy-efficient beneficiation.",
          desc_es:"Tecnologías avanzadas que aumentan la rentabilidad y el rendimiento ambiental del procesamiento de residuos mineros — incluyendo separación de partículas ultrafinas (hasta 0,001 mm), producción de briquetas de carbón, limpieza de arena y beneficiación eficiente en energía.",
          desc_pl:"Zaawansowane technologie zwiększające rentowność i wydajność środowiskową przeróbki odpadów górniczych — w tym separacja cząstek ultrarzadkich (do 0,001 mm), produkcja brykietów węglowych, czyszczenie piasku i energooszczędne wzbogacanie.",
          points_en:["Ultra-fine particle separation technology — recovery of valuable components (precious metals, REE, fine sulphides) from particles as fine as 0.001 mm (1 micron), unlocking value from historically unrecoverable tailings and slimes", "Coal briquette and pellet production technology — converting fine coal waste and middlings into high-calorific, transportable fuel briquettes for industrial and municipal use", "Technogenic sand cleaning technology — upgrading contaminated mining sands to clean fractions for construction, glass, foundry, and filtration industries", "Energy-efficient beneficiation processes — reduced power consumption per tonne of feed compared to conventional methods, lowering operational costs and carbon footprint", "Digital process optimisation — real-time monitoring, AI-driven grade-recovery control, and predictive maintenance for maximum uptime and recovery", "Technology deployment at client facilities — turnkey installation, integration with existing lines, and full operator training", "Performance benchmarking and continuous improvement — tracking recovery rates, product quality, energy consumption, and equipment uptime, with ongoing process refinement"],
          points_es:["Tecnología de separación de partículas ultrafinas — recuperación de metales preciosos, REE y sulfuros finos de partículas tan finas como 0,001 mm (1 micrón)", "Tecnología de producción de briquetas y pellets de carbón — convirtiendo residuos de carbón fino en combustibles de alto poder calorífico", "Tecnología de limpieza de arena tecnogénica — actualizando arenas mineras contaminadas a fracciones limpias", "Procesos de beneficiación energéticamente eficientes — consumo de energía reducido por tonelada de alimentación", "Optimización de procesos digital — monitorización en tiempo real, control grado-recuperación impulsado por IA y mantenimiento predictivo", "Despliegue de tecnología en instalaciones del cliente — instalación llave en mano e integración con líneas existentes", "Benchmarking de rendimiento y mejora continua — seguimiento de tasas de recuperación, calidad del producto y tiempo de actividad"],
          points_pl:["Technologia separacji cząstek ultrarzadkich — odzysk metali szlachetnych, REE i drobnych siarczków z cząstek do 0,001 mm (1 mikrona)", "Technologia produkcji brykietów i peletów węglowych — przekształcanie drobnych odpadów węglowych w paliwa o wysokiej kaloryczności", "Technologia czyszczenia piasku technogenicznego — ulepszanie skażonych piasków górniczych do czystych frakcji", "Energooszczędne procesy wzbogacania — zmniejszone zużycie energii na tonę nadawy", "Cyfrowa optymalizacja procesów — monitoring w czasie rzeczywistym, sterowanie gatunek-odzysk przez AI i predykcyjne utrzymanie ruchu", "Wdrożenie technologii w obiektach klienta — montaż pod klucz i integracja z istniejącymi liniami", "Benchmarking wydajności i ciągłe doskonalenie — śledzenie wskaźników odzysku, jakości produktu i czasu pracy"]
        },
        {
          id:"sus", num:"04",
          title_en:"Sustainability Projects", title_es:"Proyectos de Sostenibilidad", title_pl:"Projekty Zrównoważonego Rozwoju",
          desc_en:"Sustainability and ESG projects for mining and industrial clients — reducing environmental footprint through waste valorisation, energy-efficient processing, and zero-waste implementation. We turn environmental liabilities into measurable ESG improvements.",
          desc_es:"Proyectos de sostenibilidad y ESG para clientes mineros e industriales — reduciendo la huella ambiental mediante la valorización de residuos, procesamiento eficiente en energía e implementación de cero residuos.",
          desc_pl:"Projekty zrównoważonego rozwoju i ESG dla klientów górniczych i przemysłowych — redukcja śladu środowiskowego poprzez waloryzację odpadów, energooszczędną przeróbkę i wdrożenie zero odpadów.",
          points_en:["Environmental impact assessment and ESG reporting — baseline studies, materiality assessments, and investor-grade sustainability reports aligned with EU standards", "Zero-waste programme design for mining operations — a three-stage approach: Stage 1 — Laboratory analysis: waste characterisation (geochemistry, mineralogy, particle size down to 0.001 mm), beneficiation tests (gravity, magnetic, flotation, leaching) Stage 2 — Feasibility assessment: technical and economic evaluation — recovery rates, product quality, energy consumption, market value Stage 3 — Implementation: process design and deployment for recovery of valuable components and conversion of residual fractions into saleable products (briquettes, clean sand, concentrates)", "Carbon footprint reduction strategies — through energy-efficient comminution, water recirculation, and replacement of virgin raw materials with secondary resources from mining waste", "Water stewardship and recirculation — reducing fresh water intake by up to 80% through closed-loop processing and efficient dewatering of tailings", "Remediation of contaminated sites — former tailings storage facilities, waste dumps, and spoil tips transformed into safe, usable land (agriculture, forestry, or construction)", "Stakeholder engagement and sustainability communication — community relations, regulatory reporting, and ESG communication for investors and lenders"],
          points_es:["Evaluación del impacto ambiental e informes ESG — estudios de referencia, evaluaciones de materialidad e informes de sostenibilidad para inversores alineados con estándares de la UE", "Programa de cero residuos — Etapa 1: análisis de laboratorio; Etapa 2: evaluación de viabilidad técnica y económica; Etapa 3: implementación del proceso", "Estrategias de reducción de huella de carbono — conminución eficiente en energía y sustitución de materias primas vírgenes por recursos secundarios", "Gestión del agua y recirculación — reduciendo la captación de agua dulce hasta en un 80%", "Remediación de sitios contaminados — antiguas instalaciones de relaves transformadas en terrenos seguros y utilizables", "Compromiso con las partes interesadas y comunicación de sostenibilidad — relaciones comunitarias, informes regulatorios y comunicación ESG"],
          points_pl:["Ocena wpływu środowiskowego i raportowanie ESG — badania bazowe, oceny materialności i raporty zrównoważonego rozwoju dla inwestorów", "Program zero odpadów — Etap 1: analiza laboratoryjna; Etap 2: ocena wykonalności technicznej i ekonomicznej; Etap 3: wdrożenie procesu", "Strategie redukcji śladu węglowego — energooszczędne kruszenie i zastąpienie pierwotnych surowców zasobami wtórnymi", "Gospodarka wodna i recyrkulacja — redukcja poboru słodkiej wody nawet o 80%", "Remediacja terenów skażonych — dawne obiekty składowania odpadów przekształcone w bezpieczne, użytkowe tereny", "Zaangażowanie interesariuszy i komunikacja zrównoważonego rozwoju — relacje społecznościowe, raportowanie regulacyjne i komunikacja ESG"]
        },
        {
          id:"bio", num:"05",
          title_en:"Biofuel Solutions", title_es:"Soluciones de Biocombustible", title_pl:"Rozwiązania Biopaliw",
          desc_en:"Production of solid biofuels from biomass grown on contaminated and post-mining lands — tailings, waste dumps, and spoil tips. We convert phytoremediation biomass into commercially viable energy carriers — wood pellets, briquettes, and chips for heat and power generation.",
          desc_es:"Producción de biocombustibles sólidos a partir de biomasa cultivada en terrenos contaminados y post-mineros — relaves, vertederos y escombreras. Convertimos biomasa de fitorremediación en portadores de energía comercialmente viables.",
          desc_pl:"Produkcja stałych biopaliw z biomasy uprawianej na terenach skażonych i pogórniczych — stawach osadowych, hałdach i zwałowiskach. Przekształcamy biomasę fitoremediacyną w komercyjnie opłacalne nośniki energii.",
          points_en:["Feedstock assessment and fuel yield analysis — biomass quality (moisture, ash content, calorific value), harvest volume, and seasonal availability", "Pellet and briquette fuel production systems — drying, grinding, compression, and cooling lines for wood pellets, industrial briquettes, and bio-coal", "Biomass pre-treatment for fuel quality — debarking, chipping, screening, and blending to meet ENplus or ISO 17225 standards for solid biofuels", "Laboratory testing of fuel properties — calorific value, ash melting behaviour, chlorine and sulphur content, and mechanical durability", "Off-take market identification and supply chain setup — connecting biomass producers with heat and power plants, cement kilns, or residential fuel distributors", "Integration with phytoremediation projects — turning environmental liabilities (contaminated sites) into revenue-generating biofuel feedstocks"],
          points_es:["Evaluación de materia prima y análisis de rendimiento de combustible — calidad de biomasa, volumen de cosecha y disponibilidad estacional", "Sistemas de producción de pellets y briquetas — secado, molienda, compresión y enfriamiento", "Pretratamiento de biomasa para calidad del combustible — descortezado, astillado, cribado y mezcla para cumplir normas ENplus o ISO 17225", "Pruebas de laboratorio de propiedades del combustible — valor calorífico, comportamiento de fusión de cenizas, contenido de cloro y azufre", "Identificación del mercado de compra y configuración de la cadena de suministro — conectando productores de biomasa con plantas de calor y energía", "Integración con proyectos de fitorremediación — convirtiendo pasivos ambientales en materias primas de biocombustible que generan ingresos"],
          points_pl:["Ocena surowca i analiza wydajności paliwa — jakość biomasy, wolumen zbioru i dostępność sezonowa", "Systemy produkcji peletów i brykietów — suszenie, mielenie, prasowanie i chłodzenie", "Wstępna obróbka biomasy dla jakości paliwa — korowarka, rębak, przesiewacz i blending do standardów ENplus lub ISO 17225", "Laboratoryjne badania właściwości paliwa — wartość opałowa, zachowanie popiołu, zawartość chloru i siarki", "Identyfikacja rynku odbioru i konfiguracja łańcucha dostaw — łączenie producentów biomasy z elektrociepłowniami", "Integracja z projektami fitoremediacyi — przekształcanie zobowiązań środowiskowych w dochodowe surowce biopaliw"]
        },
        {
          id:"lan", num:"06",
          title_en:"Land Reclamation", title_es:"Recuperación de Tierras", title_pl:"Rekultywacja Terenów",
          desc_en:"Ecological restoration and rehabilitation of territories impacted by mining and industrial activity — tailings storage facilities, waste dumps, spoil tips, quarries, and processing sites. Bringing degraded land back to agricultural, forestry, recreational, or construction use.",
          desc_es:"Restauración ecológica y rehabilitación de territorios afectados por la actividad minera e industrial — instalaciones de relaves, vertederos, escombreras, canteras y sitios de procesamiento. Devolviendo tierras degradadas al uso agrícola, forestal, recreativo o de construcción.",
          desc_pl:"Ekologiczna odbudowa i rehabilitacja terenów dotkniętych działalnością górniczą i przemysłową — stawów osadowych, hałd, zwałowisk, kamieniołomów i miejsc przeróbki. Przywracanie zdegradowanych terenów do użytkowania rolniczego, leśnego, rekreacyjnego lub budowlanego.",
          points_en:["Site contamination assessment and remediation planning — geochemistry, heavy metal distribution, acid rock drainage potential, and prioritisation of remediation actions", "Soil restoration and technogenic sand upgrading — removing contaminants, adjusting pH, improving structure, and producing clean soil substrates from processed mining sands", "Revegetation programmes using hyperaccumulator and fast-growing species — stabilising surfaces, extracting residual metals, and producing biomass for biofuel or timber", "Post-mining landscape rehabilitation — reshaping of waste dumps and spoil tips, slope stabilisation, erosion control, and water management", "Reclamation for construction use — former industrial sites and tailings facilities prepared for residential, commercial, or infrastructure development (civil segment)", "Reclamation for agriculture and forestry — restoring topsoil, planting cover crops, and establishing productive land uses", "Long-term monitoring and ecological compliance — water quality, soil stability, vegetation health, and regulatory reporting", "Carbon credit certification for reforestation — verified carbon removal from restored forests and grasslands on former mining lands"],
          points_es:["Evaluación de contaminación del sitio y planificación de remediación — geoquímica, distribución de metales pesados y priorización de acciones", "Restauración del suelo y mejora de arena tecnogénica — eliminación de contaminantes, ajuste de pH y mejora de estructura", "Programas de revegetación con especies hiperacumuladoras y de crecimiento rápido", "Rehabilitación del paisaje post-minero — remodelación de vertederos y escombreras, estabilización de taludes y control de erosión", "Reclamación para uso de construcción — antiguos sitios industriales preparados para desarrollo residencial, comercial o de infraestructura", "Reclamación para uso agrícola y forestal — restaurando el suelo superficial y estableciendo usos productivos del terreno", "Monitoreo a largo plazo y cumplimiento ecológico — calidad del agua, estabilidad del suelo, salud de la vegetación e informes regulatorios", "Certificación de créditos de carbono por reforestación — eliminación de carbono verificada de bosques restaurados en tierras mineras"],
          points_pl:["Ocena skażenia terenu i planowanie remediacji — geochemia, rozkład metali ciężkich i priorytyzacja działań", "Odbudowa gleby i ulepszanie piasku technogenicznego — usuwanie zanieczyszczeń, regulacja pH i poprawa struktury", "Programy zalesiania z gatunkami hiperakumulującymi i szybkorosnącymi", "Rehabilitacja krajobrazu pogórniczego — przekształcanie hałd i zwałowisk, stabilizacja skarp i kontrola erozji", "Rekultywacja pod zabudowę — dawne tereny przemysłowe przygotowane pod zabudowę mieszkaniową, komercyjną lub infrastrukturalną", "Rekultywacja pod użytkowanie rolnicze i leśne — odbudowa wierzchniej warstwy gleby i ustanawianie produktywnego użytkowania terenu", "Długoterminowy monitoring i zgodność ekologiczna — jakość wody, stabilność gleby, kondycja roślinności i raportowanie regulacyjne", "Certyfikacja kredytów węglowych za zalesianie — zweryfikowane usuwanie dwutlenku węgla z przywróconych lasów"]
        }
      ]
    }
  ]
};


var UI = {
  en: {
    "nav.directions":"Our Expertise","nav.about":"About Us","nav.contacts":"Contacts",
    "ui.scroll":"Scroll","ui.directions":"Our Expertise","ui.pillars":"",
    "ui.about":"About Us","ui.contact":"Get in Touch","ui.company":"Company",
    "ui.email":"Email","ui.phone":"Phone","ui.fname":"Your Name",
    "ui.femail":"Email Address","ui.fdir":"Direction of Interest",
    "ui.fmsg":"Message","ui.fsend":"Send Message",
    "ui.back":"Back to Directions","div.construction":"Construction","div.recycling":"Recycling",
    "hero.tagline":"Engineering · Geology · Innovation",
    "hero.sub":"Mine<br>&middot;<br>Construction<br>&middot;<br>Recycling",
    "ui.readmore":"Read full section →","ui.searchph":"Search services..."
  },
  es: {
    "nav.directions":"Nuestra Especialidad","nav.about":"Sobre Nosotros","nav.contacts":"Contactos",
    "ui.scroll":"Desplazar","ui.directions":"Nuestra Especialidad","ui.pillars":"",
    "ui.about":"Sobre Nosotros","ui.contact":"Contáctenos","ui.company":"Empresa",
    "ui.email":"Correo","ui.phone":"Teléfono","ui.fname":"Su Nombre",
    "ui.femail":"Correo Electrónico","ui.fdir":"Dirección de Interés",
    "ui.fmsg":"Mensaje","ui.fsend":"Enviar Mensaje",
    "ui.back":"Volver a Direcciones","div.construction":"Construcción","div.recycling":"Reciclaje",
    "hero.tagline":"Ingeniería · Geología · Innovación",
    "hero.sub":"Minería<br>&middot;<br>Construcción<br>&middot;<br>Reciclaje",
    "ui.readmore":"Leer sección completa →","ui.searchph":"Buscar servicios..."
  },
  pl: {
    "nav.directions":"Nasza Specjalizacja","nav.about":"O Nas","nav.contacts":"Kontakt",
    "ui.scroll":"Przewiń","ui.directions":"Nasza Specjalizacja","ui.pillars":"",
    "ui.about":"O Nas","ui.contact":"Skontaktuj Się","ui.company":"Firma",
    "ui.email":"E-mail","ui.phone":"Telefon","ui.fname":"Twoje Imię",
    "ui.femail":"Adres E-mail","ui.fdir":"Kierunek Zainteresowania",
    "ui.fmsg":"Wiadomość","ui.fsend":"Wyślij Wiadomość",
    "ui.back":"Powrót do Kierunków","div.construction":"Budownictwo","div.recycling":"Recykling",
    "hero.tagline":"Inżynieria · Geologia · Innowacja",
    "hero.sub":"Górnictwo<br>&middot;<br>Budownictwo<br>&middot;<br>Recykling",
    "ui.readmore":"Czytaj pełną sekcję →","ui.searchph":"Szukaj usług..."
  }
};


/* Smooth scroll polyfill — works on all iOS */
function smoothScrollTo(targetY) {
  var startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  var duration = 600;
  var startTime = null;
  function easeInOut(t) {
    return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
  }
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOut(progress));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(step);
  } else {
    window.scrollTo(0, targetY);
  }
}

var lang = 'en';
var accOpen = {};
var isLight = false;

/* ── THEME ── */
function setTheme(light) {
  isLight = light;
  document.documentElement.className = light ? 'light' : '';
  var icon = light ? '\u2600' : '\u263e';
  var t1 = document.getElementById('themeThumb');
  var t2 = document.getElementById('mobileThemeThumb');
  var lbl = document.getElementById('mobileThemeLabel');
  if (t1) t1.innerHTML = icon;
  if (t2) t2.innerHTML = icon;
  if (lbl) lbl.textContent = light ? 'Light Mode' : 'Dark Mode';
}


/* ══ ЯКОРНЫЕ URL ══ */
function updateAnchor() {
  var secs = ['overview','about','contact'];
  var cur = '';
  for (var i = 0; i < secs.length; i++) {
    var el = document.getElementById(secs[i]);
    if (el && el.getBoundingClientRect().top <= 120) cur = secs[i];
  }
  if (cur) {
    try { window.history.replaceState(null, '', '#' + cur); } catch(e) {}
  }
}

/* ── SCROLL — использует polyfill вместо behavior:'smooth' ── */
function goTo(el) {
  if (!el) return;
  var top = el.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - 76;
  smoothScrollTo(top < 0 ? 0 : top);
}
function scrollToOverview() { goTo(document.getElementById('overview')); }

/* ── CLICK SERVICE FROM GRID ── */
function clickService(svcId, divId) {
  closeMenu();
  if (!accOpen[divId]) {
    openAcc(divId);
    setTimeout(function() { goTo(document.getElementById('svc-' + svcId)); }, 520);
  } else {
    goTo(document.getElementById('svc-' + svcId));
  }
}

/* ── ACCORDION ── */
function openAcc(divId) {
  accOpen[divId] = true;
  var sec  = document.getElementById('divsec-' + divId);
  var body = document.getElementById('accbody-' + divId);
  var hint = document.getElementById('acchint-' + divId);
  if (!sec || !body) return;
  sec.className = 'div-section open';
  if (hint) { hint.style.display = 'none'; }
  /* Убедимся что стартуем с 0 для анимации */
  body.style.transition = 'none';
  body.style.height = '0px';
  body.style.overflow = 'hidden';
  /* reflow — браузер видит height:0 */
  void body.offsetHeight;
  /* Теперь включаем transition и анимируем до полной высоты */
  body.style.transition = '';
  var target = body.scrollHeight;
  body.style.height = target + 'px';
  var timer = setTimeout(function() {
    if (accOpen[divId]) {
      body.style.height = 'auto';
      body.style.overflow = '';
      if (typeof doReveal === 'function') doReveal();
    }
  }, 500);
  body.addEventListener('transitionend', function onEnd() {
    clearTimeout(timer);
    if (accOpen[divId]) {
      body.style.height = 'auto';
      body.style.overflow = '';
      if (typeof doReveal === 'function') doReveal();
    }
    body.removeEventListener('transitionend', onEnd);
  });
}
function closeAcc(divId) {
  accOpen[divId] = false;
  var sec  = document.getElementById('divsec-' + divId);
  var body = document.getElementById('accbody-' + divId);
  var hint = document.getElementById('acchint-' + divId);
  if (!sec || !body) return;
  /* Если height:auto — фиксируем пиксельное значение для анимации */
  if (body.style.height === 'auto' || body.style.height === '') {
    body.style.transition = 'none';
    body.style.height = body.offsetHeight + 'px';
    void body.offsetHeight; /* reflow */
    body.style.transition = '';
  }
  body.style.overflow = 'hidden';
  /* reflow */
  void body.offsetHeight;
  /* Анимируем к 0 */
  body.style.height = '0px';
  sec.className = 'div-section';
  if (hint) { hint.style.display = ''; }
  setTimeout(function() {
    /* Принудительно показываем соседние секции */
    if (typeof doReveal === 'function') doReveal();
    /* Показываем секции которые ещё не видны */
    var allRv = document.querySelectorAll('#sections .rv:not(.rvd)');
    for (var ri = 0; ri < allRv.length; ri++) {
      if (allRv[ri].getBoundingClientRect().top < window.innerHeight * 1.5) {
        allRv[ri].classList.add('rvd');
      }
    }
  }, 460);
}


function toggleAcc(divId) {
  if (accOpen[divId]) { closeAcc(divId); } else { openAcc(divId); }
}

/* ── RENDER GRID — createElement, без innerHTML ── */
function renderGrid() {
  var grid = document.getElementById('divGrid');
  if (!grid) return;
  grid.innerHTML = '';
  var i, j, div, s, card, numEl, dotEl, nameEl, ul, li, tip;
  for (i = 0; i < CONTENT.divisions.length; i++) {
    div = CONTENT.divisions[i];
    card = document.createElement('div');
    card.className = 'div-card';
    card.setAttribute('data-div', div.cls);
    numEl = document.createElement('div'); numEl.className = 'div-num'; numEl.textContent = div.num;
    dotEl = document.createElement('div'); dotEl.className = 'div-dot';
    nameEl = document.createElement('h3'); nameEl.className = 'div-name'; nameEl.textContent = div['name_' + lang];
    ul = document.createElement('ul'); ul.className = 'div-services';
    for (j = 0; j < div.services.length; j++) {
      s = div.services[j];
      li = document.createElement('li');
      li.textContent = s['title_' + lang];
      var tipText = TIPS[lang] && TIPS[lang][s.id] ? TIPS[lang][s.id] : (TIPS['en'][s.id] || '');
      if (tipText) { tip = document.createElement('span'); tip.className = 'svc-tip'; tip.textContent = tipText; li.appendChild(tip); }
      (function(sId, dId) {
        li.addEventListener('click', function(e) { e.stopPropagation(); clickService(sId, dId); });
      })(s.id, div.id);
      ul.appendChild(li);
    }
    card.appendChild(numEl); card.appendChild(dotEl); card.appendChild(nameEl); card.appendChild(ul);
    /* Кнопка каталога снизу карточки для mine и recycling */
    if (div.cls === 'mine' || div.cls === 'recycling') {
      var catCardBtn = document.createElement('button');
      catCardBtn.className = 'catalog-card-btn';
      (function(cls) { catCardBtn.addEventListener('click', function(e) { e.stopPropagation(); showCatalog(cls); }); })(div.cls);
      var catLabelsCard = {en:'View Catalogue', es:'Ver Cat\u00e1logo', pl:'Katalog Produkt\u00f3w'};
      catCardBtn.textContent = catLabelsCard[lang] || 'View Catalogue';
      card.appendChild(catCardBtn);
    }
    grid.appendChild(card);
  }
}


/* ── RENDER SECTIONS ── */
function renderSections() {
  var container = document.getElementById('sectionsContainer');
  if (!container) return;
  container.innerHTML = '';
  var i, j, k, div, s, pts;
  var wrap, hdr, dot, num, name, arrowWrap, hint, body, sec, inner, left, svcNum, tag, title, line, back, bDiv, desc, ul, li, sep;
  for (i = 0; i < CONTENT.divisions.length; i++) {
    div = CONTENT.divisions[i];
    wrap = document.createElement('div');
    wrap.className = accOpen[div.id] ? 'div-section open' : 'div-section';
    wrap.id = 'divsec-' + div.id;
    hdr = document.createElement('div'); hdr.className = 'div-section-header';
    (function(id) { hdr.addEventListener('click', function() { toggleAcc(id); }); })(div.id);
    dot = document.createElement('div'); dot.className = 'dsh-dot ' + div.cls;
    num = document.createElement('span'); num.className = 'dsh-num'; num.textContent = div.num;
    name = document.createElement('span'); name.className = 'dsh-name ' + div.cls; name.textContent = div['name_' + lang];
    arrowWrap = document.createElement('div'); arrowWrap.className = 'dsh-arrow';
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns,'svg'); svg.setAttribute('width','13'); svg.setAttribute('height','8'); svg.setAttribute('viewBox','0 0 13 8'); svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor'); svg.setAttribute('stroke-width','1.6'); svg.setAttribute('stroke-linecap','round'); svg.setAttribute('stroke-linejoin','round');
    var pl = document.createElementNS(ns,'polyline'); pl.setAttribute('points','1,1 6.5,7 12,1'); svg.appendChild(pl);
    arrowWrap.appendChild(svg);
    hdr.appendChild(dot); hdr.appendChild(num); hdr.appendChild(name); hdr.appendChild(arrowWrap);
    wrap.appendChild(hdr);
    hint = document.createElement('div'); hint.className = 'dsh-hint'; hint.id = 'acchint-' + div.id;
    var hintParts = [];
    for (j = 0; j < div.services.length; j++) { hintParts.push(div.services[j]['title_' + lang]); }
    hint.textContent = hintParts.join(' \u00b7 ');
    if (accOpen[div.id]) { hint.style.display = 'none'; }
    wrap.appendChild(hint);
    body = document.createElement('div'); body.className = 'div-section-body'; body.id = 'accbody-' + div.id;
    body.style.height = accOpen[div.id] ? 'auto' : '0px';
    body.style.overflow = 'hidden';
    body.style.webkitTransition = 'height .45s cubic-bezier(.4,0,.2,1)';
    body.style.transition = 'height .45s cubic-bezier(.4,0,.2,1)';
    for (j = 0; j < div.services.length; j++) {
      s = div.services[j]; pts = s['points_' + lang] || [];
      sec = document.createElement('section'); sec.className = 'svc-section'; sec.id = 'svc-' + s.id;
      inner = document.createElement('div'); inner.className = 'svc-inner';
      left = document.createElement('div'); left.className = 'svc-left';
      svcNum = document.createElement('div'); svcNum.className = 'svc-num'; svcNum.textContent = s.num;
      tag = document.createElement('p'); tag.className = 'svc-tag ' + div.cls; tag.textContent = div['name_' + lang];
      title = document.createElement('h2'); title.className = 'svc-title'; title.textContent = s['title_' + lang];
      line = document.createElement('div'); line.className = 'svc-line ' + div.cls;
      back = document.createElement('button'); back.className = 'svc-back';
      back.textContent = '\u2191 ' + (UI[lang]['ui.back'] || 'Back');
      back.addEventListener('click', scrollToOverview);
      /* Кнопка каталога для mine и recycling */
      if (div.cls === 'mine' || div.cls === 'recycling') {
        var catBtnSvc = document.createElement('button');
        catBtnSvc.className = 'catalog-btn';
        (function(cls){ catBtnSvc.addEventListener('click', function(){ showCatalog(cls); }); })(div.cls);
        var catLabelsSvc = {en:'View Catalogue',es:'Ver Cat\u00e1logo',pl:'Katalog Produkt\u00f3w'};
        catBtnSvc.textContent = catLabelsSvc[lang] || 'View Catalogue';
      }
      left.appendChild(svcNum); left.appendChild(tag); left.appendChild(title); left.appendChild(line); left.appendChild(back);
      if (div.cls === 'mine' || div.cls === 'recycling') { left.appendChild(catBtnSvc); }
      bDiv = document.createElement('div'); bDiv.className = 'svc-body';
      desc = document.createElement('p'); desc.className = 'svc-desc'; desc.textContent = s['desc_' + lang] || '';
      bDiv.appendChild(desc);
      if (pts.length > 0) {
        ul = document.createElement('ul'); ul.className = 'svc-points';
        for (k = 0; k < pts.length; k++) { li = document.createElement('li'); li.textContent = pts[k]; ul.appendChild(li); }
        bDiv.appendChild(ul);
      }
      inner.appendChild(left); inner.appendChild(bDiv); sec.appendChild(inner); body.appendChild(sec);
    }
    wrap.appendChild(body); container.appendChild(wrap);
    sep = document.createElement('div'); sep.className = 'sep'; container.appendChild(sep);
  }
}

function renderAbout() {
  var a = CONTENT.about, el;
  el = document.getElementById('about-title'); if(el) el.innerHTML = a['title_' + lang];
  el = document.getElementById('about-p1');    if(el) el.innerHTML = a['p1_' + lang];
  el = document.getElementById('about-p2');    if(el) el.innerHTML = a['p2_' + lang];
  el = document.getElementById('about-p3');    if(el) el.innerHTML = a['p3_' + lang];
  var statsEl = document.getElementById('about-stats');
  if (!statsEl) return;
  statsEl.innerHTML = '';
  for (var i = 0; i < a.stats.length; i++) {
    var d = document.createElement('div'); d.className = 'stat';
    var n = document.createElement('div'); n.className = 'stat-n'; n.textContent = a.stats[i].n;
    var l = document.createElement('div'); l.className = 'stat-l'; l.textContent = a.stats[i]['l_' + lang];
    d.appendChild(n); d.appendChild(l); statsEl.appendChild(d);
  }
}

/* ── RENDER CONTACTS ── */
function renderContacts() {
  var c = CONTENT.contacts;
  var e1=document.getElementById('c-company'), e2=document.getElementById('c-email'),
      e3=document.getElementById('c-phone'),   e4=document.getElementById('contact-title');
  if(e1) e1.textContent = c.company;
  if(e2) e2.textContent = c.email;
  if(e3) e3.textContent = c.phone;
  var titles = { en:"Get in Touch", es:"Contáctenos", pl:"Skontaktuj Się" };
  if(e4) e4.innerHTML = titles[lang];
}

/* ── APPLY UI ── */
function applyUI() {
  var t = UI[lang], els = document.querySelectorAll('[data-i18n]'), i, k;
  for (i = 0; i < els.length; i++) {
    k = els[i].getAttribute('data-i18n');
    if (t[k] !== undefined) els[i].innerHTML = t[k];
  }
  /* Переводим placeholder */
  var ph = document.getElementById('nav-search-input');
  if (ph && t['ui.searchph']) ph.placeholder = t['ui.searchph'];
  /* Переводим кнопку Read full section */
  var rmBtn = document.getElementById('modal-read-more');
  if (rmBtn && t['ui.readmore']) rmBtn.textContent = t['ui.readmore'];
  /* Переводим side-nav метки */
  var sideLabels = {
    en:['Our Expertise','Mine · Construction · Recycling','About Us'],
    es:['Nuestra Especialidad','Minería · Construcción · Reciclaje','Sobre Nosotros'],
    pl:['Nasza Specjalizacja','Górnictwo · Budownictwo · Recykling','O Nas']
  };
  var sdEls = document.querySelectorAll('#side-nav .sd-lbl');
  var sdLbls = sideLabels[lang] || sideLabels.en;
  for (var sdi = 0; sdi < sdEls.length && sdi < sdLbls.length; sdi++) {
    sdEls[sdi].textContent = sdLbls[sdi];
  }
}

/* ── SET LANGUAGE ── */
function setLang(l) {
  lang = l;
  var ids = ['en','es','pl'], i;
  for (i = 0; i < ids.length; i++) {
    var db = document.getElementById('btn-' + ids[i]);
    var mb = document.getElementById('mbtn-' + ids[i]);
    if (db) { db.className = (ids[i] === l) ? 'lang-btn active' : 'lang-btn'; }
    if (mb) { mb.className = (ids[i] === l) ? 'active' : ''; }
  }
  renderGrid(); renderSections(); renderAbout(); renderContacts(); applyUI();
  /* Обновляем кнопки языка в overlay каталога */
  var catMap = {en:'cat-btn-en', es:'cat-btn-es', pl:'cat-btn-pl'};
  for (var cl in catMap) {
    var cb2 = document.getElementById(catMap[cl]);
    if (cb2) cb2.className = (cl === l) ? 'lang-btn active' : 'lang-btn';
  }
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  var b = document.getElementById('burger'), n = document.getElementById('mobileNav');
  if (!b || !n) return;
  var open = n.className.indexOf('open') >= 0;
  if (open) { n.className='mobile-nav'; b.className='burger'; document.body.style.overflow=''; }
  else { n.className='mobile-nav open'; b.className='burger open'; document.body.style.overflow='hidden'; }
}
function closeMenu() {
  var b=document.getElementById('burger'), n=document.getElementById('mobileNav');
  if(b) b.className='burger'; if(n) n.className='mobile-nav'; document.body.style.overflow='';
}

/* ── HIDE LOADING ── надёжный способ для iOS ── */
function hideLoading() {
  var loading = document.getElementById('loading');
  if (!loading) return;
  /* Fade + принудительное скрытие */
  loading.className = 'fade';
  /* iOS: через 200мс точно скрываем */
  setTimeout(function() {
    if (loading) {
      loading.style.opacity = '0';
      loading.style.pointerEvents = 'none';
      loading.style.display = 'none';
    }
  }, 200);
}

/* ── INIT ── */
function safeInit() {
  var i, ids;
  /* Авто-определение языка */
  lang = detectLang();

  /* Аккордеоны */
  for (i = 0; i < CONTENT.divisions.length; i++) { accOpen[CONTENT.divisions[i].id] = true; }

  /* Рендер */
  renderGrid(); renderSections(); renderAbout(); renderContacts(); applyUI();
  /* Обновим active класс кнопок языка сразу при загрузке */
  var _langIds = ['en','es','pl'];
  for (var _li = 0; _li < _langIds.length; _li++) {
    var _db = document.getElementById('btn-' + _langIds[_li]);
    var _mb = document.getElementById('mbtn-' + _langIds[_li]);
    if (_db) _db.className = (_langIds[_li] === lang) ? 'lang-btn active' : 'lang-btn';
    if (_mb) _mb.className = (_langIds[_li] === lang) ? 'active' : '';
  }

  /* Theme */
  var desktopCb = document.getElementById('themeCheckbox');
  var mobileCb  = document.getElementById('mobileThemeCheckbox');
  if (desktopCb) {
    desktopCb.addEventListener('change', function() {
      setTheme(this.checked);
      if (mobileCb) { mobileCb.checked = this.checked; }
    });
  }
  if (mobileCb) {
    mobileCb.addEventListener('change', function() {
      setTheme(this.checked);
      if (desktopCb) { desktopCb.checked = this.checked; }
    });
  }

  /* Lang */
  ids = ['en','es','pl'];
  for (i = 0; i < ids.length; i++) {
    (function(ll) {
      var db = document.getElementById('btn-' + ll);
      var mb = document.getElementById('mbtn-' + ll);
      if (db) db.addEventListener('click', function() { setLang(ll); });
      if (mb) mb.addEventListener('click', function() { setLang(ll); });
    })(ids[i]);
  }

  /* Burger */
  var burger = document.getElementById('burger');
  if (burger) burger.addEventListener('click', toggleMenu);

  /* Mobile links */
  var mlinks = document.querySelectorAll('.mobile-nav a');
  for (i = 0; i < mlinks.length; i++) { mlinks[i].addEventListener('click', closeMenu); }

  /* Nav smooth scroll */
  var navLinks = document.querySelectorAll('.nav-center a');
  for (i = 0; i < navLinks.length; i++) {
    (function(a) {
      a.addEventListener('click', function(e) {
        var href = a.getAttribute('href');
        if (href && href.charAt(0) === '#') {
          e.preventDefault();
          var target = document.getElementById(href.substring(1));
          if (target) goTo(target);
        }
      });
    })(navLinks[i]);
  }

  /* Скрыть loading */
  hideLoading();
  /* Запускаем все фишки */
  initAllFeatures();
  window._siteReady = true;
}

window.addEventListener('resize', function() { if (window.innerWidth > 768) closeMenu(); });

/* ── SAFE BOOT — работает на iOS file:// ── */
function runInit() {
  try {
    safeInit();
  } catch(e) {
    /* Показать ошибку прямо на экране для отладки */
    var loading = document.getElementById('loading');
    if (loading) {
      loading.style.background = '#0a0a0a';
      loading.style.display = 'flex';
      loading.style.opacity = '1';
      loading.style.flexDirection = 'column';
      loading.style.padding = '30px';
      loading.innerHTML = '<div style="color:#c9a84c;font-family:monospace;font-size:14px;word-break:break-all;text-align:left;max-width:90vw;">ERROR: ' + e.message + '<br><br>' + (e.stack||'') + '</div>';
    }
  }
}

/* runInit() оставлен как фолбэк, но НЕ регистрируется здесь — boot() ниже вызывает safeInit() один раз */

/* ══════════════════════════════════════
   АВТО-ЯЗЫК
   ══════════════════════════════════════ */
function detectLang() {
  var SITE_VER = 'v3'; /* меняй при каждом деплое чтобы сбросить старые настройки */
  var saved = null;
  try {
    /* Если версия сайта изменилась — сбрасываем старый выбор языка */
    if (localStorage.getItem('mcr_site_ver') !== SITE_VER) {
      localStorage.removeItem('mcr_lang');
      localStorage.removeItem('mcr_lang_manual');
      localStorage.setItem('mcr_site_ver', SITE_VER);
    }
    var manualChoice = localStorage.getItem('mcr_lang_manual');
    if (manualChoice === '1') {
      saved = localStorage.getItem('mcr_lang');
    }
  } catch(e) {}
  if (saved && ['en','es','pl'].indexOf(saved) >= 0) return saved;
  var bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (bl.indexOf('es') === 0) return 'es';
  if (bl.indexOf('pl') === 0) return 'pl';
  if (bl.indexOf('pl') === 0) return 'pl';
  return 'en';
}

/* ══════════════════════════════════════
   PRELOADER
   ══════════════════════════════════════ */
function runPreloader(onDone) {
  var pre = document.getElementById('preloader');
  if (!pre) { onDone(); return; }
  var letters = pre.querySelectorAll('.pre-letter');
  var grp = pre.querySelector('.pre-group');
  var bar = document.getElementById('pre-bar-fill');
  var idx = 0;
  function next() {
    if (idx >= letters.length) {
      if (grp) {
        grp.style.webkitTransition = grp.style.transition = 'opacity .45s ease, -webkit-transform .45s ease, transform .45s ease';
        grp.style.opacity = '1';
        grp.style.webkitTransform = grp.style.transform = 'translateY(0)';
      }
      setTimeout(function() {
        if (bar) bar.style.width = '100%';
        setTimeout(function() {
          pre.className = 'exit';
          setTimeout(function() {
            pre.style.display = 'none';
            onDone();
          }, 650);
        }, 750);
      }, 300);
      return;
    }
    var l = letters[idx];
    l.style.webkitTransition = l.style.transition = 'opacity .38s ease, -webkit-transform .38s ease, transform .38s ease';
    l.style.opacity = '1';
    l.style.webkitTransform = l.style.transform = 'translateY(0)';
    idx++;
    setTimeout(next, 110);
  }
  setTimeout(next, 180);
}

/* ══════════════════════════════════════
   CURSOR
   ══════════════════════════════════════ */
function initCursor() {
  var dot  = document.getElementById('cur-dot');
  var ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;
  /* Показываем курсор только на устройствах с мышью */
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  } else {
    /* Телефон/планшет — скрываем курсор и возвращаем стандартный */
    dot.style.display  = 'none';
    ring.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }
  var mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
    dot.className = 'on';
    ring.className = 'on';
  });
  function animRing() {
    rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    window.requestAnimationFrame(animRing);
  }
  window.requestAnimationFrame(animRing);
  document.addEventListener('mousedown', function() { dot.classList.add('click'); ring.classList.add('click'); });
  document.addEventListener('mouseup',   function() { dot.classList.remove('click'); ring.classList.remove('click'); });
  document.addEventListener('mouseleave', function() { dot.className=''; ring.className=''; });
}

/* ══════════════════════════════════════
   TYPING EFFECT
   ══════════════════════════════════════ */
var typingTimer = null;
var TAGLINE_TEXT = {
  en: 'Engineering · Geology · Innovation',
  es: 'Ingeniería · Geología · Innovación',
  pl: 'Inżynieria · Geologia · Innowacja'
};
function startTyping() {
  var el = document.querySelector('.hero-tagline');
  if (!el) return;
  if (typingTimer) clearInterval(typingTimer);
  var text = TAGLINE_TEXT[lang] || TAGLINE_TEXT['en'];
  el.textContent = '';
  var cur = document.createElement('span');
  cur.className = 'tcur'; el.appendChild(cur);
  var i = 0;
  typingTimer = setInterval(function() {
    if (i < text.length) { el.insertBefore(document.createTextNode(text[i]), cur); i++; }
    else { clearInterval(typingTimer); setTimeout(function(){ if(cur.parentNode) cur.style.display='none'; }, 1000); }
  }, 52);
}

/* ══════════════════════════════════════
   MARQUEE
   ══════════════════════════════════════ */
var MQ_WORDS = {
  en: ['Mine','Construction','Recycling','MCR Planet','Geological Services','Engineering','Sustainability','Innovation','Bioremediation','Land Reclamation','Cross-Border Projects'],
  es: ['Minería','Construcción','Reciclaje','MCR Planet','Servicios Geológicos','Ingeniería','Sostenibilidad','Innovación','Biorremediación','Recuperación de Tierras','Proyectos Transfronterizos'],
  pl: ['Górnictwo','Budownictwo','Recykling','MCR Planet','Usługi Geologiczne','Inżynieria','Zrównoważony Rozwój','Innowacja','Bioremediacja','Rekultywacja Terenów','Projekty Transgraniczne']
};
function insertMarquee() {
  var existing = document.querySelector('.mq-wrap');
  var sep = document.querySelector('.sep');
  if (!sep) return;
  var words = MQ_WORDS[lang] || MQ_WORDS['en'];
  var html = '<div class="mq-track">';
  var full = words.concat(words);
  for (var i=0;i<full.length;i++) html += '<span class="mq-item">'+full[i]+'<span class="mq-dot">\u00b7</span></span>';
  html += '</div>';
  if (existing) {
    existing.innerHTML = html;
  } else {
    var w = document.createElement('div');
    w.className = 'mq-wrap'; w.innerHTML = html;
    sep.parentNode.insertBefore(w, sep.nextSibling);
  }
}

/* ══════════════════════════════════════
   TOOLTIPS
   ══════════════════════════════════════ */
var TIPS = {
  en: {geo:'Surveys to assess deposit potential & reduce risks',exp:'Full-cycle from planning to geological documentation',res:'Independent reserve assessment per JORC & CRIRSCO',adv:'Strategic consulting for launching mining projects',cbp:'End-to-end international mining project management',ant:'Extracting resources from industrial waste & tailings',phy:'Mineral extraction using hyperaccumulator plants',ind:'Turnkey design & construction of industrial facilities',eng:'Engineering support at all project stages',tec:'Partnerships with technology leaders',eqp:'Selection & procurement of industrial equipment',wst:'Modern waste processing for maximum resource recovery',req:'Specialised equipment for all recycling material types',irt:'Advanced recycling tech including pellet production',sus:'ESG strategy & zero-waste programme implementation',bio:'Alternative fuel production from waste biomass',lan:'Ecological restoration of industrial territories',nwp:'Innovative projects — contact us to discuss'},
  es: {geo:'Evaluación del potencial de yacimientos y reducción de riesgos',exp:'Ciclo completo desde planificación hasta documentación geológica',res:'Evaluación independiente de reservas según JORC y CRIRSCO',adv:'Consultoría estratégica para lanzar proyectos mineros',cbp:'Gestión integral de proyectos mineros internacionales',ant:'Extracción de recursos de residuos industriales y estériles',phy:'Extracción de minerales usando plantas hiperacumuladoras',ind:'Diseño y construcción llave en mano de instalaciones industriales',eng:'Soporte de ingeniería en todas las etapas del proyecto',tec:'Asociaciones con líderes tecnológicos',eqp:'Selección y adquisición de equipos industriales',wst:'Procesamiento moderno de residuos para máxima recuperación',req:'Equipos especializados para todos los tipos de reciclaje',irt:'Tecnologías avanzadas de reciclaje incluyendo producción de pellets',sus:'Estrategia ESG e implementación de programa cero residuos',bio:'Producción de combustible alternativo de biomasa residual',lan:'Restauración ecológica de territorios industriales',nwp:'Proyectos innovadores — contáctenos para discutir'},
  pl: {geo:'Ocena potencjału złóż i redukcja ryzyka inwestycyjnego',exp:'Pełny cykl od planowania do dokumentacji geologicznej',res:'Niezależna ocena zasobów wg JORC i CRIRSCO',adv:'Doradztwo strategiczne przy uruchamianiu projektów górniczych',cbp:'Kompleksowe zarządzanie międzynarodowymi projektami górniczymi',ant:'Wydobycie zasobów z odpadów przemysłowych i hałd',phy:'Wydobycie minerałów z użyciem roślin hiperakumulujących',ind:'Projektowanie i budowa obiektów przemysłowych pod klucz',eng:'Wsparcie inżynieryjne na wszystkich etapach projektu',tec:'Partnerstwa z liderami technologicznymi',eqp:'Dobór i zakup sprzętu przemysłowego',wst:'Nowoczesne przetwarzanie odpadów dla maksymalnego odzysku',req:'Specjalistyczny sprzęt dla wszystkich typów recyklingu',irt:'Zaawansowane technologie recyklingu w tym produkcja pelletów',sus:'Strategia ESG i wdrożenie programu zero odpadów',bio:'Produkcja paliwa alternatywnego z biomasy odpadowej',lan:'Ekologiczna rekultywacja terenów przemysłowych',nwp:'Innowacyjne projekty — skontaktuj się z nami'}
};

/* ══════════════════════════════════════
   ПЕРЕОПРЕДЕЛЯЕМ renderGrid С TOOLTIPS
   ══════════════════════════════════════ */
var _origRG = renderGrid;
renderGrid = function() {
  var grid = document.getElementById('divGrid');
  if (!grid) return;
  grid.innerHTML = '';
  var i,j,div,s,card,numEl,dotEl,nameEl,ul,li,tip;
  for (i=0;i<CONTENT.divisions.length;i++) {
    div = CONTENT.divisions[i];
    card = document.createElement('div'); card.className='div-card rv'; card.setAttribute('data-div',div.cls);
    numEl = document.createElement('div'); numEl.className='div-num'; numEl.textContent=div.num;
    dotEl = document.createElement('div'); dotEl.className='div-dot';
    nameEl = document.createElement('h3'); nameEl.className='div-name'; nameEl.textContent=div['name_'+lang];
    ul = document.createElement('ul'); ul.className='div-services';
    for (j=0;j<div.services.length;j++) {
      s = div.services[j];
      li = document.createElement('li'); li.textContent=s['title_'+lang];
      var tipText = TIPS[lang] && TIPS[lang][s.id] ? TIPS[lang][s.id] : (TIPS['en'][s.id] || ''); if (tipText) { tip=document.createElement('span'); tip.className='svc-tip'; tip.textContent=tipText; li.appendChild(tip); }
      (function(sId,dId){ li.addEventListener('click',function(e){e.stopPropagation();clickService(sId,dId);}); })(s.id,div.id);
      ul.appendChild(li);
    }
    card.appendChild(numEl); card.appendChild(dotEl); card.appendChild(nameEl); card.appendChild(ul);
    /* Кнопка каталога снизу карточки */
    if (div.cls === 'mine' || div.cls === 'recycling') {
      var catCardBtn = document.createElement('button');
      catCardBtn.className = 'catalog-card-btn';
      (function(cls){ catCardBtn.addEventListener('click', function(e){ e.stopPropagation(); showCatalog(cls); }); })(div.cls);
      var catLabelsCard = {en:'View Catalogue',es:'Ver Cat\u00e1logo',pl:'Katalog Produkt\u00f3w'};
      catCardBtn.textContent = catLabelsCard[lang] || 'View Catalogue';
      card.appendChild(catCardBtn);
    }
    grid.appendChild(card);
  }
};

/* ══════════════════════════════════════
   СЧЁТЧИК ЦИФР
   ══════════════════════════════════════ */
var counted = false;
function animCount(el, target, suf) {
  var s=0, dur=1500, st=null;
  var inf = !isFinite(target);
  function step(ts) {
    if(!st) st=ts;
    var p=Math.min((ts-st)/dur,1), e=1-Math.pow(1-p,3);
    el.textContent = inf ? (p>=1?'\u221e':Math.floor(e*99)+'') : Math.floor(e*target)+(p>=1?suf:'');
    if(p<1) window.requestAnimationFrame(step);
    else el.textContent = inf?'\u221e':target+suf;
  }
  window.requestAnimationFrame(step);
}
function tryCount() {
  if (counted) return;
  var el = document.getElementById('about-stats');
  if (!el) return;
  if (el.getBoundingClientRect().top < window.innerHeight*0.88) {
    counted = true;
    var ns = el.querySelectorAll('.stat-n');
    var data = [{v:3,s:''},{v:17,s:'+'},{v:3,s:''},{v:Infinity,s:''}];
    for (var i=0;i<ns.length;i++) { (function(n,d){ animCount(n,d.v,d.s); })(ns[i],data[i]||{v:0,s:''}); }
  }
}

/* ══════════════════════════════════════
   ПАРАЛЛАКС
   ══════════════════════════════════════ */
function doParallax() {
  var sy = window.pageYOffset||0;
  var g=document.querySelector('.hero-grid'), b=document.querySelector('.hero-bg');
  if(g) g.style.webkitTransform=g.style.transform='translateY('+(sy*.32)+'px)';
  if(b) b.style.webkitTransform=b.style.transform='translateY('+(sy*.18)+'px)';
}

/* ══════════════════════════════════════
   ПРОГРЕСС-БАР
   ══════════════════════════════════════ */
function doProgress() {
  var bar=document.getElementById('spbar'); if(!bar) return;
  var sy=window.pageYOffset||0, total=document.documentElement.scrollHeight-window.innerHeight;
  bar.style.width=(total>0?(sy/total*100):0)+'%';
}

/* ══════════════════════════════════════
   SIDE NAV + СКРЫВАЮЩИЙСЯ НАВБАР
   ══════════════════════════════════════ */
var lastSY=0, navEl=document.querySelector('nav');
function doNav() {
  var sn=document.getElementById('side-nav'); if(!sn) return;
  var sy=window.pageYOffset||0;
  sn.className = sy>300 ? 'vis' : '';
  var secs=['overview','sections','about'], act='overview';
  for(var i=0;i<secs.length;i++){var e=document.getElementById(secs[i]);if(e&&e.getBoundingClientRect().top<=120)act=secs[i];}
  var dots=sn.querySelectorAll('.sd');
  for(var j=0;j<dots.length;j++) dots[j].className=dots[j].getAttribute('data-t')===act?'sd act':'sd';
  if(sy<80){if(navEl)navEl.className=navEl.className.replace(' hn','');}
  else if(sy>lastSY+8){if(navEl&&navEl.className.indexOf('hn')<0)navEl.className+=' hn';}
  else if(sy<lastSY-6){if(navEl)navEl.className=navEl.className.replace(' hn','');}
  lastSY=sy;
}

/* ══════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════ */
var bttEl=document.getElementById('btt');
function doBTT() {
  if(!bttEl) return;
  bttEl.className = (window.pageYOffset||0)>600 ? 'vis' : '';
}

/* ══════════════════════════════════════
   REVEAL АНИМАЦИИ
   ══════════════════════════════════════ */
function doReveal() {
  var els=document.querySelectorAll('.rv:not(.rvd)');
  for(var i=0;i<els.length;i++){
    if(els[i].getBoundingClientRect().top<window.innerHeight*.92) els[i].classList.add('rvd');
  }
}
function addReveal() {
  var tgts=document.querySelectorAll('.overview,.svc-section,.about,.contact,.stat,.div-card');
  for(var i=0;i<tgts.length;i++) tgts[i].classList.add('rv');
}

/* ══════════════════════════════════════
   ЯКОРНЫЕ URL
   ══════════════════════════════════════ */
function doAnchor() {
  var secs=['overview','about','contact'], cur='';
  for(var i=0;i<secs.length;i++){var e=document.getElementById(secs[i]);if(e&&e.getBoundingClientRect().top<=120)cur=secs[i];}
  if(cur){try{window.history.replaceState(null,'','#'+cur);}catch(e){}}
}

/* ══════════════════════════════════════
   COPY CONTACTS
   ══════════════════════════════════════ */
var toastT=null;
function showToast(m) {
  var t=document.getElementById('toast'); if(!t) return;
  t.textContent=m; t.className='show';
  if(toastT) clearTimeout(toastT);
  toastT=setTimeout(function(){t.className='';},2000);
}
function copyStr(s) {
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(s).then(function(){showToast('Copied!');});}
  else{var ta=document.createElement('textarea');ta.value=s;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');showToast('Copied!');}catch(e){}document.body.removeChild(ta);}
}
function initCopy() {
  var email=document.getElementById('c-email'), phone=document.getElementById('c-phone');
  function mk(el){
    if(!el) return;
    var v=el.textContent; el.className='c-val copy-val';
    var ic=document.createElement('span'); ic.className='copy-ic'; ic.textContent=' \u29c9'; el.appendChild(ic);
    el.addEventListener('click',function(){copyStr(v);});
  }
  mk(email); mk(phone);
}

/* ══════════════════════════════════════
   ВАЛИДАЦИЯ ФОРМЫ
   ══════════════════════════════════════ */
function initValidation() {
  var inps=document.querySelectorAll('.f-input,.f-textarea');
  for(var i=0;i<inps.length;i++) {
    (function(inp){
      var msg=document.createElement('div'); msg.className='f-msg';
      if(inp.parentNode) inp.parentNode.appendChild(msg);
      inp.addEventListener('blur',function(){
        var v=inp.value.trim();
        if(!v){inp.className=(inp.tagName==='TEXTAREA'?'f-textarea':'f-input');msg.textContent='';return;}
        var base=inp.tagName==='TEXTAREA'?'f-textarea':'f-input';
        if(inp.type==='email'){var ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);inp.className=base+(ok?' ok':' err');msg.className='f-msg'+(ok?' ok':' err');msg.textContent=ok?'\u2713 Valid':'\u2715 Invalid email';}
        else{var ok2=v.length>=2;inp.className=base+(ok2?' ok':' err');msg.className='f-msg'+(ok2?' ok':' err');msg.textContent=ok2?'':'\u2715 Required';}
      });
      inp.addEventListener('focus',function(){inp.className=(inp.tagName==='TEXTAREA'?'f-textarea':'f-input');msg.textContent='';});
    })(inps[i]);
  }
  var btn=document.querySelector('.f-btn');
  if(btn){btn.addEventListener('click',function(){
    var ok=true;
    var nm=document.querySelector('.f-input[name="from_name"]');
    var em=document.querySelector('.f-input[name="from_email"]');
    var dr=document.querySelector('.f-input[name="direction"]');
    var ms=document.querySelector('.f-textarea[name="message"]');
    [nm,em].forEach(function(e){if(e&&!e.value.trim()){e.className='f-input err';ok=false;}});
    if(em && em.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())){em.className='f-input err';ok=false;}
    if(!ok) return;
    var ot=btn.textContent;
    var configured = window.emailjs && window.EMAILJS_PUBLIC_KEY && window.EMAILJS_PUBLIC_KEY.indexOf('YOUR_') !== 0
                     && window.EMAILJS_SERVICE_ID && window.EMAILJS_SERVICE_ID.indexOf('YOUR_') !== 0
                     && window.EMAILJS_TEMPLATE_ID && window.EMAILJS_TEMPLATE_ID.indexOf('YOUR_') !== 0;
    if(!configured){
      btn.textContent='\u26a0 EmailJS not configured';
      btn.style.background='#c0392b';btn.style.borderColor='#c0392b';btn.style.color='#fff';
      console.warn('EmailJS keys not set. Edit window.EMAILJS_* in <head> of index.html');
      setTimeout(function(){btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';},3500);
      return;
    }
    btn.disabled = true;
    btn.textContent='Sending...';
    var params = {
      from_name: nm ? nm.value.trim() : '',
      from_email: em ? em.value.trim() : '',
      direction: dr ? dr.value.trim() : '',
      message: ms ? ms.value.trim() : ''
    };
    emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, params)
      .then(function(){
        btn.textContent='\u2713 Sent!';
        btn.style.background='#5a9e6f';btn.style.borderColor='#5a9e6f';btn.style.color='#fff';
        if(nm)nm.value='';if(em)em.value='';if(dr)dr.value='';if(ms)ms.value='';
        document.querySelectorAll('.f-input,.f-textarea').forEach(function(el){
          el.className = el.tagName==='TEXTAREA' ? 'f-textarea' : 'f-input';
        });
        document.querySelectorAll('.f-msg').forEach(function(m){ m.textContent=''; });
        setTimeout(function(){
          btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';
          btn.disabled=false;
        },3000);
      })
      .catch(function(err){
        console.error('EmailJS error:', err);
        btn.textContent='\u2715 Failed';
        btn.style.background='#c0392b';btn.style.borderColor='#c0392b';btn.style.color='#fff';
        setTimeout(function(){
          btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';
          btn.disabled=false;
        },3500);
      });
  });}
}

/* ══════════════════════════════════════
   МАГНИТНЫЕ КНОПКИ
   ══════════════════════════════════════ */
function initMagnetic() {
  var btns=[];
  for(var i=0;i<btns.length;i++){
    (function(b){
      b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)*.28,dy=(e.clientY-r.top-r.height/2)*.28;b.style.webkitTransform=b.style.transform='translate('+dx+'px,'+dy+'px)';});
      b.addEventListener('mouseleave',function(){b.style.webkitTransform=b.style.transform='translate(0,0)';});
    })(btns[i]);
  }
}

/* ══════════════════════════════════════
   ПАМЯТЬ НАСТРОЕК
   ══════════════════════════════════════ */
function savePrefs() {
  try{
    localStorage.setItem('mcr_lang', lang);
    localStorage.setItem('mcr_lang_manual', '1'); /* пометка: выбрано вручную */
    localStorage.setItem('mcr_theme', isLight ? '1' : '0');
  }catch(e){}
}
function loadPrefs() {
  try{
    var th=localStorage.getItem('mcr_theme');
    if(th==='1'){setTheme(true);var c1=document.getElementById('themeCheckbox'),c2=document.getElementById('mobileThemeCheckbox');if(c1)c1.checked=true;if(c2)c2.checked=true;}
  }catch(e){}
}

/* ══════════════════════════════════════
   ПАТЧИМ setLang и setTheme
   ══════════════════════════════════════ */
/* патч setLang перенесён в boot-секцию */
var _oST=setTheme; setTheme=function(lt){_oST(lt);savePrefs();};

/* ══════════════════════════════════════
   ГЛАВНЫЙ SCROLL HANDLER
   ══════════════════════════════════════ */
function onScrollMain() {
  doProgress(); doParallax(); doNav(); doBTT(); tryCount(); doReveal(); doAnchor(); updateHeroTint();

}

/* ══════════════════════════════════════
   SIDE NAV КЛИКИ
   ══════════════════════════════════════ */
function initSideNav() {
  var sn=document.getElementById('side-nav'); if(!sn) return;
  var dots=sn.querySelectorAll('.sd');
  for(var i=0;i<dots.length;i++){
    (function(d){d.addEventListener('click',function(){var t=document.getElementById(d.getAttribute('data-t'));if(t)goTo(t);});})(dots[i]);
  }
}

/* ══════════════════════════════════════
   BACK TO TOP КЛИК
   ══════════════════════════════════════ */
function initBTT() {
  var b=document.getElementById('btt');
  if(b) b.addEventListener('click',function(){smoothScrollTo(0);});
}

/* ══════════════════════════════════════
   ГЛАВНАЯ ИНИЦИАЛИЗАЦИЯ ФИШЕК
   ══════════════════════════════════════ */
function initAllFeatures() {
  initCursor();
  insertMarquee();
  initSideNav();
  initBTT();
  initCopy();
  initValidation();
  initMagnetic();
  addReveal();
  loadPrefs();
  window.addEventListener('scroll', onScrollMain, {passive:true});
  onScrollMain();
  setTimeout(doReveal, 200);
  initNewFeatures();
}

/* ══════════════════════════════════════
   АВТО-ЯЗЫК + ПАТЧ safeInit + BOOT
   ══════════════════════════════════════ */
var _origSafeInit = safeInit;
safeInit = function() {
  lang = detectLang();
  _origSafeInit();
};

var _origSetLangF = setLang;
setLang = function(l) {
  _origSetLangF(l); savePrefs(); insertMarquee();
  if(window._siteReady){
    setTimeout(function(){ window._typingDone=true; startTyping(); },150);
    addReveal(); setTimeout(doReveal,100);
  }
  /* Обновляем каталог если он открыт */
  var catOverlay = document.getElementById('catalog-overlay');
  if (catOverlay && catOverlay.className === 'open') {
    if (typeof renderCatalogue === 'function') renderCatalogue();
    if (typeof catSyncUI === 'function') catSyncUI();
  }
};
var _origSetThemeF = setTheme;
setTheme = function(lt) { _origSetThemeF(lt); savePrefs(); };

function boot() {
  /* Всегда начинаем сверху — фикс для мобильного */
  window.scrollTo(0, 0);
  if (window.history && window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  }
  var ld = document.getElementById('loading');
  if (ld) ld.style.display = 'none';
  runPreloader(function() { safeInit(); setTimeout(function(){ if(!window._typingDone){ window._typingDone=true; startTyping(); }}, 400); });
}

window.addEventListener('resize', function() { if (window.innerWidth > 768) closeMenu(); });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* ══ ПОИСК ══ */
function initSearch() {
  var input    = document.getElementById('nav-search-input');
  var clearBtn = document.getElementById('nav-search-clear');
  if (!input) return;

  /* Создаём дропдаун */
  var wrap = document.getElementById('nav-search-wrap');
  var dropdown = document.createElement('div');
  dropdown.id = 'nav-search-dropdown';
  wrap.appendChild(dropdown);

  function doSearch(q) {
    dropdown.innerHTML = '';
    if (!q) { dropdown.className = ''; if(clearBtn) clearBtn.style.display='none'; return; }
    if(clearBtn) clearBtn.style.display = '';
    var found = 0;
    for (var i = 0; i < CONTENT.divisions.length; i++) {
      var div = CONTENT.divisions[i];
      for (var j = 0; j < div.services.length; j++) {
        var s = div.services[j];
        var title = s['title_' + lang] || '';
        var desc  = s['desc_'  + lang] || '';
        if (title.toLowerCase().indexOf(q) >= 0 || desc.toLowerCase().indexOf(q) >= 0) {
          found++;
          (function(sId, dId, t, dName) {
            var item = document.createElement('div');
            item.className = 'search-item';
            var tag = document.createElement('span'); tag.className = 'search-item-tag'; tag.textContent = dName;
            var nm  = document.createElement('span'); nm.className  = 'search-item-name';  nm.textContent = t;
            item.appendChild(tag); item.appendChild(nm);
            item.addEventListener('mousedown', function(e) {
              e.preventDefault();
              dropdown.className = ''; input.value = '';
              if(clearBtn) clearBtn.style.display='none';
              clickService(sId, dId);
            });
            dropdown.appendChild(item);
          })(s.id, div.id, title, div['name_' + lang] || '');
        }
      }
    }
    if (!found) {
      var em = document.createElement('div');
      em.className = 'search-empty';
      em.textContent = (lang === 'es') ? 'Sin resultados para "'+input.value+'"' : (lang === 'pl') ? 'Brak wyników dla "'+input.value+'"' : 'No results for "'+input.value+'"';
      dropdown.appendChild(em);
    }
    dropdown.className = 'open';
  }

  input.addEventListener('input', function() { doSearch(input.value.trim().toLowerCase()); });
  input.addEventListener('blur',  function() { setTimeout(function(){ dropdown.className=''; },150); });
  input.addEventListener('focus', function() { if(input.value.trim()) doSearch(input.value.trim().toLowerCase()); });
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      input.value = ''; dropdown.className = ''; clearBtn.style.display='none'; input.focus();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { dropdown.className=''; input.blur(); }
  });
}

/* ══ ХЛЕБНЫЕ КРОШКИ ══ */
var bcCurrentService = '';
function updateBreadcrumb() {
  var bc = document.getElementById('breadcrumb');
  var bcSvc = document.getElementById('bc-service');
  var bcSec = document.getElementById('bc-section');
  if (!bc) return;
  var sy = window.pageYOffset || 0;
  if (sy < 200) { bc.className = ''; bcCurrentService = ''; return; }
  var secs = document.querySelectorAll('.svc-section');
  var current = null;
  for (var i = 0; i < secs.length; i++) {
    if (secs[i].getBoundingClientRect().top <= 140) current = secs[i];
  }
  if (current) {
    var titleEl = current.querySelector('.svc-title');
    var tagEl   = current.querySelector('.svc-tag');
    var title = titleEl ? titleEl.textContent : '';
    var tag   = tagEl   ? tagEl.textContent   : '';
    /* Определяем раздел по классу тега */
    var divCls = '';
    if (tagEl) {
      if (tagEl.className.indexOf('mine') >= 0)         divCls = 'div-mine';
      else if (tagEl.className.indexOf('construction') >= 0) divCls = 'div-construction';
      else if (tagEl.className.indexOf('recycling') >= 0)    divCls = 'div-recycling';
    }
    if (bcSec) bcSec.textContent = tag;
    if (bcSvc) bcSvc.textContent = title;
    bcCurrentService = title;
    bc.className = 'show ' + divCls;
  } else {
    bc.className = ''; bcCurrentService = '';
  }
}


/* ══ МОДАЛЬНОЕ ОКНО ══ */
var _origClickSvc = clickService;
clickService = function(svcId, divId) {
  var svc = null, divObj = null;
  for (var i = 0; i < CONTENT.divisions.length; i++) {
    if (CONTENT.divisions[i].id === divId) {
      divObj = CONTENT.divisions[i];
      for (var j = 0; j < divObj.services.length; j++) {
        if (divObj.services[j].id === svcId) { svc = divObj.services[j]; break; }
      }
      break;
    }
  }
  if (!svc || !divObj) { _origClickSvc(svcId, divId); return; }
  var overlay = document.getElementById('modal-overlay');
  if (!overlay) { _origClickSvc(svcId, divId); return; }
  var tag   = document.getElementById('modal-tag');
  var title = document.getElementById('modal-title');
  var desc  = document.getElementById('modal-desc');
  var pts   = document.getElementById('modal-points');
  var btn   = document.getElementById('modal-read-more');
  if (tag)   tag.textContent   = divObj['name_'  + lang] || '';
  if (title) title.textContent = svc['title_' + lang]    || '';
  if (desc)  desc.textContent  = svc['desc_'  + lang]    || '';
  if (pts) {
    pts.innerHTML = '';
    var points = svc['points_' + lang] || [];
    for (var k = 0; k < points.length; k++) {
      var li = document.createElement('li'); li.textContent = points[k]; pts.appendChild(li);
    }
  }
  if (btn) {
    btn.onclick = function() { overlay.className = ''; _origClickSvc(svcId, divId); };
  }
  overlay.className = 'open';
};
function initModal() {
  var overlay = document.getElementById('modal-overlay');
  var closeBtn = document.getElementById('modal-close');
  if (!overlay) return;
  if (closeBtn) closeBtn.addEventListener('click', function() { overlay.className = ''; });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.className = ''; });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') overlay.className = ''; });
}

/* ══ COOKIE BANNER ══ */
function initCookie() {
  var banner = document.getElementById('cookie-banner');
  var accept = document.getElementById('cookie-accept');
  var decline = document.getElementById('cookie-decline');
  if (!banner) return;
  try { if (localStorage.getItem('mcr_cookie')) return; } catch(e) {}
  setTimeout(function() { banner.className = 'show'; }, 2500);
  function dismiss(val) {
    banner.className = '';
    try { localStorage.setItem('mcr_cookie', val); } catch(e) {}
  }
  if (accept)  accept.addEventListener('click',  function() { dismiss('1'); });
  if (decline) decline.addEventListener('click', function() { dismiss('0'); });
}

/* ══ FAB СОЦСЕТИ ══ */
function initFab() {
  var toggle = document.getElementById('fab-toggle');
  if (!toggle) return;
  var btns = document.querySelectorAll('#social-fab .fab-btn');
  var open = false;
  toggle.addEventListener('click', function() {
    open = !open;
    toggle.className = open ? 'fab-toggle open' : 'fab-toggle';
    for (var i = btns.length - 1; i >= 0; i--) {
      (function(btn, delay) {
        setTimeout(function() {
          if (open) {
            btn.className = btn.className + ' show';
          } else {
            btn.className = btn.className.replace(' show', '');
          }
        }, delay);
      })(btns[i], (btns.length - 1 - i) * 60);
    }
  });
}

/* ══ ОБНОВЛЁННЫЙ SCROLL — добавляем breadcrumb ══ */
var _origOnScrollMain = onScrollMain;
onScrollMain = function() {
  _origOnScrollMain();
  updateBreadcrumb();
};

/* ══ ИНИЦИАЛИЗАЦИЯ НОВЫХ ФИШЕК ══ */
function initNewFeatures() {
  initSearch();
  initMobSearch();
  initModal();
  initCatModal();
  initCookie();
  initFab();
}




/* ══ SMOOTH SECTION COLOR TRANSITION ══ */
var currentTintClass = '';
function updateHeroTint() {
  var tint = document.getElementById('hero-tint');
  if (!tint) return;
  /* Ищем активный раздел аккордеона */
  var secs = document.querySelectorAll('.svc-section');
  var active = null;
  for (var i = 0; i < secs.length; i++) {
    var rect = secs[i].getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
      active = secs[i]; break;
    }
  }
  var divCls = '';
  if (active) {
    var tag = active.querySelector('.svc-tag');
    if (tag) {
      if (tag.className.indexOf('mine') >= 0)         divCls = 'mine';
      else if (tag.className.indexOf('construction') >= 0) divCls = 'construction';
      else if (tag.className.indexOf('recycling') >= 0)    divCls = 'recycling';
      else if (tag.className.indexOf('new') >= 0)          divCls = 'new';
    }
  }
  if (divCls !== currentTintClass) {
    currentTintClass = divCls;
    tint.className = 'hero-tint' + (divCls ? ' ' + divCls : '');
    tint.style.opacity = divCls ? '1' : '0';
  }
}



/* ══ PDF ВИЗИТКА ══ */
function generatePDF() {
  /* Загружаем jsPDF динамически */
  if (window.jspdf) { buildPDF(); return; }
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  script.onload = function() { buildPDF(); };
  script.onerror = function() { showToast('PDF error — no internet'); };
  document.head.appendChild(script);
}

function buildPDF() {
  var jsPDF = window.jspdf ? window.jspdf.jsPDF : null;
  if (!jsPDF) { showToast('PDF library error'); return; }
  var doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  var W = doc.internal.pageSize.getWidth();

  /* Фон */
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, W, 297, 'F');

  /* Золотая верхняя линия */
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.8);
  doc.line(20, 18, W - 20, 18);

  /* MCR */
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(38);
  doc.setFont('helvetica','bold');
  doc.text('MCR', 20, 40);

  /* PLANET */
  doc.setTextColor(240, 237, 230);
  doc.setFontSize(22);
  doc.setFont('helvetica','normal');
  doc.text('PLANET', 20, 52);

  /* Tagline */
  doc.setTextColor(130, 120, 100);
  doc.setFontSize(7.5);
  doc.setFont('helvetica','normal');
  doc.text('ENGINEERING  \u00b7  GEOLOGY  \u00b7  INNOVATION', 20, 62);

  /* Разделитель */
  doc.setDrawColor(50, 48, 44);
  doc.setLineWidth(0.3);
  doc.line(20, 68, W - 20, 68);

  /* Directions */
  var dirs = [
    {name:'Mine',        color:[201,168,76]},
    {name:'Construction',color:[74,127,165]},
    {name:'Recycling',   color:[90,158,111]}
  ];
  var dx = 20;
  for (var d = 0; d < dirs.length; d++) {
    doc.setFillColor(dirs[d].color[0], dirs[d].color[1], dirs[d].color[2]);
    doc.circle(dx + 2, 74.5, 1.8, 'F');
    doc.setTextColor(dirs[d].color[0], dirs[d].color[1], dirs[d].color[2]);
    doc.setFontSize(7); doc.setFont('helvetica','bold');
    doc.text(dirs[d].name.toUpperCase(), dx + 6.5, 75.5);
    dx += 44;
  }

  /* Контакты */
  var c = CONTENT && CONTENT.contacts ? CONTENT.contacts : {};
  var contacts = [
    { label:'COMPANY', value: c.company || 'MCR Planet' },
    { label:'EMAIL',   value: c.email   || 'info@mcrgroup.biz' },

  ];

  var y = 92;
  for (var i = 0; i < contacts.length; i++) {
    /* Label */
    doc.setTextColor(100, 95, 85);
    doc.setFontSize(6.5); doc.setFont('helvetica','bold');
    doc.text(contacts[i].label, 20, y);
    /* Value */
    doc.setTextColor(240, 237, 230);
    doc.setFontSize(10); doc.setFont('helvetica','normal');
    doc.text(contacts[i].value, 20, y + 6);
    y += 18;
  }

  /* Нижняя линия + копирайт */
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.5);
  doc.line(20, 270, W - 20, 270);
  doc.setTextColor(100, 95, 85);
  doc.setFontSize(6.5); doc.setFont('helvetica','normal');
  doc.text('\u00a9 2026 MCR Planet. All rights reserved.', 20, 276);
  doc.text('nexlyy.github.io/mcr', W - 20, 276, { align:'right' });

  doc.save('MCR-Planet-Contact.pdf');
  showToast('PDF downloaded!');
}



/* ══ МОБИЛЬНЫЙ ПОИСК ══ */
function initMobSearch() {
  var btn      = document.getElementById('mob-search-btn');
  var overlay  = document.getElementById('mob-search-overlay');
  var field    = document.getElementById('mob-search-field');
  var cancel   = document.getElementById('mob-search-cancel');
  var results  = document.getElementById('mob-search-results');
  if (!btn || !overlay) return;

  btn.addEventListener('click', function() {
    overlay.className = 'open';
    setTimeout(function(){ if(field) field.focus(); }, 150);
  });

  function closeSearch() {
    overlay.className = '';
    results.className = '';
    if (field) field.value = '';
    results.innerHTML = '';
  }

  if (cancel) cancel.addEventListener('click', closeSearch);

  if (field) {
    field.addEventListener('input', function() {
      var q = field.value.trim().toLowerCase();
      results.innerHTML = '';
      if (!q) { results.className = ''; return; }
      var found = 0;
      for (var i = 0; i < CONTENT.divisions.length; i++) {
        var div = CONTENT.divisions[i];
        for (var j = 0; j < div.services.length; j++) {
          var s = div.services[j];
          var title = s['title_' + lang] || '';
          var desc  = s['desc_'  + lang] || '';
          if (title.toLowerCase().indexOf(q) >= 0 || desc.toLowerCase().indexOf(q) >= 0) {
            found++;
            (function(sId, dId, t, dName) {
              var item = document.createElement('div');
              item.className = 'search-item';
              var tag = document.createElement('span'); tag.className='search-item-tag'; tag.textContent=dName;
              var nm  = document.createElement('span'); nm.className='search-item-name';  nm.textContent=t;
              item.appendChild(tag); item.appendChild(nm);
              item.addEventListener('click', function() {
                closeSearch();
                clickService(sId, dId);
              });
              results.appendChild(item);
            })(s.id, div.id, title, div['name_' + lang] || '');
          }
        }
      }
      if (!found) {
        var em = document.createElement('div'); em.className='search-empty';
        em.textContent = lang==='pl' ? 'Brak wyników dla "'+field.value+'"' : lang==='es' ? 'Sin resultados' : 'No results for "'+field.value+'"';
        results.appendChild(em);
      }
      results.className = 'open';
    });
  }
}




var currentFilter = 'all';

/* ══ КАТАЛОГ ══ */

var CATALOGUE = {
  mine: [],
  recycling: []
};

var currentFilter = 'all';

function renderCatalogue() {
  var content = document.getElementById('cat-content');
  if (!content) return;
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  /* Переводим заголовок и описание */
  var catTitles = {en:'Equipment Catalogue', es:'Catálogo de Equipos', pl:'Katalog Sprzętu'};
  var catDescs = {
    en:'Comprehensive supply of industrial equipment and processing technologies for mining waste reprocessing, recycling, and biofuel production. Select a category to explore our solutions.',
    es:'Suministro integral de equipos industriales y tecnologías de procesamiento para el reprocesamiento de residuos mineros, reciclaje y producción de biocombustibles. Seleccione una categoría.',
    pl:'Kompleksowa dostawa sprzętu przemysłowego i technologii przetwarzania do przeróbki odpadów górniczych, recyklingu i produkcji biopaliw. Wybierz kategorię.'
  };
  var catFilterLabels = {en:['All Equipment','Mine Division','Recycling Division'], es:['Todo el Equipo','División Minería','División Reciclaje'], pl:['Cały Sprzęt','Dział Górnictwo','Dział Recykling']};
  var comingSoonText = {en:'Equipment catalogue is being prepared. Please contact us for specific inquiries.', es:'El catálogo de equipos está en preparación. Contáctenos para consultas específicas.', pl:'Katalog sprzętu jest w przygotowaniu. Skontaktuj się z nami w sprawie zapytań.'};
  var catTitleEl = document.querySelector('#catalog-overlay .cat-title');
  var catDescEl  = document.querySelector('#catalog-overlay .cat-desc');
  if (catTitleEl) catTitleEl.textContent = catTitles[cl] || catTitles.en;
  if (catDescEl)  catDescEl.textContent  = catDescs[cl]  || catDescs.en;
  var filters = document.querySelectorAll('#catalog-overlay .cat-filter');
  var labels = catFilterLabels[cl] || catFilterLabels.en;
  for (var fi = 0; fi < filters.length && fi < labels.length; fi++) {
    filters[fi].textContent = labels[fi];
  }
  content.innerHTML = '';
  var divNamesMap = {mine:{en:'Mine Division',es:'División Minería',pl:'Dział Górnictwo'}, recycling:{en:'Recycling Division',es:'División Reciclaje',pl:'Dział Recykling'}};
  var divColors = {mine:'mine', recycling:'recycling'};
  var hasContent = false;
  Object.keys(CATALOGUE).forEach(function(div) {
    if (currentFilter !== 'all' && currentFilter !== div) return;
    var items = CATALOGUE[div] || [];
    /* Если фильтр == конкретный раздел И он пустой — всё равно покажем заголовок (как раньше) */
    if (items.length === 0 && currentFilter === 'all') return;
    if (items.length > 0) hasContent = true;
    var divName = (divNamesMap[div] && divNamesMap[div][cl]) || divNamesMap[div].en;
    var head = document.createElement('div');
    head.className = 'cat-section-head';
    var htitle = document.createElement('h2');
    htitle.className = 'cat-section-title';
    var dot = document.createElement('span');
    dot.className = 'cat-section-dot ' + divColors[div];
    htitle.appendChild(dot);
    htitle.appendChild(document.createTextNode(divName));
    head.appendChild(htitle);
    content.appendChild(head);
    var grid = document.createElement('div');
    grid.className = 'cat-grid';
    items.forEach(function(item) {
      var itemTitle = item['title_' + cl] || item.title_en || '';
      var itemDesc  = item['desc_'  + cl] || item.desc_en  || '';
      var itemPts   = item['points_' + cl] || item.points_en || [];
      var card = document.createElement('div');
      card.className = 'cat-card ' + div;
      card.style.cursor = 'pointer';
      (function(t, d, pts, dn, imgSrc) {
        card.addEventListener('click', function(e) {
          if (e.target.classList.contains('cat-card-link')) return;
          showCatModal(t, d, pts, dn, imgSrc);
        });
      })(itemTitle, itemDesc, itemPts, divName, item.image || '');
      var tag = document.createElement('div'); tag.className = 'cat-card-tag ' + div; tag.textContent = divName;
      var t = document.createElement('h3'); t.className = 'cat-card-title'; t.textContent = itemTitle;
      var d = document.createElement('p'); d.className = 'cat-card-desc'; d.textContent = itemDesc;
      var ul = document.createElement('ul'); ul.className = 'cat-card-points';
      itemPts.forEach(function(pt) { var li = document.createElement('li'); li.textContent = pt; ul.appendChild(li); });
      var reqLabel = {en:'Request Information →', es:'Solicitar Información →', pl:'Zapytaj o Ofertę →'};
      var link = document.createElement('button'); link.className = 'cat-card-link'; link.textContent = reqLabel[cl] || reqLabel.en;
      link.addEventListener('click', function(e) {
        e.stopPropagation(); hideCatalog();
        setTimeout(function() { var c = document.getElementById('contact'); if (c && typeof goTo === 'function') goTo(c); }, 500);
      });
      card.appendChild(tag); card.appendChild(t); card.appendChild(d); card.appendChild(ul); card.appendChild(link);
      grid.appendChild(card);
    });
    content.appendChild(grid);
  });
  /* Заглушка если нет контента */
  if (!hasContent) {
    var emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = 'padding:60px 52px;text-align:center;color:var(--text-3);font-family:"Nunito",sans-serif;font-size:.9rem;line-height:1.8;';
    var emptyIcon = document.createElement('div');
    emptyIcon.style.cssText = 'font-size:2rem;margin-bottom:16px;opacity:.4;';
    emptyIcon.textContent = '⚙';
    var emptyText = document.createElement('p');
    emptyText.textContent = comingSoonText[cl] || comingSoonText.en;
    var emptyBtn = document.createElement('button');
    emptyBtn.style.cssText = 'margin-top:24px;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:"Nunito",sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;padding:12px 24px;cursor:pointer;';
    var contactLabel = {en:'Contact Us', es:'Contáctenos', pl:'Skontaktuj Się'};
    emptyBtn.textContent = contactLabel[cl] || contactLabel.en;
    emptyBtn.addEventListener('click', function() {
      hideCatalog();
      setTimeout(function() { var c = document.getElementById('contact'); if (c && typeof goTo === 'function') goTo(c); }, 500);
    });
    emptyDiv.appendChild(emptyIcon);
    emptyDiv.appendChild(emptyText);
    emptyDiv.appendChild(emptyBtn);
    content.appendChild(emptyDiv);
  }
}


// Restore scroll position
if (window.history && window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


var CATALOG_FILTER = 'all';

function showCatalog(divFilter) {
  var overlay = document.getElementById('catalog-overlay');
  if (!overlay) return;
  currentFilter = divFilter || 'all';
  CATALOG_FILTER = currentFilter;
  /* Обновим кнопки фильтров */
  var filters = overlay.querySelectorAll('.cat-filter');
  for (var fi = 0; fi < filters.length; fi++) {
    filters[fi].className = filters[fi].getAttribute('data-filter') === currentFilter ? 'cat-filter active' : 'cat-filter';
    /* Переинициализируем listener */
    (function(btn) {
      btn.onclick = function() {
        currentFilter = btn.getAttribute('data-filter');
        var allBtns = overlay.querySelectorAll('.cat-filter');
        for (var bi = 0; bi < allBtns.length; bi++) { allBtns[bi].className = 'cat-filter'; }
        btn.className = 'cat-filter active';
        renderCatalogue();
      };
    })(filters[fi]);
  }
  renderCatalogue();
  overlay.className = 'open';
  document.body.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTo(0, 0);
  /* Синхронизируем тему и язык в overlay каталога */
  if (typeof catSyncUI === 'function') catSyncUI();
}

function hideCatalog() {
  var overlay = document.getElementById('catalog-overlay');
  if (!overlay) return;
  overlay.className = '';
  document.body.classList.remove('catalog-open');
  document.body.style.overflow = '';
  catCloseMenu();
}




/* ══ КАТАЛОГ — МОДАЛЬНОЕ ОКНО КАРТОЧКИ ══ */
function showCatModal(title, desc, points, divName, imgSrc) {
  var overlay = document.getElementById('cat-modal-overlay');
  var tagEl   = document.getElementById('cat-modal-tag');
  var titleEl = document.getElementById('cat-modal-title');
  var descEl  = document.getElementById('cat-modal-desc');
  var ptsEl   = document.getElementById('cat-modal-points');
  var imgEl   = document.getElementById('cat-modal-img');
  var phEl    = document.getElementById('cat-modal-placeholder');
  var reqBtn  = document.getElementById('cat-modal-req');
  if (!overlay) return;
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  if (tagEl)   tagEl.textContent   = divName || '';
  if (titleEl) titleEl.textContent = title || '';
  if (descEl)  descEl.textContent  = desc  || '';
  if (ptsEl) {
    ptsEl.innerHTML = '';
    (points || []).forEach(function(pt) {
      var li = document.createElement('li'); li.textContent = pt; ptsEl.appendChild(li);
    });
  }
  /* Изображение */
  if (imgEl && phEl) {
    if (imgSrc) {
      imgEl.src = imgSrc; imgEl.className = 'has-img'; phEl.style.display = 'none';
    } else {
      imgEl.className = ''; imgEl.src = ''; phEl.style.display = '';
    }
  }
  /* Кнопка запроса */
  var reqLabels = {en:'Request Information →', es:'Solicitar Información →', pl:'Zapytaj o Ofertę →'};
  if (reqBtn) {
    reqBtn.textContent = reqLabels[cl] || reqLabels.en;
    reqBtn.onclick = function() {
      hideCatModal();
      hideCatalog();
      setTimeout(function() {
        var contactSection = document.getElementById('contact');
        if (contactSection && typeof goTo === 'function') goTo(contactSection);
      }, 500);
    };
  }
  overlay.className = 'open';
}

function hideCatModal() {
  var overlay = document.getElementById('cat-modal-overlay');
  if (overlay) overlay.className = '';
}

/* Инициализация модального окна каталога — вызывается из initNewFeatures */

/* ══ СИНХРОНИЗАЦИЯ UI КАТАЛОГА ══ */
function catSyncUI() {
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  var isDark = !document.documentElement.classList.contains('light');
  var icon = isDark ? '☾' : '☀';
  var modeLabel = isDark ? 'Dark Mode' : 'Light Mode';

  /* Тема — десктоп */
  var t1 = document.getElementById('cat-theme-thumb');
  var cb1 = document.getElementById('cat-theme-cb');
  if (t1) t1.textContent = icon;
  if (cb1) cb1.checked = !isDark;

  /* Тема — мобильный */
  var t2 = document.getElementById('catMobileThemeThumb');
  var cb2 = document.getElementById('catMobileThemeCheckbox');
  var lbl = document.getElementById('catMobileThemeLabel');
  if (t2) t2.textContent = icon;
  if (cb2) cb2.checked = !isDark;
  if (lbl) lbl.textContent = modeLabel;

  /* Язык — десктоп */
  ['en','es','pl'].forEach(function(l) {
    var b = document.getElementById('cat-btn-' + l);
    if (b) b.className = (l === cl) ? 'lang-btn active' : 'lang-btn';
  });

  /* Язык — мобильный */
  ['en','es','pl'].forEach(function(l) {
    var b = document.getElementById('cat-mbtn-' + l);
    if (b) b.className = (l === cl) ? 'active' : '';
  });
}

function catToggleMenu() {
  var b = document.getElementById('cat-burger');
  var n = document.getElementById('catMobileNav');
  if (!b || !n) return;
  var isOpen = n.className.indexOf('open') >= 0;
  if (isOpen) {
    n.className = 'mobile-nav';
    b.className = 'burger';
    document.body.style.overflow = '';
  } else {
    catSyncUI();
    n.className = 'mobile-nav open';
    b.className = 'burger open';
    document.body.style.overflow = 'hidden';
  }
}

function catCloseMenu() {
  var b = document.getElementById('cat-burger');
  var n = document.getElementById('catMobileNav');
  if (b) b.className = 'burger';
  if (n) n.className = 'mobile-nav';
  document.body.style.overflow = '';
}

/* ══ МОБИЛЬНЫЙ ПОИСК КАТАЛОГА (только по CATALOGUE, в текущем языке) ══ */
function catOpenMobSearch(){
  var ov = document.getElementById('cat-mob-search-overlay');
  var f = document.getElementById('cat-mob-search-field');
  if(!ov) return;
  ov.classList.add('open');
  var phs = {en:'Search equipment...',es:'Buscar equipos...',pl:'Szukaj sprzętu...'};
  var sc = {en:'Cancel',es:'Cancelar',pl:'Anuluj'};
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  if(f){ f.placeholder = phs[cl] || phs.en; }
  var cancelBtn = document.getElementById('cat-mob-search-cancel');
  if(cancelBtn) cancelBtn.textContent = sc[cl] || sc.en;
  setTimeout(function(){ if(f) f.focus(); }, 200);
}
function catCloseMobSearch(){
  var ov = document.getElementById('cat-mob-search-overlay');
  var rs = document.getElementById('cat-mob-search-results');
  var f = document.getElementById('cat-mob-search-field');
  if(ov) ov.classList.remove('open');
  if(rs){ rs.classList.remove('open'); rs.innerHTML=''; }
  if(f) f.value = '';
}
function catRunMobSearch(q){
  var rs = document.getElementById('cat-mob-search-results');
  if(!rs) return;
  q = (q||'').trim().toLowerCase();
  if(q.length < 1){ rs.classList.remove('open'); rs.innerHTML=''; return; }
  if(typeof CATALOGUE === 'undefined'){ rs.innerHTML=''; rs.classList.remove('open'); return; }
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  var divLabels = {
    mine:{en:'Mine',es:'Minería',pl:'Górnictwo'},
    recycling:{en:'Recycling',es:'Reciclaje',pl:'Recykling'}
  };
  var emptyMsg = {en:'No results',es:'Sin resultados',pl:'Brak wyników'};
  var hits = [];
  Object.keys(CATALOGUE).forEach(function(div){
    (CATALOGUE[div]||[]).forEach(function(item){
      /* Ищем СТРОГО в текущем языке: title_xx + desc_xx + points_xx */
      var titleField = item['title_'+cl] || item.title_en || item.title || '';
      var descField  = item['desc_'+cl]  || item.desc_en  || item.desc  || '';
      var ptsField   = item['points_'+cl]|| item.points_en|| item.points || [];
      var hay = (titleField + ' ' + descField + ' ' + (ptsField||[]).join(' ')).toLowerCase();
      if(hay.indexOf(q) > -1){ hits.push({div:div, item:item, title:titleField}); }
    });
  });
  if(!hits.length){
    rs.innerHTML = '<div class="cat-srch-empty">'+(emptyMsg[cl]||emptyMsg.en)+'</div>';
  } else {
    var html = '';
    hits.forEach(function(h){
      var lab = (divLabels[h.div][cl] || divLabels[h.div].en);
      html += '<div class="cat-srch-item" data-div="'+h.div+'" data-id="'+(h.item.id||'')+'">'
            + '<span class="cat-srch-tag">'+lab+'</span>'
            + '<span class="cat-srch-name">'+h.title+'</span>'
            + '</div>';
    });
    rs.innerHTML = html;
    rs.querySelectorAll('.cat-srch-item').forEach(function(el){
      el.addEventListener('click', function(){
        var divName = el.getAttribute('data-div');
        var itemId = el.getAttribute('data-id');
        catCloseMobSearch();
        var btn = document.querySelector('#catalog-overlay .cat-filter[data-filter="'+divName+'"]');
        if(btn){ btn.click(); }
        setTimeout(function(){
          var cards = document.querySelectorAll('#catalog-overlay .cat-card');
          var target = null;
          for(var i=0;i<cards.length;i++){
            if(cards[i].getAttribute('data-id') === itemId){ target = cards[i]; break; }
          }
          if(!target && cards.length){ target = cards[0]; }
          if(target){
            target.scrollIntoView({behavior:'smooth', block:'center'});
            var prev = target.style.boxShadow;
            target.style.boxShadow = '0 0 0 2px var(--gold)';
            setTimeout(function(){ target.style.boxShadow = prev; }, 1800);
          }
        }, 280);
      });
    });
    rs.classList.add('open');
  }
}

/* Биндим input один раз */
(function(){
  function bindCatSearch(){
    var f = document.getElementById('cat-mob-search-field');
    if(!f || f._bound) return;
    f._bound = true;
    f.addEventListener('input', function(){ catRunMobSearch(this.value); });
    f.addEventListener('keydown', function(e){ if(e.key === 'Escape') catCloseMobSearch(); });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bindCatSearch);
  } else { bindCatSearch(); }
})();

/* Оборачиваем hideCatalog чтобы при закрытии каталога закрывался и поиск */
(function(){
  if(typeof hideCatalog === 'function' && !hideCatalog._wrapped){
    var _oh = hideCatalog;
    window.hideCatalog = function(){ try{catCloseMobSearch();}catch(e){} return _oh.apply(this, arguments); };
    window.hideCatalog._wrapped = true;
  }
})();


function initCatModal() {
  /* ── Модальное окно карточки ── */
  var overlay = document.getElementById('cat-modal-overlay');
  var closeBtn = document.getElementById('cat-modal-close');
  if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) hideCatModal(); });
  if (closeBtn) closeBtn.addEventListener('click', hideCatModal);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hideCatModal(); });

  /* ── Бургер каталога ── */
  var catBurger = document.getElementById('cat-burger');
  if (catBurger) catBurger.addEventListener('click', catToggleMenu);

  /* ── Тема десктоп ── */
  var catLabel = document.getElementById('cat-theme-label');
  var catCb = document.getElementById('cat-theme-cb');
  if (catLabel) catLabel.addEventListener('click', function(e) {
    if (e.target === catCb) return;
    setTheme(!document.documentElement.classList.contains('light'));
    catSyncUI();
  });
  if (catCb) catCb.addEventListener('change', function() {
    setTheme(this.checked); catSyncUI();
  });

  /* ── Тема мобильная ── */
  var catMobCb = document.getElementById('catMobileThemeCheckbox');
  if (catMobCb) catMobCb.addEventListener('change', function() {
    setTheme(this.checked); catSyncUI();
  });

  /* ── Язык десктоп ── */
  ['en','es','pl'].forEach(function(l) {
    var btn = document.getElementById('cat-btn-' + l);
    if (btn) btn.addEventListener('click', function() { setLang(l); catSyncUI(); });
  });

  /* ── Язык мобильный ── */
  ['en','es','pl'].forEach(function(l) {
    var btn = document.getElementById('cat-mbtn-' + l);
    if (btn) btn.addEventListener('click', function() {
      setLang(l); catSyncUI(); catCloseMenu();
    });
  });
}



/* ══ ЗАЩИТА КОДА ══ */
(function() {
  /* Отключаем правый клик */
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  /* Отключаем горячие клавиши DevTools и просмотра кода */
  /* DevTools hotkeys enabled */

  /* Детектор открытия DevTools через изменение размера окна */
  var devToolsOpen = false;
  var threshold = 160;
  setInterval(function() {
    var widthDiff  = window.outerWidth  - window.innerWidth;
    var heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        /* Мягкое предупреждение */
        console.clear();
        console.log('%c⚠ MCR Planet', 'color:#c9a84c;font-size:20px;font-weight:bold;');
        console.log('%cЭта страница защищена. Копирование контента запрещено.', 'color:#888;font-size:14px;');
      }
    } else {
      devToolsOpen = false;
    }
  }, 1000);
})();



/* ══ БУРГЕР КАТАЛОГА ══ */


