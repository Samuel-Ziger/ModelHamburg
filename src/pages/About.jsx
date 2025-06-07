
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "10.000+", label: "Clientes Satisfeitos" },
    { icon: Award, number: "5", label: "Anos de Experiência" },
    { icon: Heart, number: "100%", label: "Ingredientes Frescos" },
    { icon: Clock, number: "30min", label: "Tempo Médio de Entrega" }
  ];

  const team = [
    {
      name: "Carlos Silva",
      role: "Chef Principal",
      image: "Professional chef in kitchen preparing gourmet burgers",
      description: "15 anos de experiência em gastronomia"
    },
    {
      name: "Ana Santos",
      role: "Gerente Geral",
      image: "Restaurant manager smiling in modern burger restaurant",
      description: "Especialista em atendimento ao cliente"
    },
    {
      name: "João Oliveira",
      role: "Sous Chef",
      image: "Young sous chef preparing fresh ingredients",
      description: "Especialista em carnes e grelhados"
    }
  ];

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
              Nossa História
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Conheça a paixão por trás dos melhores hambúrgueres da cidade
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-display gradient-text">
              Uma Paixão que Começou em Casa
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A Burger House nasceu em 2019 do sonho de Carlos Silva, um chef apaixonado 
                por criar hambúrgueres únicos e saborosos. Tudo começou na cozinha de casa, 
                onde Carlos experimentava receitas e combinações de ingredientes para amigos e família.
              </p>
              <p>
                O que era apenas um hobby se transformou em uma paixão quando percebemos 
                que podíamos oferecer algo especial: hambúrgueres artesanais feitos com 
                ingredientes frescos e de qualidade, preparados com amor e dedicação.
              </p>
              <p>
                Hoje, somos orgulhosos de servir mais de 10.000 clientes satisfeitos, 
                mantendo sempre nosso compromisso com a qualidade e o sabor que nos 
                tornaram referência na cidade.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img  
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              alt="História da Burger House"
             src="https://images.unsplash.com/photo-1687580712324-ba65e882514a" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg rounded-2xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-2xl font-display">2019</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover-lift"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display gradient-text mb-4">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proporcionar experiências gastronômicas únicas através de hambúrgueres 
              artesanais de alta qualidade, sempre priorizando ingredientes frescos 
              e um atendimento excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade",
                description: "Selecionamos cuidadosamente cada ingrediente para garantir o melhor sabor",
                icon: "🥩"
              },
              {
                title: "Inovação",
                description: "Criamos constantemente novos sabores e combinações únicas",
                icon: "💡"
              },
              {
                title: "Sustentabilidade",
                description: "Trabalhamos com fornecedores locais e práticas sustentáveis",
                icon: "🌱"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-display gradient-text mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça as pessoas apaixonadas que fazem a magia acontecer todos os dias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <img  
                className="w-full h-64 object-cover"
                alt={`${member.name} - ${member.role}`}
               src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kitchen Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img  
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              alt="Cozinha da Burger House"
             src="https://images.unsplash.com/photo-1703575571101-e15c42139544" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-display gradient-text">
              Nossa Cozinha
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nossa cozinha é o coração da Burger House. Equipada com os melhores 
                equipamentos e mantida com os mais altos padrões de higiene e qualidade.
              </p>
              <p>
                Cada hambúrguer é preparado na hora, com carnes frescas grelhadas no 
                ponto perfeito e ingredientes selecionados diariamente. Nossa equipe 
                segue rigorosos protocolos de qualidade para garantir que cada pedido 
                saia perfeito.
              </p>
              <p>
                Acreditamos que a transparência é fundamental, por isso nossa cozinha 
                está sempre aberta para que nossos clientes possam ver o cuidado e 
                dedicação que colocamos em cada prato.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
