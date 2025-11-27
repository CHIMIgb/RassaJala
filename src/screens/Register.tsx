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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RegisterProps {
  onClose: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    ocupacion: '',
    usuario: '',
    correo: '',
    telefono: '',
    contrasena: '',
    tipoUsuario: 'Administrador',
    permisos: 'Acceso completo',
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSubmit = () => {
    // Validaciones básicas
    if (!formData.nombre || !formData.apellidoPaterno || !formData.correo || !formData.contrasena) {
      Alert.alert('Error', 'Por favor completa los campos obligatorios');
      return;
    }

    // Aquí iría la lógica para guardar el usuario
    console.log('Datos del formulario:', formData);
    Alert.alert('Éxito', 'Usuario registrado correctamente', [
      { text: 'OK', onPress: onClose }
    ]);
  };

  const handleImageUpload = () => {
    Alert.alert('Subir Imagen', 'Funcionalidad de carga de imagen');
    // Aquí iría la lógica para seleccionar imagen
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
          <Text style={styles.headerTitle}>Registrar Usuario</Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Profile Image Section */}
          <View style={styles.imageSection}>
            <View style={styles.imageContainer}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
              ) : (
                <View style={styles.placeholderImage}>
                  <Ionicons name="person" size={60} color="#ccc" />
                </View>
              )}
            </View>
          </View>

          {/* Form Fields - Row 1 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Nombre: *</Text>
              <TextInput
                style={styles.input}
                placeholder="Laura"
                value={formData.nombre}
                onChangeText={(text) => setFormData({...formData, nombre: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Apellido Paterno: *</Text>
              <TextInput
                style={styles.input}
                placeholder="Hernandez"
                value={formData.apellidoPaterno}
                onChangeText={(text) => setFormData({...formData, apellidoPaterno: text})}
              />
            </View>
          </View>

          {/* Form Fields - Row 2 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Apellido Materno:</Text>
              <TextInput
                style={styles.input}
                placeholder="Edad"
                value={formData.apellidoMaterno}
                onChangeText={(text) => setFormData({...formData, apellidoMaterno: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Contraseña:</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                secureTextEntry
                value={formData.contrasena}
                onChangeText={(text) => setFormData({...formData, contrasena: text})}
              />
            </View>
          </View>

          {/* Form Fields - Row 3 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Ocupación:</Text>
              <TextInput
                style={styles.input}
                placeholder="Dentista"
                value={formData.ocupacion}
                onChangeText={(text) => setFormData({...formData, ocupacion: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Usuario:</Text>
              <TextInput
                style={styles.input}
                placeholder="laurahernandez4"
                value={formData.usuario}
                onChangeText={(text) => setFormData({...formData, usuario: text})}
              />
            </View>
          </View>

          {/* Form Fields - Row 4 */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>Correo:</Text>
            <TextInput
              style={styles.input}
              placeholder="laurahxs09@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.correo}
              onChangeText={(text) => setFormData({...formData, correo: text})}
            />
          </View>

          {/* Form Fields - Row 5 */}
          <View style={styles.row}>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Teléfono:</Text>
              <TextInput
                style={styles.input}
                placeholder="9999999999"
                keyboardType="phone-pad"
                value={formData.telefono}
                onChangeText={(text) => setFormData({...formData, telefono: text})}
              />
            </View>
            <View style={styles.fieldHalf}>
              <Text style={styles.label}>Tipo de Usuario:</Text>
              <View style={styles.selectContainer}>
                <Text style={styles.selectText}>{formData.tipoUsuario}</Text>
                <Ionicons name="chevron-down" size={16} color="#666" />
              </View>
            </View>
          </View>

          {/* Form Fields - Row 6 */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>Permisos:</Text>
            <View style={styles.selectContainer}>
              <Text style={styles.selectText}>{formData.permisos}</Text>
              <Ionicons name="chevron-down" size={16} color="#666" />
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.uploadImageButton}
              onPress={handleImageUpload}
            >
              <Text style={styles.uploadImageButtonText}>Subir Imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSubmit}
            >
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
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
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
  selectContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectText: {
    fontSize: 14,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  uploadImageButton: {
    flex: 1,
    backgroundColor: '#4FC3F7',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  uploadImageButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});