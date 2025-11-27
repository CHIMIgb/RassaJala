import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProfileViewProps {
  visible: boolean;
  onClose: () => void;
  onEditPress: () => void;
}

/**
 * Componente ProfileView
 * 
 * Descripción: Vista de perfil del usuario en modo SOLO LECTURA.
 * NO usa Modal anidado, se renderiza como componente directo igual que Register.
 * 
 * Props:
 * - visible: Controla la visibilidad (manejado por el padre con Modal)
 * - onClose: Función que se ejecuta al cerrar la vista
 * - onEditPress: Función que abre el formulario de EditProfile
 * 
 * Responsive:
 * - Móvil (<768px): Layout vertical, imagen arriba
 * - Web (>=768px): Layout horizontal, imagen izquierda
 */
export const ProfileView: React.FC<ProfileViewProps> = ({ 
  onClose, 
  onEditPress 
}) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // Datos del usuario
  const userData = {
    nombre: 'Antonella',
    apellidoPaterno: 'Domínguez',
    apellidoMaterno: 'Martínez',
    usuario: 'antonella_dm',
    correo: 'antonella.dm@gmail.com',
    telefono: '+52 311 123 4567',
    ocupacion: 'Gerente',
    tipoUsuario: 'Administrador',
    imagen: 'https://img.freepik.com/foto-gratis/retrato-feliz-mujer-romantica-tranquila-caucasica-look-casual-pelo-largo-aretes-collar-sobre-fondo-increible-vista-hermosa-montanas-verdes_343596-951.jpg',
  };

  // Detectar cambios de tamaño
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.breadcrumb}>Inicio / Mi Perfil</Text>
            <View style={styles.titleRow}>
              <Ionicons name="person-outline" size={24} color="#fff" />
              <Text style={styles.headerTitle}>Mi Perfil</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={[
          styles.content,
          !isMobile && styles.contentRow,
        ]}>
          {/* Imagen y botón */}
          <View style={[
            styles.imageSection,
            !isMobile && styles.imageSectionWide,
          ]}>
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: userData.imagen }} 
                style={styles.profileImage}
              />
            </View>
            
            <Text style={styles.userName}>
              {userData.nombre} {userData.apellidoPaterno}
            </Text>
            <Text style={styles.userRole}>{userData.tipoUsuario}</Text>

            <TouchableOpacity 
              style={styles.editButton}
              onPress={onEditPress}
            >
              <Ionicons name="create-outline" size={20} color="#fff" />
              <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>

          {/* Información */}
          <View style={[
            styles.infoSection,
            !isMobile && styles.infoSectionWide,
          ]}>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Información personal</Text>

              {/* Usuario */}
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="person-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Usuario</Text>
                  <Text style={styles.infoValue}>{userData.usuario}</Text>
                </View>
              </View>

              {/* Correo */}
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="mail-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Correo electrónico</Text>
                  <Text style={styles.infoValue}>{userData.correo}</Text>
                </View>
              </View>

              {/* Teléfono */}
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="call-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Teléfono</Text>
                  <Text style={styles.infoValue}>{userData.telefono}</Text>
                </View>
              </View>

              {/* Ocupación */}
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="briefcase-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Ocupación</Text>
                  <Text style={styles.infoValue}>{userData.ocupacion}</Text>
                </View>
              </View>

              {/* Apellidos */}
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="id-card-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Apellidos</Text>
                  <Text style={styles.infoValue}>
                    {userData.apellidoPaterno} {userData.apellidoMaterno}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8E6C9',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#66BB6A',
    paddingVertical: 20,
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
  headerContent: {
    flex: 1,
    gap: 8,
  },
  breadcrumb: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    padding: 24,
    gap: 24,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageSection: {
    alignItems: 'center',
    gap: 12,
  },
  imageSectionWide: {
    width: 280,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#A5D6A7',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E7D32',
    marginTop: 12,
    textAlign: 'center',
  },
  userRole: {
    fontSize: 14,
    fontWeight: '500',
    color: '#66BB6A',
    textAlign: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
    marginTop: 16,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  infoSection: {
    flex: 1,
  },
  infoSectionWide: {
    marginLeft: 24,
  },
  infoContainer: {
    backgroundColor: '#A5D6A7',
    borderRadius: 20,
    padding: 24,
    gap: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(46, 125, 50, 0.1)',
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextContainer: {
    flex: 1,
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E7D32',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});