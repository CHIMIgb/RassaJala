import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cartProducts } from '../data/products';

interface CartProps {
  visible: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ visible, onClose }) => {
  const subtotal = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity 
          style={styles.backdrop} 
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View style={styles.cartContainer}>
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
            <View style={styles.cartHeader}>
              <Text style={styles.cartTitle}>Detalles de la orden</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Products List */}
            <ScrollView style={styles.productsList} showsVerticalScrollIndicator={false}>
              {cartProducts.map((product, index) => (
                <View key={index} style={styles.cartItem}>
                  <Image source={{ uri: product.image }} style={styles.cartItemImage} />
                  
                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemName}>{product.name}</Text>
                    <Text style={styles.cartItemQuantity}>x{product.quantity}</Text>
                  </View>

                  <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Ionicons name="remove" size={16} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Ionicons name="add" size={16} color="#fff" />
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
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total</Text>
                <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
              </View>

              <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar orden</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  cartContainer: {
    backgroundColor: '#E8E8E8',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: '90%',
    padding: 20,
    gap: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
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
    borderRadius: 32,
    padding: 24,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsList: {
    flex: 1,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 24,
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  cartItemImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  cartItemQuantity: {
    fontSize: 12,
    color: '#999',
  },
  quantityControls: {
    flexDirection: 'column',
    gap: 8,
  },
  quantityButton: {
    width: 28,
    height: 28,
    backgroundColor: '#00D863',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  summary: {
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#999',
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
    marginTop: 8,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});