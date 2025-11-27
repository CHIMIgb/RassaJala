import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, image, discount, stock, price, description } = product;

  const handleAddToCart = () => {
    if (stock > 0) {
      Alert.alert(
        'Producto agregado',
        `${name} ha sido agregado al carrito`,
        [{ text: 'OK' }]
      );
      console.log(`Agregado al carrito: ${name} - $${price}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Header */}
      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.image} />
        
        <View style={styles.info}>
          <View style={styles.badges}>
            {discount > 0 && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>Descuento {discount}%</Text>
              </View>
            )}
            {stock <= 0 && (
              <View style={styles.outOfStockBadge}>
                <Text style={styles.outOfStockText}>Sin existencias</Text>
              </View>
            )}
          </View>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.price}>${price}</Text>
        
        <TouchableOpacity
          style={[
            styles.addButton,
            stock <= 0 && styles.addButtonDisabled,
          ]}
          disabled={stock <= 0}
          onPress={handleAddToCart}
        >
          <Ionicons 
            name="add" 
            size={24} 
            color={stock <= 0 ? '#999' : '#000'} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 20,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  info: {
    flex: 1,
    gap: 8,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  discountBadge: {
    backgroundColor: 'rgba(0, 216, 99, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: '#00D863',
    fontSize: 11,
    fontWeight: '700',
  },
  outOfStockBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  outOfStockText: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '700',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
  description: {
    fontSize: 13,
    color: '#999',
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  addButton: {
    width: 56,
    height: 56,
    backgroundColor: '#00D863',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#00D863',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonDisabled: {
    backgroundColor: '#E8E8E8',
    shadowOpacity: 0,
  },
});