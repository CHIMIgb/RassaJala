import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuSidebarProps {
  visible: boolean;
  onClose: () => void;
  onRegisterPress?: () => void; // ✅ Nueva prop agregada
}

const menuItems = [
  { label: 'Inicio', icon: 'home-outline', active: false },
  { label: 'Menu', icon: 'restaurant-outline', active: true },
  { label: 'Ordenes', icon: 'receipt-outline', active: false },
  { label: 'Historial', icon: 'time-outline', active: false },
  { label: 'Facturas', icon: 'document-text-outline', active: false },
  { label: 'Registro', icon: 'person-add-outline', active: false }, // ✅ Nueva opción
];

export const MenuSidebar: React.FC<MenuSidebarProps> = ({ visible, onClose, onRegisterPress }) => {
  const [activeMenu, setActiveMenu] = React.useState('Menu');

  const handleMenuPress = (label: string) => {
    setActiveMenu(label);
    console.log(`Navegando a: ${label}`);
    
    // ✅ Si es Registro, ejecutar callback especial
    if (label === 'Registro' && onRegisterPress) {
      onRegisterPress();
      onClose();
      return;
    }
    
    // Cerrar el menú después de seleccionar
    setTimeout(() => onClose(), 300);
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {/* Backdrop - Fondo oscuro */}
        <TouchableOpacity 
          style={styles.backdrop} 
          activeOpacity={1}
          onPress={onClose}
        />
        
        {/* Sidebar - Menú lateral */}
        <View style={styles.sidebar}>
          {/* Header del menú */}
          <View style={styles.sidebarHeader}>
            <View style={styles.logo}>
              <View style={styles.logoBar} />
              <View style={styles.logoBar} />
              <View style={styles.logoBar} />
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Opciones del menú */}
          <View style={styles.menuList}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  activeMenu === item.label && styles.menuItemActive,
                ]}
                onPress={() => handleMenuPress(item.label)}
              >
                <Ionicons 
                  name={item.icon as any} 
                  size={22} 
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  backdrop: {
    flex: 1,
  },
  sidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '75%',
    maxWidth: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    marginBottom: 20,
  },
  logo: {
    flexDirection: 'row',
    gap: 4,
  },
  logoBar: {
    width: 8,
    height: 32,
    backgroundColor: '#00D863',
    borderRadius: 4,
    transform: [{ skewX: '-12deg' }],
  },
  closeButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuList: {
    gap: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 16,
  },
  menuItemActive: {
    backgroundColor: '#00D863',
  },
  menuText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#000',
    fontWeight: '700',
  },
});