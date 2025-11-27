import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cartProducts } from '../data/products';

export const CartSidebar: React.FC = () => {
  const subtotal = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#00D863" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar producto"
          placeholderTextColor="#999"
        />
      </View>

      {/* Cart Content */}
      <View style={styles.cartContent}>
        {/* Header */}
        <Text style={styles.cartTitle}>Detalles de la orden</Text>

        {/* Products List - Con altura fija y scroll */}
        <ScrollView 
          style={styles.productsList} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsListContent}
        >
          {cartProducts.map((product, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={{ uri: product.image }} style={styles.cartItemImage} />
              
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemName} numberOfLines={1}>
                  {product.name}
                </Text>
                <Text style={styles.cartItemQuantity}>x{product.quantity}</Text>
              </View>

              <View style={styles.quantityControls}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="remove" size={14} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="add" size={14} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={styles.cartItemPrice}>
                ${(product.price * product.quantity).toFixed(2)}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>IVA (16%)</Text>
            <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.summaryRowTotal]}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar orden</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  cartContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 20,
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  productsList: {
    maxHeight: 300,
  },
  productsListContent: {
    gap: 12,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 20,
    padding: 12,
    gap: 10,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  cartItemInfo: {
    flex: 1,
    gap: 4,
  },
  cartItemName: {
    fontSize: 14,
    fontWeight: '700',
  },
  cartItemQuantity: {
    fontSize: 12,
    color: '#999',
  },
  quantityControls: {
    gap: 6,
  },
  quantityButton: {
    width: 26,
    height: 26,
    backgroundColor: '#00D863',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemPrice: {
    fontSize: 15,
    fontWeight: '700',
    minWidth: 70,
    textAlign: 'right',
  },
  summary: {
    gap: 12,
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryRowTotal: {
    marginTop: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  confirmButton: {
    backgroundColor: '#00D863',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});