
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    generateWhatsAppMessage 
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
            <ShoppingBag className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold font-display gradient-text mb-4">
            Seu carrinho está vazio
          </h2>
          <p className="text-gray-600 mb-8">
            Que tal dar uma olhada no nosso delicioso cardápio?
          </p>
          <Button 
            className="gradient-bg text-white hover:opacity-90 font-semibold px-8 py-3 text-lg shadow-glow"
            onClick={() => window.location.href = '/cardapio'}
          >
            Ver Cardápio
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <section className="py-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 burger-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-4">
              Seu Carrinho
            </h1>
            <p className="text-xl opacity-90">
              Revise seus itens e finalize seu pedido
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Itens do Pedido ({items.length})
              </h2>
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-500 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Carrinho
              </Button>
            </div>

            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.cartId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <img  
                      className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                      alt={item.name}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Observations */}
                      {item.observations && item.observations.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm text-orange-600 font-medium">
                            Observações: {item.observations.join(', ')}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-bold text-orange-500">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatPrice(item.price)} cada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Resumo do Pedido
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa de entrega</span>
                  <span className="font-semibold text-green-600">Grátis</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-500">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-lg rounded-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Finalizar no WhatsApp
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Ao finalizar, você será redirecionado para o WhatsApp
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span>✓ Entrega grátis</span>
                    <span>✓ Pagamento na entrega</span>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Informações de Entrega
                </h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Tempo estimado: 30-45 minutos</li>
                  <li>• Entrega grátis para pedidos acima de R$ 25</li>
                  <li>• Pagamento: Dinheiro, cartão ou PIX</li>
                  <li>• Rastreamento via WhatsApp</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Promotional Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 gradient-bg rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 burger-pattern opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-display mb-4">
              🎉 Promoção Especial! 🎉
            </h3>
            <p className="text-lg mb-4">
              Adicione mais R$ {formatPrice(Math.max(0, 50 - getTotalPrice()))} e ganhe uma batata frita grátis!
            </p>
            <Button
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-6 py-2"
              onClick={() => window.location.href = '/cardapio'}
            >
              Adicionar Mais Itens
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
