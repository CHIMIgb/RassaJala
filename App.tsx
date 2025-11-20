import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { Cart } from './components/Cart';
import { MenuSidebar } from './components/MenuSidebar';
import { Register } from './components/Register';
import { ProfileView } from './components/ProfileView'; // ✅ NUEVO
import { EditProfile } from './components/EditProfile'; // ✅ NUEVO
import { SettingsMenu } from './components/SettingsMenu'; // ✅ NUEVO
import { products } from './data/products';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false); // ✅ Vista de perfil
  const [editProfileVisible, setEditProfileVisible] = useState(false); // ✅ Editar perfil
  const [settingsVisible, setSettingsVisible] = useState(false); // ✅ Menú de settings
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // Detectar cambios de tamaño de ventana (crítico para web)
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
    });

    return () => subscription?.remove();
  }, []);

  const isDesktop = windowWidth >= 1200;

  // ✅ Handler para abrir perfil (desde foto de usuario)
  const handleProfilePress = () => {
    console.log('Abriendo ProfileView...');
    // Asegurar que SettingsMenu esté cerrado antes
    setSettingsVisible(false);
    // Pequeño delay para asegurar que se cierre completamente
    setTimeout(() => {
      setProfileVisible(true);
    }, 100);
  };

  // ✅ Handler para abrir editar perfil (desde ProfileView)
  const handleEditProfilePress = () => {
    console.log('Cerrando ProfileView, abriendo EditProfile...');
    setProfileVisible(false);
    setTimeout(() => {
      setEditProfileVisible(true);
    }, 300);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        {/* Header - Fijo en la parte superior */}
        <View style={styles.headerContainer}>
          <Header
            onMenuPress={() => setMenuVisible(true)}
            onRegisterPress={() => setRegisterVisible(true)}
            onProfilePress={handleProfilePress} // ✅ Abre vista de perfil
            onSettingsPress={() => setSettingsVisible(true)} // ✅ Abre menú de settings
            windowWidth={windowWidth}
          />
        </View>

        {/* Layout principal */}
        <View style={styles.mainLayout}>
          {/* Columna izquierda/centro - Productos */}
          <View style={styles.mainContent}>
            <ScrollView
              style={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContentContainer}
            >
              {/* Categories */}
              <Categories />

              {/* Products Grid */}
              <View style={[
                styles.productsGrid,
                isDesktop && styles.productsGridDesktop
              ]}>
                {products.map((product, index) => (
                  <View
                    key={index}
                    style={[
                      styles.productItem,
                      isDesktop && styles.productItemDesktop
                    ]}
                  >
                    <ProductCard product={product} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Columna derecha - Búsqueda + Carrito (SOLO en desktop >= 1200px) */}
          {isDesktop && (
            <View style={styles.rightColumn}>
              <CartSidebar />
            </View>
          )}
        </View>

        {/* Botón flotante del carrito - SOLO visible en móvil/tablet (< 1200px) */}
        {!isDesktop && (
          <>
            <View style={styles.floatingButtonContainer}>
              <TouchableOpacity
                style={styles.floatingCartButton}
                onPress={() => setCartVisible(true)}
              >
                <Ionicons name="cart" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Barra inferior para separar botones del sistema */}
            <View style={styles.bottomBar} />
          </>
        )}

        {/* Cart Modal - SOLO en móvil/tablet */}
        {!isDesktop && (
          <Cart visible={cartVisible} onClose={() => setCartVisible(false)} />
        )}

        {/* Menu Sidebar */}
        <MenuSidebar
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          onRegisterPress={() => {
            setMenuVisible(false);
            setRegisterVisible(true);
          }}
        />

        {/* Register Modal - Pantalla de Registro */}
        {/* Register Modal - Pantalla de Registro */}
        <Modal
          visible={registerVisible}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setRegisterVisible(false)} // ✅ AGREGAR ESTA LÍNEA
        >
          <Register onClose={() => setRegisterVisible(false)} />
        </Modal>

        {/* ✅ ProfileView - Vista de perfil (IGUAL QUE REGISTER) */}
        <Modal
          visible={profileVisible}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setProfileVisible(false)} // ✅ AGREGAR
        >
          <ProfileView
            visible={profileVisible}
            onClose={() => setProfileVisible(false)}
            onEditPress={handleEditProfilePress}
          />
        </Modal>

        {/* ✅ EditProfile - Formulario de edición (IGUAL QUE REGISTER) */}
        <Modal
          visible={editProfileVisible}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setEditProfileVisible(false)} // ✅ AGREGAR
        >
          <EditProfile
            visible={editProfileVisible}
            onClose={() => setEditProfileVisible(false)}
          />
        </Modal>

        {/* ✅ NUEVO: SettingsMenu - Menú de configuración */}
        <SettingsMenu
          visible={settingsVisible}
          onClose={() => setSettingsVisible(false)}
          onProfilePress={handleProfilePress}
          windowWidth={windowWidth}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  headerContainer: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  mainLayout: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 1600,
    width: '100%',
    alignSelf: 'center',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: Platform.OS === 'web' ? 40 : 80, // Más espacio en móvil
  },
  productsGrid: {
    marginTop: 24,
  },
  productsGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  productItem: {
    marginBottom: 20,
  },
  productItemDesktop: {
    width: '48%',
  },
  rightColumn: {
    width: 420,
    paddingRight: 20,
    paddingLeft: 20,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 20 : 100,
    right: 20,
    zIndex: 999,
  },
  floatingCartButton: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: '#E8E8E8', // ✅ MISMO COLOR QUE EL FONDO
  },
});