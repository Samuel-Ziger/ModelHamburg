
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
        JSON.stringify(item.observations) === JSON.stringify(action.payload.observations)
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            JSON.stringify(item.observations) === JSON.stringify(action.payload.observations)
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, cartId: Date.now() }]
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload || []
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const savedCart = localStorage.getItem('burger-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('burger-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    toast({
      title: "Item adicionado!",
      description: `${item.name} foi adicionado ao carrinho.`,
      duration: 2000,
    });
  };

  const removeItem = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
    toast({
      title: "Item removido",
      description: "Item removido do carrinho.",
      duration: 2000,
    });
  };

  const updateQuantity = (cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos.",
      duration: 2000,
    });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateWhatsAppMessage = () => {
    const items = state.items.map(item => {
      const observations = item.observations && item.observations.length > 0 
        ? ` (${item.observations.join(', ')})` 
        : '';
      return `• ${item.quantity}x ${item.name}${observations} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    }).join('\n');

    const total = getTotalPrice().toFixed(2);
    
    return `🍔 *PEDIDO BURGER HOUSE* 🍔\n\n${items}\n\n💰 *Total: R$ ${total}*\n\nObrigado por escolher a Burger House! 🔥`;
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    generateWhatsAppMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
};
