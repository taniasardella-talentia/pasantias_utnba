export const report = {
  period: '13 de julio al 13 de agosto',
  institution: 'UTN.BA — Facultad Regional Buenos Aires',
  objective: 'Evaluar el rendimiento inicial de la plataforma digital, dimensionar la cartera real de convenios y establecer un análisis sobre la optimización administrativa y la independencia de gestión de la Facultad.',
  metrics: [
    { value: '35', label: 'Ofertas publicadas' }, { value: '20', label: 'Empresas con búsquedas' },
    { value: '506', label: 'Postulaciones' }, { value: '14,5', label: 'Postulaciones por oferta' },
  ],
  market: [
    { value: '6,9 M', label: 'Población trabajadora formal estimada' },
    { value: '6,26 M', label: 'Asalariados privados registrados', note: 'SIPA · abril de 2025' },
    { value: '≈2%', label: 'Estimación de relaciones laborales bajo pasantía' },
    { value: '≈126.000', label: 'Pasantías activas estimadas a nivel nacional' },
  ],
  areas: [
    ['Sistemas / Dev / Software',15,'#861527'],['Ingeniería',4,'#cf7a24'],['Marketing',4,'#3565db'],['Otros / Sin especificar',4,'#91a0b5'],['Finanzas',3,'#4ba4dd'],['Ventas / Comercial',2,'#3d936d'],['Administración',1,'#6a37dc'],['Logística',1,'#d6344b'],['Producto',1,'#4b5563'],
  ] as const,
  industries: [['Tecnología / IT',14,'#861527'],['Otros / Sin especificar',9,'#f0a51a'],['Manufactura',8,'#3972d9'],['Retail',3,'#7a94ad'],['Oil & Gas',1,'#d6384d']] as const,
  engineering: [
    ['Ingeniería Civil','Obras civiles e infraestructura'],['Ingeniería Eléctrica','Sistemas eléctricos y energía'],['Ingeniería Electrónica','Dispositivos y telecomunicaciones'],['Ingeniería Industrial','Procesos productivos y logística'],['Ingeniería Mecánica','Diseño mecánico y mantenimiento'],['Ingeniería Naval','Tecnología naval y buques'],['Ingeniería Química','Procesos químicos y medio ambiente'],['Ingeniería en Sistemas de Información','Software y bases de datos'],['Ingeniería Textil','Industria textil y producción'],
  ],
  extension: [
    {group:'Tecnología e Informática',items:['Programación','Diseño Gráfico Digital','Telecomunicaciones','Desarrollo y Producción de Videojuegos','Ciberseguridad','Tecnología Educativa']},
    {group:'Negocios, Gestión y Logística',items:['Administración','Administración de Empresas','Comercio Electrónico y Marketing Digital','Negociación de Bienes','Logística','Gestión Aeronáutica','Gestión de Empresas Turísticas y Hoteleras']},
    {group:'Ambiente y Seguridad',items:['Higiene y Seguridad en el Trabajo — Tecnicatura y Licenciatura','Gestión Ambiental']},
  ],
  companies: ['ABB','AES Servicios América','Biogénesis Bagó','Celsur Logística','Digi','ExxonMobil','Felanix Construcciones','Fresenius Kabi','GlobalLogic','Grupo Arcor','Grupo Kelsoft','Grupo Princz','Grupo La Emilia','Hunter Douglas','IBM Argentina','KIR','Lenovo','Loginter','Mabxience','Maprimed','Midea Carrier','National Shipping','Naturgy BAN','Offidirect','PSQ Argentina','Radio Victoria Argentina','Renault Group','Sherwin Williams','Solnik','Tetra Pak','Tierra Nativa','Tip Top Argentina','UIPBA','Ventalum','Prysmian','Toyota Argentina','Laboratorios Victoria','Furlong Incoming'],
};
