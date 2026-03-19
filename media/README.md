# Media / Assets PMA Chile

Esta carpeta concentra todos los recursos visuales del proyecto para evitar que queden dispersos entre `src/`, `public/` y archivos sueltos.

## Estructura sugerida

```text
media/
├── branding/
│   ├── logos/
│   │   ├── original/
│   │   └── exported/
│   ├── colors/
│   └── typography/
├── photos/
│   ├── hero/
│   ├── products/
│   └── reference/
└── visuals/
    ├── mockups/
    ├── campaigns/
    └── social/
```

## Dónde guardar cada cosa

### `branding/logos/original/`
Guardar aquí los archivos originales del logo.

**Ejemplo esperado:**
- `PMA-Logo.jpeg`
- `PMA-Logo.png`
- `PMA-Logo.svg`

> Si vas a copiar el archivo que mencionaste, déjalo aquí:
>
> `media/branding/logos/original/PMA-Logo.jpeg`

### `branding/logos/exported/`
Versiones listas para usar en web, presentaciones o RRSS.

**Ejemplos:**
- `pma-logo-dark.png`
- `pma-logo-light.png`
- `pma-logo-mark.svg`
- `pma-logo-horizontal.png`

### `branding/colors/`
Sistema visual de color.

**Incluye:**
- paleta oficial
- equivalencias HEX / RGB / CMYK
- uso recomendado para digital y piezas impresas

### `branding/typography/`
Archivos, licencias o referencias tipográficas de marca.

### `photos/hero/`
Imágenes principales para portadas, hero banners y cabeceras del sitio.

### `photos/products/`
Fotos limpias por producto o categoría.

**Sugerencia:**
- una carpeta por línea de producto si el catálogo crece
- nombres claros por SKU o familia

### `photos/reference/`
Fotos de referencia visual, terreno, minería, pickups, inspiración industrial o capturas de clientes.

### `visuals/mockups/`
Diseños de Canva, Figma, propuestas visuales o capturas de layout.

### `visuals/campaigns/`
Piezas gráficas por campaña, landing, mailing o temporadas.

### `visuals/social/`
Contenido para Instagram, LinkedIn, WhatsApp Business o piezas derivadas.

## Convención de nombres recomendada

Usar nombres simples, sin espacios y en minúsculas cuando sea posible:

- `pma-logo-dark.svg`
- `hero-pickup-mineria-01.jpg`
- `rack-techo-pickup-rmg0101.jpg`
- `compresor-faena-rmg0102.png`

## Recomendación práctica

Cuando un asset ya se use en la web:
1. se guarda primero en `media/` como fuente,
2. luego se exporta/copia a `public/` o `src/assets/` según corresponda.

Así mantenemos:
- una fuente maestra,
- una versión optimizada para web,
- y una estructura fácil de escalar.
