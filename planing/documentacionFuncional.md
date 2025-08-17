# Documetacion Funcional

# Documentación del Proyecto: Trubig Peluquería Canina

## 📋 Documentación Funcional

### 1. Descripción General

Desarrollo de una landing page de una sola página para "Trubig Peluquería Canina", un negocio de peluquería canina ubicado en Igualada. La web debe replicar fielmente el diseño proporcionado usando únicamente tecnologías web estándar (HTML, CSS y JavaScript vanilla).

### 2. Requisitos Funcionales

### 2.1 Estructura de la Página

- **Hero Section**
    - Logo de Trubig con icono de perro
    - Título principal: "Peluquería Canina"
    - Información de contacto (dirección y teléfono)
    - Botón CTA "Demana Cita!" (botón naranja)
    - Imagen de fondo difuminada del salón

### 2.2 Sección de Servicios (SERVEIS)

- Grid de 3 columnas con tarjetas de servicios:
    - **Higiene**: Descripción del servicio con imagen
    - **Tallat**: Descripción del servicio con imagen
    - **Bany**: Descripción del servicio con imagen

### 2.3 Sección de Productos (PRODUCTES)

- Texto descriptivo sobre los productos
- Grid de 3 columnas con imágenes de productos

### 2.4 Sección de Instalaciones (INSTAL·LACIONS)

- Texto descriptivo sobre las instalaciones
- Grid de 3 columnas con fotos del local

### 3. Requisitos No Funcionales

- Diseño responsive adaptable a móviles y tablets
- Carga rápida sin dependencias externas
- Accesibilidad básica (alt text en imágenes)
- Compatible con navegadores modernos

## 🔧 Documentación Técnica

### 1. Stack Tecnológico

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y diseño responsive
- **JavaScript Vanilla**: Interacciones mínimas

### 2. Estructura de Archivos

```
proyecto/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
        ├── hero-bg.jpg
        ├── service-1.jpg
        ├── service-2.jpg
        ├── service-3.jpg
        ├── product-1.jpg
        ├── product-2.jpg
        ├── product-3.jpg
        ├── install-1.jpg
        ├── install-2.jpg
        └── install-3.jpg

```

### 3. Especificaciones Técnicas

### 3.1 Paleta de Colores

- Primario (Naranja): #E89555
- Texto principal: #333333
- Fondo: #FFFFFF
- Texto sobre imagen: #FFFFFF

### 3.2 Tipografía

- Fuente principal: Arial, sans-serif
- Fuente decorativa para logo: Georgia, serif

### 3.3 Diseño Responsive

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Criterios de Éxito

1. La página debe verse idéntica o muy similar a la imagen proporcionada
2. Debe ser completamente responsive
3. No debe tener dependencias externas
4. El código debe ser limpio y bien comentado
5. Debe cargar rápidamente
6. El botón "Demana Cita!" debe ser funcional (aunque sea para mostrar un alert)