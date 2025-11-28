# 📱 PROMPT GLOBAL v2.0 - PROYECTO RASSAJALA

## 🎯 CONTEXTO DEL PROYECTO

Soy estudiante universitario trabajando en **RassaJala**, un proyecto académico de desarrollo de una aplicación móvil y web para la gestión de productos agrícolas. Este proyecto optimiza la comercialización de productos de agricultores y productores locales, que actualmente se maneja de forma desorganizada por WhatsApp.

**Usuarios del sistema:**
- **Agricultores/Productores:** Registran sus productos (nombre, precio, foto, tipo de venta: kilo/pieza)
- **Vendedores:** Administran entregas y cobros
- **Clientes:** Consultan catálogo y apartan productos
- **Administrador:** Supervisa todas las operaciones de la plataforma

**IMPORTANTE:** Este proyecto fue **adaptado desde una plantilla Next.js** hacia **React Native con Expo** desde cero. NO es posible usar código Next.js directamente.

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
│   ├── Register.tsx        # Pantalla de registro de usuarios ✅
│   ├── ProfileView.tsx     # Vista de perfil de usuario ✅
│   ├── EditProfile.tsx     # Edición de perfil ✅
│   └── SettingsMenu.tsx    # Menú de configuración ✅
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
// Colores principales de RassaJala
const COLORS = {
  primary: '#00D863',        // Verde brillante principal
  primaryDark: '#00B84F',    // Verde oscuro para hover
  background: '#E8E8E8',     // Gris claro de fondo
  backgroundCard: '#FFFFFF', // Blanco para tarjetas
  text: '#000000',           // Negro para texto principal
  textSecondary: '#666666',  // Gris para texto secundario
  textLight: '#999999',      // Gris claro para placeholders
  border: '#E0E0E0',         // Gris para bordes
  
  // Colores para formularios (estilo Register, Profile, etc.)
  formBg: '#C8E6C9',         // Verde muy claro de fondo
  formCard: '#A5D6A7',       // Verde claro para tarjetas de formulario
  formHeader: '#66BB6A',     // Verde medio para headers
  formLabel: '#2E7D32',      // Verde oscuro para labels
  formButton: '#2E7D32',     // Verde oscuro para botón principal
  formButtonSecondary: '#4FC3F7', // Azul claro para botón secundario
};
```

---

## 📐 BREAKPOINTS Y RESPONSIVE

```typescript
// Breakpoints para diseño responsive
const BREAKPOINTS = {
  mobile: '< 768px',         // Móvil y tablet pequeña
  tablet: '768px - 1199px',  // Tablet grande
  desktop: '>= 1200px',      // Desktop y pantallas grandes
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
  - `profileVisible`: Controla la vista de perfil
  - `editProfileVisible`: Controla la edición de perfil
  - `settingsVisible`: Controla el menú de configuración
- **Layout responsive**: 
  - Desktop (>=1200px): 3 columnas (Logo | Menú centrado | Registro + User)
  - Móvil (<1200px): Logo | User + Hamburguesa
- **Barra inferior móvil**: Incluye `bottomBar` para separar visualmente los botones del sistema

### **2. Header.tsx** - Barra superior
- **Props**: `onMenuPress`, `onRegisterPress`, `windowWidth`
- **Desktop**: Logo | Menú completo centrado | Botón "Registro" | Foto + nombre de usuario
- **Móvil**: Logo | Foto de usuario | Botones de config y menú hamburguesa
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
- **Botón "Atrás" Android**: Funciona correctamente con `onRequestClose`

### **6. Cart.tsx / CartSidebar.tsx** - Carrito de compras
- **Cart.tsx**: Modal para móvil/tablet
- **CartSidebar.tsx**: Columna fija para desktop
- **Contenido**:
  - Barra de búsqueda
  - Lista de productos con cantidad
  - Resumen (Subtotal, IVA, Total)
  - Botón "Confirmar orden"

### **7. Register.tsx** - Registro de usuarios ✅
- **Visibilidad**: Desde menú hamburguesa (móvil) o botón header (web)
- **Estructura**: Modal fullScreen con `onRequestClose`
- **Campos del formulario**:
  - Nombre, Apellidos
  - Ocupación, Usuario
  - Correo, Teléfono
  - Contraseña
  - Tipo de Usuario (dropdown)
  - Permisos (dropdown)
- **Botones**: Subir Imagen, Guardar
- **Colores**: Paleta verde (#C8E6C9, #A5D6A7, #66BB6A)

### **8. ProfileView.tsx** - Perfil de usuario ✅
- **Función**: Muestra información del perfil del usuario actual
- **Acceso**: Desde el header (foto de usuario) o menú
- **Estructura**: Modal fullScreen sin Modal interno
- **Opciones**: Ver información, editar perfil, configuración

### **9. EditProfile.tsx** - Edición de perfil ✅
- **Función**: Permite al usuario editar su información personal
- **Estructura**: Modal fullScreen con formulario
- **Validaciones**: Campos obligatorios, formato de email

### **10. SettingsMenu.tsx** - Configuración ✅
- **Función**: Opciones de configuración de la aplicación
- **Estructura**: Modal con lista de opciones
- **Opciones**: Notificaciones, privacidad, tema, etc.

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
 * - onRegisterPress: Función que abre la pantalla de registro (web)
 * - windowWidth: Ancho actual de la ventana para responsive
 * 
 * Responsive:
 * - Desktop (>=1200px): Logo | Menú centrado | Botón Registro | User con nombre
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
6. StyleSheet.create()
```

---

## 🚨 PROBLEMAS CRÍTICOS RESUELTOS

### **⚠️ PROBLEMA 1: Modales anidados NO funcionan en móvil**

**❌ Estructura INCORRECTA:**
```typescript
// ❌ MAL - El componente tiene Modal interno
export const ProfileView = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        {/* Contenido */}
      </View>
    </Modal>
  );
};

// En App.tsx
<ProfileView visible={profileVisible} onClose={...} />
```

**Resultado:** En móvil la pantalla se oscurece pero **el contenido NO se renderiza**. Solo pantalla en blanco.

**✅ Estructura CORRECTA:**
```typescript
// ✅ BIEN - El componente NO tiene Modal interno
export const ProfileView = ({ onClose }) => {
  return (
    <View style={styles.container}>
      {/* Contenido */}
    </View>
  );
};

// ✅ BIEN - El Modal se declara en App.tsx
<Modal
  visible={profileVisible}
  animationType="slide"
  presentationStyle="fullScreen"
  onRequestClose={() => setProfileVisible(false)} // ✅ OBLIGATORIO
>
  <ProfileView onClose={() => setProfileVisible(false)} />
</Modal>
```

**Regla:** Usar la **MISMA ESTRUCTURA** que `Register.tsx` para todas las vistas modales.

---

### **⚠️ PROBLEMA 2: Botón "Atrás" de Android no funciona**

**❌ Problema:**
Los usuarios presionan el botón físico/virtual "Atrás" en Android y los modales NO se cierran.

**✅ Solución:**
**SIEMPRE** agregar `onRequestClose` a TODOS los `<Modal>`:
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

**Regla:** Si creas un Modal, **SIEMPRE** incluye `onRequestClose`.

---

### **⚠️ PROBLEMA 3: Botones del sistema se funden con el fondo en móvil**

**❌ Problema:**
En dispositivos Android, los botones de navegación del sistema (Atrás, Inicio, Pestañas) se **fusionan visualmente** con el fondo gris (#E8E8E8).

**✅ Solución:**
Agregar una barra inferior en `App.tsx` SOLO para móvil:
```typescript
{!isDesktop && (
  <>
    {/* Botón flotante del carrito */}
    <View style={styles.floatingButtonContainer}>
      <TouchableOpacity style={styles.floatingCartButton} onPress={...}>
        <Ionicons name="cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    
    {/* ✅ Barra inferior para separar botones del sistema */}
    <View style={styles.bottomBar} />
  </>
)}

// Estilo:
bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 30,
  backgroundColor: '#E8E8E8',
},
```

**Regla:** Todas las vistas principales en móvil deben incluir esta barra o usar `SafeAreaView` con `edges={['top', 'bottom']}`.

---

### **⚠️ PROBLEMA 4: SafeAreaView debe proteger arriba Y abajo**

**❌ Incorrecto:**
```typescript
<SafeAreaView edges={['top']}> // Solo protege arriba
```

**✅ Correcto:**
```typescript
<SafeAreaView edges={['top', 'bottom']}> // Protege arriba Y abajo
```

---

## 📋 PLANTILLA CORRECTA PARA NUEVAS VISTAS MODALES

**Usar esta estructura para vistas como: Perfil, Editar Perfil, Configuración, etc.**

### **1. En el componente (SIN Modal interno):**
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NuevaVistaProps {
  onClose: () => void;
}

/**
 * Componente NuevaVista
 * 
 * Descripción: [Explicar qué hace esta vista]
 * 
 * Acceso: [Desde dónde se accede - menú, header, etc.]
 * 
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
    backgroundColor: '#C8E6C9', // Verde claro de fondo
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#66BB6A', // Verde medio
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
    padding: 20,
  },
});
```

### **2. En App.tsx (CON Modal):**
```typescript
// 1. Import
import { NuevaVista } from './components/NuevaVista';

// 2. Estado
const [nuevaVistaVisible, setNuevaVistaVisible] = useState(false);

// 3. Modal con onRequestClose OBLIGATORIO
<Modal
  visible={nuevaVistaVisible}
  animationType="slide"
  presentationStyle="fullScreen"
  onRequestClose={() => setNuevaVistaVisible(false)} // ✅ OBLIGATORIO
>
  <NuevaVista onClose={() => setNuevaVistaVisible(false)} />
</Modal>
```

---

## 🚀 FLUJO DE TRABAJO PARA NUEVAS VISTAS

### **Paso 1: Analizar el diseño de Figma**
- ¿Es para móvil, web o ambos?
- ¿Qué colores usa? (deben coincidir con la paleta)
- ¿Es modal fullScreen o vista embebida?
- ¿Tiene formularios? ¿Navegación especial?

### **Paso 2: Crear el componente**
- Seguir la plantilla de arriba
- NO incluir `<Modal>` dentro del componente
- Documentar con comentarios
- Usar colores de la paleta oficial

### **Paso 3: Integrar en App.tsx**
- Crear estado: `const [vistaVisible, setVistaVisible] = useState(false);`
- Crear Modal con `onRequestClose`
- Conectar con navegación (menú, botón, etc.)

### **Paso 4: Integrar en MenuSidebar (si aplica)**
```typescript
const menuItems = [
  // ... items existentes
  { label: 'Nueva Vista', icon: 'icon-name', active: false },
];

// En handleMenuPress:
if (label === 'Nueva Vista' && onNuevaVistaPress) {
  onNuevaVistaPress();
  onClose();
  return;
}
```

### **Paso 5: Probar en móvil Y web**
- Verificar que el Modal se abre correctamente
- Verificar que el botón "atrás" de Android funciona
- Verificar que el diseño se ve bien en ambas plataformas

---

## 🔍 PREGUNTAS CLAVE ANTES DE GENERAR CÓDIGO

**SIEMPRE hacer estas preguntas antes de crear una vista:**

1. **¿La vista es para móvil, web o ambos?**
   - Respuesta: Define si usar layout responsive o específico

2. **¿Tiene navegación desde el menú o es un modal independiente?**
   - Respuesta: Si es desde menú, agregar en MenuSidebar.tsx
   - Si es modal, crear estado en App.tsx

3. **¿Los colores del diseño coinciden con la paleta oficial?**
   - Respuesta: Validar que use #00D863 (verde principal) y colores de la paleta

4. **¿Tiene formularios?**
   - Respuesta: Crear useState para cada campo
   - Agregar validaciones básicas (requeridos, formato de email, etc.)

5. **¿Necesita datos dinámicos o datos estáticos?**
   - Datos estáticos: Hardcodear en el componente
   - Datos dinámicos: Crear en `data/` o simular con useState
   - Nota: El backend se hará después, por ahora simular datos

**Sobre validaciones de formularios:**
- Validar tipos de datos (texto, números, email)
- Validar campos requeridos
- Mostrar mensajes de error con Alert
- Ejemplo: No permitir números en nombre, validar formato de email

---

## 📊 SOBRE LAS VISTAS A CREAR

**IMPORTANTE**: No hay un orden predefinido de vistas. Cada alumno trabajará en las vistas que le sean asignadas.

**Flujo de trabajo**:
1. El alumno recibe una captura/diseño de Figma de la vista a crear
2. Comparte la imagen con la IA
3. La IA genera el código siguiendo la estructura y paleta de colores del proyecto
4. El alumno integra el código y prueba en móvil/web

**Ejemplos de vistas comunes en sistemas de gestión agrícola**:
- Dashboard principal
- Gestión de productos agrícolas (CRUD)
- Lista de órdenes/pedidos
- Historial de ventas
- Gestión de entregas
- Perfil de usuario ✅
- Edición de perfil ✅
- Configuración ✅
- Registro de usuarios ✅
- Catálogo de productos
- Gestión de "familias" de productores
- Productos próximos a caducar
- Reportes de ventas

---

## ⚠️ ERRORES COMUNES A EVITAR

1. ❌ **NO anidar Modales** dentro de componentes (usar estructura correcta)
2. ❌ **NO olvidar onRequestClose** en Modales
3. ❌ **NO usar localStorage/sessionStorage** (no funciona en React Native)
4. ❌ **NO usar CSS puro** (usar StyleSheet de React Native)
5. ❌ **NO usar `calc()`** en estilos (usar porcentajes o números)
6. ❌ **NO olvidar el responsive** (siempre validar en diferentes tamaños)
7. ❌ **NO usar SafeAreaView solo con top** (usar top Y bottom)

---

## ✅ CHECKLIST PARA NUEVAS VISTAS

Antes de considerar una vista terminada, verifica:

- [ ] Si es Modal, el componente NO tiene `<Modal>` interno
- [ ] En App.tsx, el Modal tiene `onRequestClose`
- [ ] El botón "atrás" físico de Android cierra la vista
- [ ] El header tiene botón "arrow-back" que ejecuta `onClose`
- [ ] Los colores usan la paleta oficial (sin inventar colores)
- [ ] El código está documentado con comentarios
- [ ] Se probó en móvil Y en web
- [ ] No hay warnings en consola
- [ ] El diseño es responsive (si aplica)
- [ ] Los formularios tienen validaciones básicas (si aplica)

---

## 🔧 DEBUGGING EN MÓVIL

Cuando algo no funcione en móvil:

1. **Revisar la consola/terminal:**
```bash
# Ver logs en tiempo real
npx expo start
```

2. **Agregar console.logs estratégicos:**
```typescript
useEffect(() => {
  if (visible) {
    console.log('Vista abierta - Modo:', isMobile ? 'MÓVIL' : 'WEB');
  }
}, [visible]);
```

3. **Verificar el flujo de estados:**
```typescript
const handleOpen = () => {
  console.log('Abriendo vista...');
  setVisible(true);
};
```

4. **Verificar que no hay Modales anidados:**
```typescript
// En el componente, buscar:
return (
  <Modal> // ❌ Si encuentras esto, hay problema
    ...
  </Modal>
);
```

---

## 📚 RECURSOS ÚTILES

- **Documentación Expo**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **Iconos disponibles**: https://icons.expo.fyi
- **StyleSheet API**: https://reactnative.dev/docs/stylesheet
- **Repositorio del proyecto**: [URL del GitHub]

---

## 🎓 INFORMACIÓN PARA EL BACKEND (Futura generación)

Este proyecto está desarrollado **solo frontend**. El backend deberá:

1. **API REST** para:
   - Autenticación de usuarios
   - CRUD de productos agrícolas
   - Gestión de órdenes y entregas
   - Gestión de "familias" de productores
   - Notificaciones sobre productos próximos a caducar
   
2. **Base de datos** sugerida:
   - PostgreSQL o MongoDB
   
3. **Puntos de integración**:
   - Los datos en `data/products.ts` deberán venir de la API
   - Los formularios tienen `console.log()` donde irán las peticiones HTTP
   - El token de autenticación deberá guardarse en estado global (Context API o Redux)
   - Implementar AsyncStorage para persistencia local

---

## 💾 CONTROL DE VERSIONES CON GIT

**DESPUÉS DE CREAR/MODIFICAR CADA VISTA**, ejecuta estos comandos:

```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar todos los cambios
git add .

# 3. Guardar cambios con mensaje descriptivo
git commit -m "feat: agregar vista de [NOMBRE DE LA VISTA]"

# 4. Subir al repositorio
git push origin main
```

**Convenciones para mensajes de commit:**
- `feat:` - Nueva funcionalidad (nueva vista)
- `fix:` - Corrección de errores
- `style:` - Cambios de estilo/diseño
- `docs:` - Cambios en documentación

**Ejemplo**:
```bash
git commit -m "feat: agregar vista de gestión de productos agrícolas"
git commit -m "fix: corregir responsive en vista de registro"
git commit -m "style: ajustar colores en botones del header"
```

---

## 📌 VERSIÓN DEL PROMPT

**Versión**: 2.0
**Última actualización**: Noviembre 2024
**Vistas implementadas**: 
- ✅ Home (listado de productos)
- ✅ Registro de Usuarios (móvil y web)
- ✅ Perfil de Usuario (móvil y web)
- ✅ Edición de Perfil (móvil y web)
- ✅ Menú de Configuración (móvil y web)

**Cambios respecto a v1.0:**
- ✅ Agregado contexto del proyecto RassaJala
- ✅ Documentados problemas críticos de Modales en móvil
- ✅ Agregada solución de bottomBar para móvil
- ✅ Agregada plantilla correcta para vistas modales
- ✅ Documentadas 4 nuevas vistas implementadas
- ✅ Agregado checklist de verificación
- ✅ Agregada sección de debugging

**Próxima actualización**: Al agregar 5 vistas nuevas o cambios estructurales importantes

---

**FIN DEL PROMPT GLOBAL v2.0**

---

## 💡 CÓMO USAR ESTE PROMPT

1. **Copia este documento completo**
2. **Pégalo al INICIO de un chat nuevo** con cualquier IA (Claude, ChatGPT, etc.)
3. **Comparte la captura de Figma** de tu vista asignada
4. **Responde las 5 preguntas clave** que la IA te haga
5. **Integra el código generado** en tu proyecto
6. **Prueba en móvil Y web**
7. **Verifica el checklist** antes de dar por terminada la vista
8. **Haz commit en Git** con mensaje descriptivo

**Mantén la consistencia del proyecto siguiendo esta estructura y documentación**
