
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { menuData } from '@/data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', count: Object.values(menuData).flat().length },
    { id: 'burgers', name: 'Hambúrgueres', count: menuData.burgers.length },
    { id: 'combos', name: 'Combos', count: menuData.combos.length },
    { id: 'drinks', name: 'Bebidas', count: menuData.drinks.length },
    { id: 'desserts', name: 'Sobremesas', count: menuData.desserts.length },
    { id: 'sides', name: 'Acompanhamentos', count: menuData.sides.length }
  ];

  const filteredProducts = useMemo(() => {
    let products = [];
    
    if (activeCategory === 'all') {
      products = Object.values(menuData).flat();
    } else {
      products = menuData[activeCategory] || [];
    }

    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients?.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    return products;
  }, [activeCategory, searchQuery]);

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
              Nosso Cardápio
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Descubra sabores únicos e ingredientes frescos em cada mordida
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome, descrição ou ingredientes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white shadow-sm"
              />
            </div>

            {/* Results Count */}
            <div className="text-gray-600">
              {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'gradient-bg text-white shadow-glow'
                    : 'hover:bg-orange-50 hover:border-orange-300'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
              <Search className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Tente ajustar sua busca ou escolher uma categoria diferente
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="gradient-bg text-white hover:opacity-90"
            >
              Limpar Filtros
            </Button>
          </motion.div>
        )}

        {/* Promotional Banner */}
        {activeCategory === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 gradient-bg rounded-2xl p-8 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 burger-pattern opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-display mb-4">
                🔥 Oferta Especial! 🔥
              </h3>
              <p className="text-xl mb-6">
                Peça 2 hambúrgueres e ganhe 20% de desconto!
              </p>
              <p className="text-sm opacity-90">
                *Válido apenas para pedidos via WhatsApp. Não cumulativo com outras promoções.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;
