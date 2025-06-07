
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, Heart, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedReviews = localStorage.getItem('burger-reviews');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!rating || !feedback.trim() || !name.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos e dê uma nota.",
        variant: "destructive"
      });
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      feedback: feedback.trim(),
      date: new Date().toLocaleDateString('pt-BR')
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('burger-reviews', JSON.stringify(updatedReviews));

    // Reset form
    setRating(0);
    setFeedback('');
    setName('');

    toast({
      title: "Obrigado pelo feedback!",
      description: "Sua avaliação foi enviada com sucesso.",
    });
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(review => review.rating === stars).length,
    percentage: reviews.length > 0 
      ? (reviews.filter(review => review.rating === stars).length / reviews.length) * 100 
      : 0
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="py-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 burger-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-4">
              Sua Opinião Importa
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Conte-nos sobre sua experiência e nos ajude a melhorar sempre
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-display gradient-text mb-2">
                Deixe sua Avaliação
              </h2>
              <p className="text-gray-600">
                Sua experiência nos ajuda a oferecer sempre o melhor
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Avaliação Geral
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  {rating > 0 && (
                    <span className="ml-3 text-sm text-gray-600">
                      {rating === 1 && "Ruim"}
                      {rating === 2 && "Regular"}
                      {rating === 3 && "Bom"}
                      {rating === 4 && "Muito Bom"}
                      {rating === 5 && "Excelente"}
                    </span>
                  )}
                </div>
              </div>

              {/* Feedback Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Comentário
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Conte-nos sobre sua experiência..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-bg text-white hover:opacity-90 font-semibold py-3 text-lg shadow-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Avaliação
              </Button>
            </form>
          </motion.div>

          {/* Reviews Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold font-display gradient-text mb-4">
                Avaliação Geral
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-5xl font-bold text-orange-500">{averageRating}</span>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${
                          star <= Math.round(averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {reviews.length} avaliação{reviews.length !== 1 ? 'ões' : ''}
                  </p>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 w-8">{item.stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-display gradient-text mb-6">
                Avaliações Recentes
              </h3>
              
              {reviews.length > 0 ? (
                <div className="space-y-6 max-h-96 overflow-y-auto scrollbar-hide">
                  {reviews.slice(0, 5).map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-b border-gray-100 pb-4 last:border-b-0"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-800">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {review.feedback}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Seja o primeiro a deixar uma avaliação!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold font-display gradient-text text-center mb-12">
            O que nossos clientes dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                rating: 5,
                comment: "Melhor hambúrguer da cidade! Ingredientes frescos e sabor incrível. Super recomendo!",
                date: "15/12/2024"
              },
              {
                name: "João Santos",
                rating: 5,
                comment: "Atendimento excelente e entrega super rápida. O combo da semana é uma delícia!",
                date: "12/12/2024"
              },
              {
                name: "Ana Costa",
                rating: 4,
                comment: "Hambúrgueres artesanais de qualidade. Preço justo e sabor excepcional. Voltarei sempre!",
                date: "10/12/2024"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;
