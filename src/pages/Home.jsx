
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Clock, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { menuData } from '@/data/menuData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Combo da Semana",
      subtitle: "Burger + Batata + Refrigerante",
      price: "R$ 24,90",
      image: "Delicious burger combo with fries and drink",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Burger Artesanal",
      subtitle: "Carne 180g + Queijo Especial",
      price: "R$ 18,90",
      image: "Gourmet artisanal burger with special cheese",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      title: "Promoção Família",
      subtitle: "4 Burgers + 4 Batatas + 4 Bebidas",
      price: "R$ 79,90",
      image: "Family meal with multiple burgers and sides",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const featuredProducts = menuData.burgers.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 burger-pattern"></div>
        
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              x: index === currentSlide ? 0 : 100
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} flex items-center justify-center`}
          >
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white space-y-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold font-display">
                  {banner.title}
                </h1>
                <p className="text-xl lg:text-2xl opacity-90">
                  {banner.subtitle}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold">{banner.price}</span>
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                    asChild
                  >
                    <Link to="/cardapio">Peça Agora</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <img  
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-float"
                  alt={`Banner ${banner.title}`}
                 src="https://images.unsplash.com/photo-1511744184484-5e7777d2b106" />
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Entrega Rápida", desc: "30 min ou menos" },
              { icon: Award, title: "Qualidade Premium", desc: "Ingredientes selecionados" },
              { icon: Truck, title: "Delivery Grátis", desc: "Pedidos acima de R$ 30" },
              { icon: Star, title: "5 Estrelas", desc: "Avaliação dos clientes" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-4">
              Nossos Destaques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experimente os hambúrgueres mais pedidos pelos nossos clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 font-semibold px-8 py-3 text-lg shadow-glow"
              asChild
            >
              <Link to="/cardapio">Ver Cardápio Completo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 burger-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
              Pronto para uma experiência única?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Faça seu pedido agora e descubra por que somos a hamburgueria favorita da cidade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                asChild
              >
                <Link to="/cardapio">Fazer Pedido</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-3 text-lg"
                asChild
              >
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
