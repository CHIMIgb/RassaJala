# 📱 PROMPT MAESTRO - PROYECTO POINTIFY MOBILE

## 🎯 CONTEXTO DEL PROYECTO

Soy estudiante universitario trabajando en un proyecto académico de desarrollo de una aplicación de punto de venta (POS) para restaurantes. Este proyecto está siendo desarrollado por un grupo de 22 alumnos y será continuado por futuras generaciones.

**IMPORTANTE**: Este proyecto fue **adaptado desde una plantilla Next.js** hacia **React Native con Expo** desde cero, por lo que NO es posible usar código Next.js directamente.

---

## 🏗️ ESTRUCTURA ACTUAL DEL PROYECTO

```
pointify-mobile-clean/
├── assets/                  # Recursos estáticos (imágenes, fuentes)
├── components/              # Componentes reutilizables de la UI
│   ├── Header.tsx          # Barra superior con logo, menú y perfil
│   ├── Categories.tsx      # Filtro de categorías de productos
│   ├── ProductCard.tsx     # Tarjeta individual de producto
│   ├── Cart.tsx            # Modal del carrito (móvil/tablet)
│   ├── CartSidebar.tsx     # Carrito fijo lateral (desktop)
│   ├── MenuSidebar.tsx     # Menú hamburguesa lateral
│   └── Register.tsx        # Pantalla de registro de usuarios
├── data/
│   └── products.ts         # Datos de productos y carrito
├── App.tsx                 # Componente principal de la aplicación
├── app.json                # Configuración de Expo
├── package.json            # Dependencias del proyecto
└── tsconfig.json           # Configuración de TypeScript
```

---

## 🎨 PALETA DE COLORES OFICIAL

```typescript
// Colores principales de Pointify
const COLORS = {
  primary: '#00D863',        // Verde brillante principal
  primaryDark: '#00B84F',    // Verde oscuro para hover
  background: '#E8E8E8',     // Gris claro de fondo
  backgroundCard: '#FFFFFF', // Blanco para tarjetas
  text: '#000000',           // Negro para texto principal
  textSecondary: '#666666',  // Gris para texto secundario
  textLight: '#999999',      // Gris claro para placeholders
  border: '#E0E0E0',         // Gris para bordes
  
  // Colores del formulario de registro
  registerBg: '#C8E6C9',     // Verde muy claro de fondo
  registerForm: '#A5D6A7',   // Verde claro para el formulario
  registerHeader: '#66BB6A',  // Verde medio para header
  registerLabel: '#2E7D32',   // Verde oscuro para labels
  registerButton: '#2E7D32',  // Verde oscuro para botón guardar
  registerUpload: '#4FC3F7',  // Azul claro para botón subir imagen
};
```

---

## 📐 BREAKPOINTS Y RESPONSIVE

```typescript
// Breakpoints para diseño responsive
const BREAKPOINTS = {
  mobile: '< 768px',     // Móvil y tablet pequeña
  tablet: '768px - 1199px', // Tablet grande
  desktop: '>= 1200px',   // Desktop y pantallas grandes
};

// Uso en código:
const { width } = Dimensions.get('window');
const isDesktop = width >= 1200;
const isTablet = width >= 768 && width < 1200;
const isMobile = width < 768;
```

---

## 🧩 COMPONENTES CLAVE Y SU FUNCIÓN

### **1. App.tsx** - Coordinador principal
- **Función**: Gestiona el estado global y la navegación entre vistas
- **Estados importantes**:
  - `windowWidth`: Detecta cambios de tamaño de ventana (responsive)
  - `menuVisible`: Controla el menú hamburguesa
  - `cartVisible`: Controla el modal del carrito
  - `registerVisible`: Controla la pantalla de registro
- **Layout responsive**: 
  - Desktop: 3 columnas (Logo | Menú centrado | User)
  - Móvil: Logo | Menú hamburguesa

### **2. Header.tsx** - Barra superior
- **Props**: `onMenuPress`, `windowWidth`
- **Desktop**: Muestra logo, menú completo centrado, foto + nombre de usuario
- **Móvil**: Muestra logo, foto de usuario, botones de config y menú hamburguesa
- **Menú estático**: Se mantiene fijo al hacer scroll

### **3. Categories.tsx** - Filtro de categorías
- **Función**: Permite filtrar productos por categoría
- **Scroll horizontal** en móvil con las categorías
- **Estado activo**: "Todas" por defecto

### **4. ProductCard.tsx** - Tarjeta de producto
- **Estructura**:
  - Imagen del producto (izquierda)
  - Badges de descuento/stock (arriba)
  - Nombre y descripción
  - Precio y botón de agregar (abajo)
- **Responsive**: 1 columna en móvil, 2 columnas en desktop

### **5. MenuSidebar.tsx** - Menú lateral
- **Función**: Navegación principal de la aplicación
- **Opciones actuales**:
  - Inicio
  - Menu (activo por defecto)
  - Ordenes
  - Historial
  - Facturas
  - Registro (abre modal de Register)
- **Props**: `visible`, `onClose`, `onRegisterPress`
- **Animación**: Desliza desde la derecha

### **6. Cart.tsx / CartSidebar.tsx** - Carrito de compras
- **Cart.tsx**: Modal para móvil/tablet
- **CartSidebar.tsx**: Columna fija para desktop
- **Contenido**:
  - Barra de búsqueda
  - Lista de productos con cantidad
  - Resumen (Subtotal, IVA, Total)
  - Botón "Confirmar orden"

### **7. Register.tsx** - Registro de usuarios
- **Visibilidad**: Solo desde el menú hamburguesa
- **Campos del formulario**:
  - Nombre, Apellidos
  - Ocupación, Usuario
  - Correo, Teléfono
  - Contraseña
  - Tipo de Usuario (dropdown)
  - Permisos (dropdown)
- **Botones**: Subir Imagen, Guardar
- **Colores**: Paleta verde (#C8E6C9, #A5D6A7, #66BB6A)

---

## ⚙️ DEPENDENCIAS PRINCIPALES

```json
{
  "@expo/vector-icons": "^14.x",
  "expo": "^52.x",
  "react": "18.x",
  "react-native": "0.76.x",
  "react-native-safe-area-context": "^4.x"
}
```

---

## 🔧 COMANDOS IMPORTANTES

```bash
# Instalar dependencias
npm install

# Iniciar el proyecto
npm start

# Limpiar caché
npx expo start --clear

# Ver en móvil
# Escanear QR con Expo Go (Android/iOS)

# Ver en web
# Presionar 'w' en la terminal
```

---

## 📝 REGLAS DE DESARROLLO

### **1. CÓDIGO DOCUMENTADO** ⚠️ OBLIGATORIO
```typescript
/**
 * Componente Header
 * 
 * Descripción: Barra de navegación superior que se adapta a diferentes
 * tamaños de pantalla. En desktop muestra el menú completo centrado,
 * en móvil muestra solo logo, foto de usuario y menú hamburguesa.
 * 
 * Props:
 * - onMenuPress: Función que se ejecuta al presionar el menú hamburguesa
 * - windowWidth: Ancho actual de la ventana para responsive
 * 
 * Responsive:
 * - Desktop (>=1200px): Logo | Menú centrado | User con nombre
 * - Móvil (<1200px): Logo | User sin nombre | Hamburguesa
 */
```

### **2. RESPONSIVE OBLIGATORIO**
- **SIEMPRE** preguntar si la vista es para:
  - [ ] Solo móvil
  - [ ] Solo web
  - [ ] Ambos (más común)
- Usar `Dimensions.addEventListener` para detectar cambios de tamaño
- Breakpoint principal: **1200px**

### **3. CONSISTENCIA DE DISEÑO**
- Usar **SOLO** los colores de la paleta oficial
- Bordes redondeados: `borderRadius: 16-32px`
- Sombras suaves: `shadowOpacity: 0.1-0.3`
- Espaciados consistentes: `gap: 8, 12, 16, 20, 24px`

### **4. NOMENCLATURA**
```typescript
// Archivos: PascalCase.tsx
Register.tsx
MenuSidebar.tsx

// Componentes: PascalCase
export const Register: React.FC<Props>

// Variables/Estados: camelCase
const [menuVisible, setMenuVisible] = useState(false);

// Constantes: UPPER_SNAKE_CASE
const PRIMARY_COLOR = '#00D863';

// Estilos: camelCase
const styles = StyleSheet.create({
  container: {},
  headerTitle: {},
});
```

### **5. ESTRUCTURA DE COMPONENTES**
```typescript
// Orden estándar:
1. Imports
2. Interfaces/Types
3. Constantes
4. Componente principal
5. Funciones auxiliares
6. StyleSheet
```

---

## 🚀 FLUJO DE TRABAJO PARA NUEVAS VISTAS

### **Paso 1: Analizar el diseño de Figma**
- ¿Es para móvil, web o ambos?
- ¿Qué colores usa? (deben coincidir con la paleta)
- ¿Tiene navegación especial?

### **Paso 2: Crear el componente**
```typescript
// En components/NombreVista.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NombreVistaProps {
  // Props necesarias
}

/**
 * Componente NombreVista
 * 
 * Descripción: [Explicar qué hace esta vista]
 * 
 * Props: [Listar y explicar cada prop]
 * 
 * Responsive: [Explicar comportamiento en diferentes tamaños]
 */
export const NombreVista: React.FC<NombreVistaProps> = (props) => {
  // Estado y lógica
  
  return (
    <View style={styles.container}>
      {/* Contenido */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos documentados
  container: {
    flex: 1,
    // Comentar estilos complejos
  },
});
```

### **Paso 3: Integrar en MenuSidebar**
```typescript
// Si la vista debe estar en el menú:
const menuItems = [
  // ... items existentes
  { label: 'Nueva Vista', icon: 'icon-name', active: false },
];
```

### **Paso 4: Integrar en App.tsx**
```typescript
// 1. Import
import { NuevaVista } from './components/NuevaVista';

// 2. Estado
const [nuevaVistaVisible, setNuevaVistaVisible] = useState(false);

// 3. Modal (si aplica)
<Modal visible={nuevaVistaVisible}>
  <NuevaVista onClose={() => setNuevaVistaVisible(false)} />
</Modal>
```

---

## 🔍 PREGUNTAS CLAVE ANTES DE GENERAR CÓDIGO

1. **¿La vista es para móvil, web o ambos?**
2. **¿Tiene navegación desde el menú o es un modal independiente?**
3. **¿Los colores del diseño coinciden con la paleta oficial?**
4. **¿Necesita estado global o es independiente?**
5. **¿Tiene formularios? (necesitarás useState para cada campo)**

---

## 📊 SOBRE LAS VISTAS A CREAR

**IMPORTANTE**: No hay un orden predefinido de vistas. Cada alumno trabajará en las vistas que le sean asignadas por el profesor.

**Flujo de trabajo**:
1. El alumno recibe una captura/diseño de Figma de la vista a crear
2. Comparte la imagen con la IA
3. La IA genera el código siguiendo la estructura y paleta de colores del proyecto
4. El alumno integra el código y prueba en móvil/web

**Ejemplos de vistas comunes en sistemas POS**:
- Dashboard principal
- Gestión de productos (CRUD)
- Lista de órdenes
- Historial de ventas
- Gestión de facturas
- Perfil de usuario
- Configuración
- Reportes y estadísticas
- Gestión de empleados
- Login/Autenticación

---

## 🔄 ACTUALIZACIÓN DEL PROMPT

**IMPORTANTE**: Este prompt debe actualizarse cada vez que:
- Se agregue una nueva vista
- Se modifique la estructura de archivos
- Se agreguen nuevas dependencias
- Se cambien los colores o estilos generales

Para actualizar, pedir: **"Dame el PROMPT MAESTRO actualizado con las nuevas vistas creadas"**

---

## ⚠️ ERRORES COMUNES A EVITAR

1. ❌ **NO usar localStorage/sessionStorage** (no funciona en React Native)
2. ❌ **NO usar CSS puro** (usar StyleSheet de React Native)
3. ❌ **NO usar `calc()`** en estilos (usar porcentajes o números)
4. ❌ **NO olvidar el responsive** (siempre validar en diferentes tamaños)
5. ❌ **NO usar imports relativos largos** (usar paths cortos desde raíz)

---

## 📚 RECURSOS ÚTILES

- **Documentación Expo**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **Iconos disponibles**: https://icons.expo.fyi
- **Repositorio del proyecto**: [URL del GitHub]

---

## 🎓 INFORMACIÓN PARA EL BACKEND (Futura generación)

Este proyecto está desarrollado **solo frontend**. El backend deberá:

1. **API REST** para:
   - Autenticación de usuarios
   - CRUD de productos
   - Gestión de órdenes
   - Generación de facturas
   
2. **Base de datos** sugerida:
   - PostgreSQL o MongoDB
   
3. **Puntos de integración**:
   - Los datos en `data/products.ts` deberán venir de la API
   - Los formularios tienen `console.log()` donde irán las peticiones HTTP
   - El token de autenticación deberá guardarse en estado global (Context API o Redux)

---

## 💡 EJEMPLO DE USO DE ESTE PROMPT

**Estudiante**: "Hola, necesito crear la vista de Gestión de Productos según el diseño de Figma. Es para móvil y web."

**IA con este prompt**: "Perfecto, voy a crear el componente `ProductManagement.tsx` siguiendo la estructura del proyecto. Te haré algunas preguntas primero:

1. ¿El diseño usa los colores de la paleta oficial (#00D863)?
2. ¿Se accede desde el menú principal?
3. ¿Tiene un listado de productos con opciones de editar/eliminar?

[Procederá a generar código documentado y coherente con la estructura existente]"

---

## 📌 VERSIÓN DEL PROMPT

**Versión**: 1.0
**Última actualización**: [FECHA]
**Vistas implementadas**: Home, Registro de Usuarios
**Próxima actualización**: Al agregar 3 vistas nuevas o cambios estructurales importantes

---

**FIN DEL PROMPT MAESTRO**

> Copia este prompt completo y pégalo al inicio de cualquier chat con IA para mantener consistencia en el desarrollo del proyecto.