import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gestión del Módulo de Pasantías | UTN.BA',
  description: 'Informe ejecutivo del primer mes de gestión del módulo de pasantías de Talentia para UTN.BA.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
