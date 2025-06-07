
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedObservations, setSelectedObservations] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();

  const observations = [
    'Sem cebola',
    'Sem tomate',
    'Sem alface',
    'Bem passado',
    'Mal passado',
    'Sem maionese',
    'Extra queijo',
    'Extra bacon'
  ];

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
      observations: selectedObservations
    });
    setQuantity(1);
    setSelectedObservations([]);
    setShowDetails(false);
  };

  const toggleObservation = (observation) => {
    setSelectedObservations(prev =>
      prev.includes(observation)
        ? prev.filter(obs => obs !== observation)
        : [...prev, observation]
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative">
          <img  
            className="w-full h-48 object-cover"
            alt={product.name}
           src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
          
          {product.isPromo && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Promoção
            </div>
          )}
          
          {product.isNew && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Novo
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </h3>
            {product.rating && (
              <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {product.prepTime && (
            <div className="flex items-center space-x-1 mb-4 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{product.prepTime} min</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-orange-500">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            <Button
              size="sm"
              className="gradient-bg text-white hover:opacity-90 shadow-glow"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
            >
              <Plus className="w-4 h-4 mr-1" />
              Adicionar
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Product Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img  
                className="w-full h-64 object-cover"
                alt={product.name}
               src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                {product.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{product.rating}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {product.ingredients && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Ingredientes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Observations */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Observações (opcional):</h3>
                <div className="grid grid-cols-2 gap-2">
                  {observations.map((observation) => (
                    <button
                      key={observation}
                      onClick={() => toggleObservation(observation)}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedObservations.includes(observation)
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {observation}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Quantidade:</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price and Add Button */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-2xl font-bold text-orange-500">
                    {formatPrice(product.price * quantity)}
                  </span>
                  {quantity > 1 && (
                    <p className="text-sm text-gray-500">
                      {formatPrice(product.price)} cada
                    </p>
                  )}
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="gradient-bg text-white hover:opacity-90 font-semibold px-6 py-3 shadow-glow"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProductCard;
