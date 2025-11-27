import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingsMenuProps {
  visible: boolean;
  onClose: () => void;
  onProfilePress: () => void;
  windowWidth: number;
}

/**
 * Componente SettingsMenu
 * 
 * Descripción: Menú de configuración/ajustes que se adapta según el dispositivo.
 * 
 * MÓVIL (<1200px):
 * - Menú lateral (sidebar) que desliza desde la derecha
 * 
 * WEB (>=1200px):
 * - Dropdown que aparece debajo del botón de settings
 * 
 * Opciones del menú:
 * - Mi Perfil
 * - Configuración
 * - Ayuda
 * - Cerrar sesión
 * 
 * @param visible - Controla la visibilidad del menú
 * @param onClose - Función para cerrar el menú
 * @param onProfilePress - Función para abrir el perfil del usuario
 * @param windowWidth - Ancho de la ventana para responsive
 */
export const SettingsMenu: React.FC<SettingsMenuProps> = ({ 
  visible, 
  onClose, 
  onProfilePress,
  windowWidth 
}) => {
  const isDesktop = windowWidth >= 1200;

  const menuOptions = [
    { 
      label: 'Mi Perfil', 
      icon: 'person-outline', 
      action: () => {
        console.log('Cerrando SettingsMenu, abriendo ProfileView...');
        onClose(); // Cierra el menú
        setTimeout(() => {
          onProfilePress(); // Abre el perfil después de cerrar
        }, 400); // Aumentamos el delay
      }
    },
    { 
      label: 'Configuración', 
      icon: 'settings-outline', 
      action: () => {
        console.log('Ir a Configuración');
        onClose();
      }
    },
    { 
      label: 'Ayuda', 
      icon: 'help-circle-outline', 
      action: () => {
        console.log('Ir a Ayuda');
        onClose();
      }
    },
    { 
      label: 'Cerrar sesión', 
      icon: 'log-out-outline', 
      action: () => {
        console.log('Cerrar sesión');
        onClose();
      },
      danger: true
    },
  ];

  // Renderizado para MÓVIL (Sidebar)
  if (!isDesktop) {
    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          {/* Backdrop */}
          <TouchableOpacity 
            style={styles.backdrop} 
            activeOpacity={1}
            onPress={onClose}
          />
          
          {/* Sidebar */}
          <View style={styles.sidebar}>
            {/* Header */}
            <View style={styles.sidebarHeader}>
              <View style={styles.headerTitleRow}>
                <Ionicons name="settings-outline" size={24} color="#2E7D32" />
                <Text style={styles.sidebarTitle}>Ajustes</Text>
              </View>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Menu Options */}
            <View style={styles.menuList}>
              {menuOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.menuItem,
                    option.danger && styles.menuItemDanger,
                  ]}
                  onPress={option.action}
                >
                  <Ionicons 
                    name={option.icon as any} 
                    size={22} 
                    color={option.danger ? '#EF4444' : '#666'} 
                  />
                  <Text style={[
                    styles.menuText,
                    option.danger && styles.menuTextDanger,
                  ]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  // Renderizado para DESKTOP (Dropdown)
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.dropdownOverlay}>
        {/* Backdrop invisible */}
        <TouchableOpacity 
          style={styles.dropdownBackdrop} 
          activeOpacity={1}
          onPress={onClose}
        />
        
        {/* Dropdown Menu */}
        <View style={styles.dropdown}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dropdownItem,
                option.danger && styles.dropdownItemDanger,
              ]}
              onPress={option.action}
            >
              <Ionicons 
                name={option.icon as any} 
                size={18} 
                color={option.danger ? '#EF4444' : '#666'} 
              />
              <Text style={[
                styles.dropdownText,
                option.danger && styles.dropdownTextDanger,
              ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // MÓVIL - Sidebar
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
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E7D32',
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
    backgroundColor: '#F5F5F5',
  },
  menuItemDanger: {
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  menuText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  menuTextDanger: {
    color: '#EF4444',
    fontWeight: '600',
  },

  // WEB - Dropdown
  dropdownOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 70, // Distancia desde el top para que aparezca debajo del botón
    paddingRight: 20,
  },
  dropdownBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    minWidth: 220,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 12,
  },
  dropdownItemDanger: {
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  dropdownText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  dropdownTextDanger: {
    color: '#EF4444',
    fontWeight: '600',
  },
});