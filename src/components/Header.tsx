import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  onMenuPress: () => void;
  onRegisterPress?: () => void;
  onProfilePress?: () => void;
  onSettingsPress?: () => void; // ✅ NUEVA PROP
  windowWidth: number;
}

const menuItems = [
  { label: 'Inicio', icon: 'home-outline', active: false },
  { label: 'Menu', icon: 'restaurant-outline', active: true },
  { label: 'Ordenes', icon: 'receipt-outline', active: false },
  { label: 'Historial', icon: 'time-outline', active: false },
  { label: 'Facturas', icon: 'document-text-outline', active: false },
];

/**
 * Componente Header
 * 
 * Barra de navegación superior que se adapta a diferentes tamaños de pantalla.
 * 
 * DESKTOP (>=1200px):
 * - Muestra: Logo | Menú completo centrado | Botón Registro | User con nombre | Settings
 * 
 * MÓVIL (<1200px):
 * - Muestra: Logo | User sin nombre | Settings | Menú hamburguesa
 * 
 * @param onMenuPress - Abre el menú hamburguesa (móvil)
 * @param onRegisterPress - Abre la pantalla de registro (web)
 * @param onProfilePress - Abre la vista de perfil del usuario
 * @param onSettingsPress - Abre el menú de configuración/ajustes
 * @param windowWidth - Ancho actual de la ventana para responsive
 */
export const Header: React.FC<HeaderProps> = ({ 
  onMenuPress, 
  onRegisterPress, 
  onProfilePress,
  onSettingsPress, // ✅ NUEVA PROP
  windowWidth 
}) => {
  const [activeMenu, setActiveMenu] = React.useState('Menu');
  
  const isDesktop = windowWidth >= 1200;
  const isMobile = windowWidth < 1200;

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={[styles.logoSection, { width: isDesktop ? 200 : 60 }]}>
        <View style={styles.logo}>
          <View style={[styles.logoBar, { width: isMobile ? 6 : 8, height: isMobile ? 28 : 36 }]} />
          <View style={[styles.logoBar, { width: isMobile ? 6 : 8, height: isMobile ? 28 : 36 }]} />
          <View style={[styles.logoBar, { width: isMobile ? 6 : 8, height: isMobile ? 28 : 36 }]} />
        </View>
      </View>

      {/* Menu Navigation - CENTRADO (solo desktop >= 1200px) */}
      {isDesktop && (
        <View style={styles.menuSection}>
          <View style={styles.menuWrapper}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  activeMenu === item.label && styles.menuItemActive,
                ]}
                onPress={() => {
                  setActiveMenu(item.label);
                  console.log(`Navegando a: ${item.label}`);
                }}
              >
                <Ionicons 
                  name={item.icon as any} 
                  size={18} 
                  color={activeMenu === item.label ? '#000' : '#666'} 
                />
                <Text style={[
                  styles.menuText,
                  activeMenu === item.label && styles.menuTextActive,
                ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* User Profile - DERECHA */}
      <View style={[styles.userSection, { width: isDesktop ? 'auto' : 'auto' }]}>
        <View style={styles.userContainer}>
          {/* Botón de Registro - SOLO en Desktop */}
          {isDesktop && onRegisterPress && (
            <TouchableOpacity 
              style={styles.registerButton}
              onPress={onRegisterPress}
            >
              <Ionicons name="person-add-outline" size={18} color="#fff" />
              <Text style={styles.registerButtonText}>Registro</Text>
            </TouchableOpacity>
          )}

          {/* Foto de usuario - clickeable para abrir perfil */}
          <TouchableOpacity 
            onPress={onProfilePress}
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: 'https://img.freepik.com/foto-gratis/retrato-feliz-mujer-romantica-tranquila-caucasica-look-casual-pelo-largo-aretes-collar-sobre-fondo-increible-vista-hermosa-montanas-verdes_343596-951.jpg',
              }}
              style={styles.userImage}
            />
          </TouchableOpacity>

          {/* Nombre - clickeable en desktop */}
          {isDesktop && (
            <TouchableOpacity onPress={onProfilePress} activeOpacity={0.7}>
              <Text style={styles.userName}>Antonella</Text>
            </TouchableOpacity>
          )}

          {/* ✅ Botón Settings/Configuración */}
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={onSettingsPress}
          >
            <Ionicons name="settings-outline" size={20} color="#000" />
          </TouchableOpacity>

          {/* Menú hamburguesa - visible cuando < 1200px */}
          {isMobile && (
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={onMenuPress}
            >
              <Ionicons name="menu" size={20} color="#000" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1600,
    width: '100%',
    alignSelf: 'center',
  },
  logoSection: {
    justifyContent: 'flex-start',
  },
  logo: {
    flexDirection: 'row',
    gap: 4,
  },
  logoBar: {
    backgroundColor: '#00D863',
    borderRadius: 4,
    transform: [{ skewX: '-12deg' }],
  },
  menuSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingVertical: 6,
    gap: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  menuItemActive: {
    backgroundColor: '#00D863',
  },
  menuText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#000',
    fontWeight: '700',
  },
  userSection: {
    alignItems: 'flex-end',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 10,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00D863',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    marginRight: 12,
  },
  registerButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  userImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
  },
  iconButton: {
    width: 38,
    height: 38,
    backgroundColor: '#E8E8E8',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
});