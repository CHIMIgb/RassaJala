# 📱 RassaJala - Sistema de Gestión de Productos Agrícolas

> **Versión:** 2.1  
> **Última actualización:** Noviembre 2025
> **Stack:** React Native + Expo + TypeScript

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Usuarios del Sistema](#-usuarios-del-sistema)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Paleta de Colores](#-paleta-de-colores)
- [Componentes Principales](#-componentes-principales)
- [Instalación y Configuración](#️-instalación-y-configuración)
- [Reglas de Desarrollo](#-reglas-de-desarrollo)
- [Problemas Resueltos](#-problemas-críticos-resueltos)
- [Plantillas](#-plantilla-para-nuevas-vistas)
- [Control de Versiones](#-control-de-versiones)

---

## 🎯 Sobre el Proyecto

**RassaJala** es un proyecto académico universitario que consiste en el desarrollo de una aplicación móvil y web para la gestión y comercialización de productos agrícolas. 

### Problema que Resuelve
Actualmente, los agricultores y productores locales gestionan sus ventas de manera desorganizada a través de WhatsApp. RassaJala centraliza y optimiza este proceso mediante una plataforma digital integrada.

### Nota Importante
Este proyecto fue **adaptado desde una plantilla Next.js hacia React Native con Expo** desde cero. **NO es posible usar código Next.js directamente.**

---

## 👥 Usuarios del Sistema

| Usuario | Funcionalidades |
|---------|----------------|
| **Agricultores/Productores** | Registran productos (nombre, precio, foto, tipo de venta) |
| **Vendedores** | Administran entregas y cobros |
| **Clientes** | Consultan catálogo y apartan productos |
| **Administrador** | Supervisa todas las operaciones de la plataforma |

---

## 🏗️ Estructura del Proyecto

```
pointify-mobile-clean/
├── assets/                  # Recursos estáticos (imágenes, fuentes)
├── src/
│   ├── components/         # Componentes reutilizables de la UI
│   │   ├── Cart.tsx
│   │   ├── CartSidebar.tsx
│   │   ├── Categories.tsx
│   │   ├── Header.tsx
│   │   ├── MenuSidebar.tsx
│   │   ├── ProductCard.tsx
│   │   └── SettingsMenu.tsx
│   ├── config/             # Configuraciones de la aplicación
│   │   └── ejemplo.sql
│   ├── data/               # Datos estáticos y mocks
│   │   └── products.ts
│   ├── hook/               # Custom hooks
│   │   └── hook.ts
│   ├── screens/            # Pantallas principales
│   │   ├── EditProfile.tsx
│   │   ├── ProfileView.tsx
│   │   └── Register.tsx
│   ├── service/            # Servicios y APIs
│   │   └── services/
│   ├── style/              # Estilos y temas
│   │   ├── color.ts
│   │   ├── spacing.ts
│   │   └── types.ts
│   ├── types/              # Definiciones TypeScript
│   │   └── types.ts
│   └── commands/           # Utilidades y comandos
├── App.tsx                 # Componente principal
├── app.json                # Configuración de Expo
├── package.json            # Dependencias
├── tsconfig.json           # Configuración TypeScript
└── .gitignore
```

---

## 🎨 Paleta de Colores

```typescript
// src/style/color.ts
export const COLORS = {
  // Colores principales
  primary: '#00D863',        // Verde brillante principal
  primaryDark: '#00B84F',    // Verde oscuro para hover
  background: '#E8E8E8',     // Gris claro de fondo
  backgroundCard: '#FFFFFF', // Blanco para tarjetas
  
  // Colores de texto
  text: '#000000',           // Negro para texto principal
  textSecondary: '#666666',  // Gris para texto secundario
  textLight: '#999999',      // Gris claro para placeholders
  border: '#E0E0E0',         // Gris para bordes
  
  // Colores para formularios
  formBg: '#C8E6C9',         // Verde muy claro de fondo
  formCard: '#A5D6A7',       // Verde claro para tarjetas
  formHeader: '#66BB6A',     // Verde medio para headers
  formLabel: '#2E7D32',      // Verde oscuro para labels
  formButton: '#2E7D32',     // Verde oscuro para botón principal
  formButtonSecondary: '#4FC3F7', // Azul claro para botón secundario
};
```

### 📐 Breakpoints y Responsive

```typescript
// src/style/spacing.ts
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1200,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};
```

---

## 🧩 Componentes Principales

### 1. App.tsx - Coordinador Principal
**Función:** Gestiona el estado global y la navegación entre vistas.

**Estados importantes:**
- `windowWidth` - Detecta cambios de tamaño de ventana
- `menuVisible` - Controla el menú hamburguesa
- `cartVisible` - Controla el modal del carrito
- `registerVisible` - Controla la pantalla de registro
- `profileVisible` - Controla la vista de perfil

**Layout responsive:**
- **Desktop (≥1200px):** Logo | Menú centrado | Registro + Usuario
- **Móvil (<1200px):** Logo | Usuario + Hamburguesa

### 2. Header.tsx - Barra Superior
- **Desktop:** Logo | Menú completo | Botón "Registro" | Foto + nombre
- **Móvil:** Logo | Foto de usuario | Botones de config y menú

### 3. Categories.tsx - Filtro de Categorías
Permite filtrar productos por categoría con scroll horizontal en móvil.

### 4. ProductCard.tsx - Tarjeta de Producto
- Imagen del producto
- Badges de descuento/stock
- Nombre y descripción
- Precio y botón de agregar

### 5. MenuSidebar.tsx - Menú Lateral
Navegación principal con animación deslizante desde la derecha.

**Opciones:**
- Inicio
- Menú (activo por defecto)
- Órdenes
- Historial
- Facturas
- Registro

### 6-7. Cart.tsx / CartSidebar.tsx
- **Cart.tsx:** Modal para móvil/tablet
- **CartSidebar.tsx:** Columna fija para desktop

### 8. Register.tsx - Registro de Usuarios ✅
Modal fullScreen con formulario completo de registro.

### 9. ProfileView.tsx - Perfil de Usuario ✅
Muestra información del perfil actual del usuario.

### 10. EditProfile.tsx - Edición de Perfil ✅
Permite editar información personal con validaciones.

### 11. SettingsMenu.tsx - Configuración ✅
Opciones de configuración de la aplicación.

---

## ⚙️ Instalación y Configuración

### Dependencias Principales

```json
{
  "@expo/vector-icons": "^14.x",
  "expo": "^52.x",
  "react": "18.x",
  "react-native": "0.76.x",
  "react-native-safe-area-context": "^4.x"
}
```

### Comandos

```bash
# Instalar dependencias
npm install

# Iniciar el proyecto
npm start

# Limpiar caché
npx expo start --clear

# Ver en móvil (Escanear QR con Expo Go)
# Ver en web (Presionar 'w' en la terminal)
```

---

## 📝 Reglas de Desarrollo

### 1. Código Documentado ⚠️ OBLIGATORIO

```typescript
/**
 * Componente Header
 * 
 * Descripción: Barra de navegación superior que se adapta a diferentes
 * tamaños de pantalla.
 * 
 * Props:
 * - onMenuPress: Función para el menú hamburguesa
 * - onRegisterPress: Función que abre registro (web)
 * - windowWidth: Ancho actual de ventana
 * 
 * Responsive:
 * - Desktop (≥1200px): Logo | Menú centrado | Botón Registro | Usuario
 * - Móvil (<1200px): Logo | Usuario sin nombre | Hamburguesa
 */
```

### 2. Imports Estructurados

```typescript
// 1. React y React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 2. Expo y terceros
import { Ionicons } from '@expo/vector-icons';

// 3. Utilidades del proyecto
import { COLORS } from '../style/color';
import { SPACING } from '../style/spacing';

// 4. Componentes locales
import { CustomButton } from './CustomButton';
```

### 3. Nomenclatura

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

### 4. Responsive OBLIGATORIO

Siempre preguntar si la vista es para:
- Solo móvil
- Solo web
- Ambos (más común)

Usar `isMobile`, `isTablet`, `isDesktop` desde `src/style/spacing.ts`.

### 5. Consistencia de Diseño

- ✅ Usar SOLO colores de `src/style/color.ts`
- ✅ Usar espaciados de `src/style/spacing.ts`
- ✅ Bordes redondeados: `borderRadius: 16-32px`
- ✅ Sombras suaves: `shadowOpacity: 0.1-0.3`

---

## 🚨 Problemas Críticos Resueltos

### ⚠️ PROBLEMA 1: Modales Anidados NO Funcionan

#### ❌ Estructura INCORRECTA:
```typescript
// MAL - El componente tiene Modal interno
export const ProfileView = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        {/* Contenido */}
      </View>
    </Modal>
  );
};
```

#### ✅ Estructura CORRECTA:
```typescript
// BIEN - El componente NO tiene Modal interno
export const ProfileView = ({ onClose }) => {
  return (
    <View style={styles.container}>
      {/* Contenido */}
    </View>
  );
};

// En App.tsx - El Modal se declara aquí
<Modal
  visible={profileVisible}
  animationType="slide"
  presentationStyle="fullScreen"
  onRequestClose={() => setProfileVisible(false)} // ✅ OBLIGATORIO
>
  <ProfileView onClose={() => setProfileVisible(false)} />
</Modal>
```

### ⚠️ PROBLEMA 2: Botón "Atrás" de Android

**Solución:** SIEMPRE agregar `onRequestClose` a TODOS los `<Modal>`:

```typescript
<Modal
  visible={registerVisible}
  animationType="slide"
  presentationStyle="fullScreen"
  onRequestClose={() => setRegisterVisible(false)} // ✅ OBLIGATORIO
>
  <Register onClose={() => setRegisterVisible(false)} />
</Modal>
```

### ⚠️ PROBLEMA 3: Botones del Sistema en Móvil

Agregar una barra inferior en `App.tsx` SOLO para móvil:

```typescript
{!isDesktop && (
  <View style={styles.bottomBar} />
)}

// Estilo:
bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 30,
  backgroundColor: '#E8E8E8',
}
```

### ⚠️ PROBLEMA 4: SafeAreaView

```typescript
// ❌ Incorrecto
<SafeAreaView edges={['top']}> 

// ✅ Correcto
<SafeAreaView edges={['top', 'bottom']}>
```

---

## 📋 Plantilla para Nuevas Vistas

### En `src/screens/` (SIN Modal interno):

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../style/color';
import { SPACING } from '../style/spacing';

interface NuevaVistaProps {
  onClose: () => void;
}

/**
 * Componente NuevaVista
 * 
 * Descripción: [Explicar qué hace esta vista]
 * Acceso: [Desde dónde se accede]
 * Responsive: [Comportamiento en móvil y web]
 */
export const NuevaVista: React.FC<NuevaVistaProps> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header con botón atrás */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Título de la Vista</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.content}>
          {/* Tu contenido aquí */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: SPACING.xxxl,
  },
  header: {
    backgroundColor: COLORS.formHeader,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    padding: SPACING.xl,
  },
});
```

### En `App.tsx` (CON Modal):

```typescript
// 1. Import
import { NuevaVista } from './src/screens/NuevaVista';

// 2. Estado
const [nuevaVistaVisible, setNuevaVistaVisible] = useState(false);

// 3. Modal con onRequestClose OBLIGATORIO
<Modal
  visible={nuevaVistaVisible}
  animationType="slide"
  presentationStyle="fullScreen"
  onRequestClose={() => setNuevaVistaVisible(false)}
>
  <NuevaVista onClose={() => setNuevaVistaVisible(false)} />
</Modal>
```

---

## ✅ Checklist para Nuevas Vistas

Antes de considerar una vista terminada, verifica:

- [ ] Archivo creado en la ubicación correcta
- [ ] Si es Modal, el componente NO tiene `<Modal>` interno
- [ ] En `App.tsx`, el Modal tiene `onRequestClose`
- [ ] El botón "atrás" físico de Android funciona
- [ ] Los colores usan `src/style/color.ts`
- [ ] Los espaciados usan `src/style/spacing.ts`
- [ ] El código está documentado
- [ ] Se probó en móvil Y en web
- [ ] No hay warnings en consola
- [ ] El diseño es responsive (si aplica)
- [ ] Los formularios tienen validaciones (si aplica)

---

## 💾 Control de Versiones

### Después de crear/modificar cada vista:

```bash
# 1. Ver cambios
git status

# 2. Agregar todos los cambios
git add .

# 3. Guardar con mensaje descriptivo
git commit -m "feat: agregar vista de [NOMBRE]"

# 4. Subir al repositorio
git push origin main
```

### Convenciones de Commits

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de errores
- `style:` - Cambios de estilo/diseño
- `docs:` - Cambios en documentación
- `refactor:` - Reestructuración sin cambiar funcionalidad

**Ejemplos:**
```bash
git commit -m "feat: agregar vista de gestión de productos"
git commit -m "fix: corregir responsive en registro"
git commit -m "style: ajustar colores en header"
```

---

## 🚫 Errores Comunes a Evitar

- ❌ NO anidar Modales dentro de componentes
- ❌ NO olvidar `onRequestClose` en Modales
- ❌ NO usar `localStorage`/`sessionStorage`
- ❌ NO usar CSS puro (usar `StyleSheet`)
- ❌ NO usar `calc()` en estilos
- ❌ NO olvidar el responsive
- ❌ NO usar `SafeAreaView` solo con `top`
- ❌ NO crear archivos en ubicaciones incorrectas

---

## 🔍 Preguntas Clave Antes de Generar Código

SIEMPRE hacer estas preguntas:

1. ¿La vista es para móvil, web o ambos?
2. ¿Es pantalla completa o componente reutilizable?
3. ¿Tiene navegación desde el menú?
4. ¿Los colores coinciden con la paleta oficial?
5. ¿Tiene formularios? ¿Necesita validaciones?
6. ¿Necesita datos dinámicos o estáticos?

---

## 🎓 Información para el Backend (Futuro)

El backend deberá incluir:

### API REST para:
- Autenticación de usuarios
- CRUD de productos agrícolas
- Gestión de órdenes y entregas
- Gestión de "familias" de productores
- Notificaciones sobre productos próximos a caducar

### Base de datos sugerida:
PostgreSQL o MongoDB

### Puntos de integración:
- Los datos en `src/data/products.ts` vendrán de la API
- Los formularios tienen `console.log()` donde irán peticiones HTTP
- Implementar AsyncStorage para persistencia local

---

## 📚 Recursos Útiles

- [Documentación Expo](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [Iconos disponibles](https://icons.expo.fyi)
- [StyleSheet API](https://reactnative.dev/docs/stylesheet)

---

## 📌 Estado del Proyecto

### Vistas Implementadas ✅

- [x] Home (listado de productos)
- [x] Registro de Usuarios
- [x] Perfil de Usuario
- [x] Edición de Perfil
- [x] Menú de Configuración

### En Desarrollo 🚧

- [ ] Dashboard principal
- [ ] Gestión de productos (CRUD)
- [ ] Lista de órdenes
- [ ] Historial de ventas
- [ ] Gestión de entregas

---

## 👨‍💻 Equipo de Desarrollo

Proyecto Académico Universitario - RassaJala

---

## 📄 Licencia

Este es un proyecto académico sin fines comerciales.

---

**Última actualización:** Noviembre 2024  
**Versión:** 2.1
