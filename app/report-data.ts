export const report = {
  period: '13 de julio al 13 de agosto',
  metrics: [
    { value: '35', label: 'Ofertas publicadas' },
    { value: '20', label: 'Empresas con búsquedas' },
    { value: '506', label: 'Postulaciones' },
    { value: '14,5', label: 'Postulaciones por oferta' },
  ],
  areas: [
    ['Sistemas / Dev / Software', 15, '#861527'], ['Ingeniería', 4, '#cf7a24'],
    ['Marketing', 4, '#3565db'], ['Otros / Sin especificar', 4, '#91a0b5'],
    ['Finanzas', 3, '#4ba4dd'], ['Ventas / Comercial', 2, '#3d936d'],
    ['Administración', 1, '#6a37dc'], ['Logística', 1, '#d6344b'], ['Producto', 1, '#4b5563'],
  ] as const,
  industries: [
    ['Tecnología / IT', 14, '#861527'], ['Otros / Sin especificar', 9, '#f0a51a'],
    ['Manufactura', 8, '#3972d9'], ['Retail', 3, '#7a94ad'], ['Oil & Gas', 1, '#d6384d'],
  ] as const,
  companies: ['ABB','AES Servicios América','Biogénesis Bagó','Celsur Logística','Digi','ExxonMobil','Felanix Construcciones','Fresenius Kabi','GlobalLogic','Grupo Arcor','Grupo Kelsoft','Grupo Princz','Grupo La Emilia','Hunter Douglas','IBM Argentina','KIR','Lenovo','Loginter','Mabxience','Maprimed','Midea Carrier','National Shipping','Naturgy BAN','Offidirect','PSQ Argentina','Radio Victoria Argentina','Renault Group','Sherwin Williams','Solnik','Tetra Pak','Tierra Nativa','Tip Top Argentina','UIPBA','Ventalum','Prysmian','Toyota Argentina','Laboratorios Victoria','Furlong Incoming'],
};
