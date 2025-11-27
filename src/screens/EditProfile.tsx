import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EditProfileProps {
  visible: boolean;
  onClose: () => void;
}

/**
 * Componente EditProfile
 * 
 * Vista para editar el perfil del usuario.
 * Estructura idéntica a Register.tsx para garantizar compatibilidad en móvil.
 */
export const EditProfile: React.FC<EditProfileProps> = ({ onClose }) => {
  const [windowWidth] = useState(Dimensions.get('window').width);
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    usuario: 'antonella_dm',
    nombre: 'Antonella',
    apellidoPaterno: 'Domínguez',
    apellidoMaterno: 'Martínez',
    correo: 'antonella.dm@gmail.com',
    contrasena: '',
    confirmarContrasena: '',
  });

  const [profileImage, setProfileImage] = useState(
    'https://img.freepik.com/foto-gratis/retrato-feliz-mujer-romantica-tranquila-caucasica-look-casual-pelo-largo-aretes-collar-sobre-fondo-increible-vista-hermosa-montanas-verdes_343596-951.jpg'
  );

  const isMobile = windowWidth < 768;

  const handleSubmit = () => {
    // Validación de campos obligatorios
    if (!formData.usuario || !formData.nombre || !formData.apellidoPaterno || !formData.correo) {
      Alert.alert('Error', 'Por favor completa los campos obligatorios');
      return;
    }

    // Validación de contraseñas
    if (formData.contrasena && formData.contrasena !== formData.confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    console.log('Datos actualizados:', formData);
    Alert.alert('Éxito', 'Perfil actualizado correctamente', [
      { text: 'OK', onPress: onClose }
    ]);
  };

  const handleImageChange = () => {
    Alert.alert('Cambiar imagen', 'Funcionalidad para seleccionar nueva imagen de perfil');
  };

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
          <Text style={styles.headerTitle}>Editar perfil</Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Profile Image Section */}
          <View style={styles.imageSection}>
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: profileImage }} 
                style={styles.profileImage}
              />
              <TouchableOpacity 
                style={styles.changeImageButton}
                onPress={handleImageChange}
              >
                <Ionicons name="camera" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Usuario */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={formData.usuario}
              onChangeText={(text) => setFormData({...formData, usuario: text})}
            />
          </View>

          {/* Nombre */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={formData.nombre}
              onChangeText={(text) => setFormData({...formData, nombre: text})}
            />
          </View>

          {/* Form Fields - Row 1 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Apellido paterno</Text>
              <TextInput
                style={styles.input}
                placeholder="Apellido paterno"
                value={formData.apellidoPaterno}
                onChangeText={(text) => setFormData({...formData, apellidoPaterno: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Apellido materno</Text>
              <TextInput
                style={styles.input}
                placeholder="Apellido materno"
                value={formData.apellidoMaterno}
                onChangeText={(text) => setFormData({...formData, apellidoMaterno: text})}
              />
            </View>
          </View>

          {/* Correo electrónico */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="correo@ejemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.correo}
              onChangeText={(text) => setFormData({...formData, correo: text})}
            />
          </View>

          {/* Form Fields - Row 2 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Nueva contraseña"
                secureTextEntry
                value={formData.contrasena}
                onChangeText={(text) => setFormData({...formData, contrasena: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Confirmar contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                secureTextEntry
                value={formData.confirmarContrasena}
                onChangeText={(text) => setFormData({...formData, confirmarContrasena: text})}
              />
            </View>
          </View>

          {/* Botón Guardar */}
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSubmit}
          >
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
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
  formContainer: {
    backgroundColor: '#A5D6A7',
    margin: 20,
    borderRadius: 24,
    padding: 24,
    gap: 16,
  },
  imageSection: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  changeImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    backgroundColor: '#00D863',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  fieldHalf: {
    flex: 1,
  },
  fieldFull: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});