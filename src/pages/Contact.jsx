
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Ligue para fazer seu pedido"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Delícias, 123",
      description: "Centro, São Paulo - SP"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Seg - Dom: 18h às 23h",
      description: "Delivery e balcão"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@burgerhouse.com",
      description: "Dúvidas e sugestões"
    }
  ];

  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de fazer um pedido ou tirar uma dúvida.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              Fale Conosco
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Estamos aqui para atender você da melhor forma possível
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-orange-500 font-medium mb-1">{item.info}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-display gradient-text mb-4">
                Peça pelo WhatsApp
              </h2>
              <p className="text-gray-600 mb-6">
                A forma mais rápida e prática de fazer seu pedido. 
                Atendimento personalizado e entrega garantida!
              </p>
              <Button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Como fazer seu pedido:
              </h3>
              <div className="space-y-3">
                {[
                  "Clique no botão acima para abrir o WhatsApp",
                  "Escolha seus produtos do cardápio",
                  "Informe seu endereço de entrega",
                  "Confirme seu pedido e forma de pagamento",
                  "Aguarde a confirmação e tempo de entrega"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-display gradient-text mb-6">
                Nossa Localização
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Rua das Delícias, 123</p>
                    <p className="text-gray-600">Centro, São Paulo - SP</p>
                    <p className="text-gray-600">CEP: 01234-567</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa interativo em breve</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-display gradient-text mb-6">
                Horário de Funcionamento
              </h2>
              <div className="space-y-3">
                {[
                  { day: "Segunda-feira", hours: "18:00 - 23:00" },
                  { day: "Terça-feira", hours: "18:00 - 23:00" },
                  { day: "Quarta-feira", hours: "18:00 - 23:00" },
                  { day: "Quinta-feira", hours: "18:00 - 23:00" },
                  { day: "Sexta-feira", hours: "18:00 - 00:00" },
                  { day: "Sábado", hours: "18:00 - 00:00" },
                  { day: "Domingo", hours: "18:00 - 23:00" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-medium text-orange-500">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <p className="text-sm text-orange-700">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Delivery disponível em todos os horários de funcionamento
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold font-display gradient-text text-center mb-8">
            Perguntas Frequentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Qual o tempo de entrega?",
                answer: "Nosso tempo médio de entrega é de 30 minutos, podendo variar conforme a distância e movimento do dia."
              },
              {
                question: "Vocês entregam em toda a cidade?",
                answer: "Entregamos em um raio de 10km do nosso estabelecimento. Consulte se atendemos sua região pelo WhatsApp."
              },
              {
                question: "Quais formas de pagamento aceitas?",
                answer: "Aceitamos dinheiro, cartão de débito/crédito e PIX. Pagamento na entrega ou antecipado pelo WhatsApp."
              },
              {
                question: "Posso personalizar meu hambúrguer?",
                answer: "Sim! Você pode adicionar ou remover ingredientes. Consulte as opções disponíveis no momento do pedido."
              },
              {
                question: "Vocês têm opções vegetarianas?",
                answer: "Sim, temos hambúrgueres vegetarianos e veganos deliciosos. Confira nosso cardápio completo."
              },
              {
                question: "Como acompanhar meu pedido?",
                answer: "Após confirmar seu pedido pelo WhatsApp, você receberá atualizações sobre o status da preparação e entrega."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
