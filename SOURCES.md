# Fuentes y trazabilidad

## Inventario

| Archivo | Tipo | Uso en el informe |
| --- | --- | --- |
| `../Informe EjecutivoPasantias 1 mes.docx` | Word | Guía narrativa, títulos, contexto, diagnóstico y recomendaciones. |
| `../UTN BA - Reporte de Gestión de Pasantías.pptx.pdf` | PDF, 7 páginas | Indicadores, nómina de convenios y distribuciones por área e industria. |
| `../Talentia-logo.png` | Imagen | Referencia de identidad de Talentia. |

## Matriz resumida

| Sección web | Fuente principal | Datos |
| --- | --- | --- |
| Resumen y alcance | Word, secciones 1–3 | Período, objetivo y mensaje central. |
| Métricas | PDF, página 2; Word, sección 5 | 35 ofertas, 20 empresas, 506 postulaciones, promedio 14,5 y una pasantía. |
| Distribución por área | PDF, página 6; Word, sección 7 | Nueve categorías que suman 35 ofertas. |
| Distribución por industria | PDF, página 5 | Cinco categorías; ver inconsistencia documentada debajo. |
| Diagnóstico | PDF, páginas 3–4; Word, sección 7 | 771 organizaciones, 38 convenios en plataforma y 104 convenios institucionales informados. |
| Recomendaciones | Word, sección 9 | Marco unificado, autonomía operativa y activación progresiva. |

## Decisiones e inconsistencias

- El PDF muestra **38 convenios firmados en plataforma**. El Word informa **104 convenios marco firmados** en la cartera institucional. Se conservaron como universos distintos; no se sumaron ni se presentaron como equivalentes.
- En industria, el PDF muestra `Retail: 4 (8,6%)`. Cuatro sobre 35 equivale a 11,4% y la suma de las cantidades impresas sería 36. Para preservar tanto el total de 35 como el 8,6% publicado, la visualización reconstruida usa **3** y deja una nota metodológica visible.
- El Word menciona “unas 70 empresas adicionales”; 104 menos 38 equivale a 66. Por tratarse de una aproximación no reconciliada, no se convirtió en indicador principal.
- No se publicaron datos personales del pasante. La web conserva únicamente el resultado agregado de una pasantía activa.

El contenido público está centralizado en `app/report-data.ts`. La web y el PDF se producen a partir de esa misma fuente.
