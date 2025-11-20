import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const categories = [
  'Hamburguesas',
  'Pizza',
  'Tacos',
  'Pollos',
  'Enzaladas',
  'Pastas',
  'Lonches',
  'Refrescos',
  'Combo',
];

export const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton, 
            selectedCategory === 'Todas' && styles.categoryButtonActive
          ]}
          onPress={() => {
            setSelectedCategory('Todas');
            console.log('Categoría seleccionada: Todas');
          }}
        >
          <Text style={[
            styles.categoryText, 
            selectedCategory === 'Todas' && styles.categoryTextActive
          ]}>
            Todas
          </Text>
        </TouchableOpacity>

        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => {
              setSelectedCategory(category);
              console.log(`Categoría seleccionada: ${category}`);
            }}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.categoryTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    padding: 4,
  },
  scrollContent: {
    gap: 4,
    paddingHorizontal: 4,
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  categoryButtonActive: {
    backgroundColor: '#00D863',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  categoryTextActive: {
    color: '#000',
  },
});