
export const menuData = {
  burgers: [
    {
      id: 'burger-1',
      name: 'Burger Clássico',
      description: 'Hambúrguer artesanal 150g, queijo, alface, tomate, cebola e molho especial',
      price: 16.90,
      image: 'Classic beef burger with lettuce, tomato, cheese and special sauce',
      category: 'burgers',
      ingredients: ['Carne 150g', 'Queijo', 'Alface', 'Tomate', 'Cebola', 'Molho especial'],
      prepTime: 15,
      rating: 4.8,
      isPromo: false
    },
    {
      id: 'burger-2',
      name: 'Burger Bacon',
      description: 'Hambúrguer artesanal 150g, bacon crocante, queijo, alface e molho barbecue',
      price: 19.90,
      image: 'Gourmet bacon burger with crispy bacon, cheese and barbecue sauce',
      category: 'burgers',
      ingredients: ['Carne 150g', 'Bacon', 'Queijo', 'Alface', 'Molho barbecue'],
      prepTime: 18,
      rating: 4.9,
      isPromo: true,
      originalPrice: 22.90
    },
    {
      id: 'burger-3',
      name: 'Burger Duplo',
      description: 'Dois hambúrgueres artesanais 150g cada, queijo duplo, alface, tomate e molho especial',
      price: 24.90,
      image: 'Double beef burger with double cheese and fresh vegetables',
      category: 'burgers',
      ingredients: ['2x Carne 150g', 'Queijo duplo', 'Alface', 'Tomate', 'Molho especial'],
      prepTime: 20,
      rating: 4.7
    },
    {
      id: 'burger-4',
      name: 'Burger Vegetariano',
      description: 'Hambúrguer de grão-de-bico e quinoa, queijo, alface, tomate, cebola roxa e molho tahine',
      price: 17.90,
      image: 'Vegetarian burger with chickpea patty, vegetables and tahini sauce',
      category: 'burgers',
      ingredients: ['Hambúrguer vegetal', 'Queijo', 'Alface', 'Tomate', 'Cebola roxa', 'Molho tahine'],
      prepTime: 15,
      rating: 4.6,
      isNew: true
    },
    {
      id: 'burger-5',
      name: 'Burger Gourmet',
      description: 'Hambúrguer artesanal 180g, queijo brie, rúcula, tomate seco, cebola caramelizada e molho pesto',
      price: 26.90,
      image: 'Gourmet burger with brie cheese, arugula and caramelized onions',
      category: 'burgers',
      ingredients: ['Carne 180g', 'Queijo brie', 'Rúcula', 'Tomate seco', 'Cebola caramelizada', 'Molho pesto'],
      prepTime: 22,
      rating: 4.9
    },
    {
      id: 'burger-6',
      name: 'Burger Picante',
      description: 'Hambúrguer artesanal 150g, queijo pepper jack, jalapeños, alface e molho chipotle',
      price: 18.90,
      image: 'Spicy burger with pepper jack cheese, jalapeños and chipotle sauce',
      category: 'burgers',
      ingredients: ['Carne 150g', 'Queijo pepper jack', 'Jalapeños', 'Alface', 'Molho chipotle'],
      prepTime: 16,
      rating: 4.5
    }
  ],

  combos: [
    {
      id: 'combo-1',
      name: 'Combo Clássico',
      description: 'Burger Clássico + Batata Frita + Refrigerante 350ml',
      price: 24.90,
      image: 'Classic burger combo with fries and soft drink',
      category: 'combos',
      ingredients: ['Burger Clássico', 'Batata Frita', 'Refrigerante 350ml'],
      prepTime: 18,
      rating: 4.8,
      isPromo: true,
      originalPrice: 28.90
    },
    {
      id: 'combo-2',
      name: 'Combo Bacon',
      description: 'Burger Bacon + Batata Frita + Refrigerante 350ml',
      price: 27.90,
      image: 'Bacon burger combo with crispy fries and drink',
      category: 'combos',
      ingredients: ['Burger Bacon', 'Batata Frita', 'Refrigerante 350ml'],
      prepTime: 20,
      rating: 4.9
    },
    {
      id: 'combo-3',
      name: 'Combo Duplo',
      description: 'Burger Duplo + Batata Frita Grande + Refrigerante 500ml',
      price: 32.90,
      image: 'Double burger combo with large fries and large drink',
      category: 'combos',
      ingredients: ['Burger Duplo', 'Batata Frita Grande', 'Refrigerante 500ml'],
      prepTime: 25,
      rating: 4.7
    },
    {
      id: 'combo-4',
      name: 'Combo Família',
      description: '4 Burgers Clássicos + 4 Batatas Fritas + 4 Refrigerantes 350ml',
      price: 79.90,
      image: 'Family combo with four burgers, fries and drinks',
      category: 'combos',
      ingredients: ['4x Burger Clássico', '4x Batata Frita', '4x Refrigerante 350ml'],
      prepTime: 30,
      rating: 4.8,
      isPromo: true,
      originalPrice: 89.90
    }
  ],

  drinks: [
    {
      id: 'drink-1',
      name: 'Coca-Cola 350ml',
      description: 'Refrigerante Coca-Cola gelado',
      price: 4.90,
      image: 'Cold Coca-Cola bottle with ice',
      category: 'drinks',
      prepTime: 2,
      rating: 4.5
    },
    {
      id: 'drink-2',
      name: 'Suco Natural de Laranja',
      description: 'Suco de laranja natural 400ml',
      price: 6.90,
      image: 'Fresh orange juice in glass with orange slices',
      category: 'drinks',
      prepTime: 5,
      rating: 4.7
    },
    {
      id: 'drink-3',
      name: 'Milkshake de Chocolate',
      description: 'Milkshake cremoso de chocolate com chantilly',
      price: 12.90,
      image: 'Chocolate milkshake with whipped cream and chocolate chips',
      category: 'drinks',
      prepTime: 8,
      rating: 4.9,
      isNew: true
    },
    {
      id: 'drink-4',
      name: 'Água Mineral 500ml',
      description: 'Água mineral sem gás gelada',
      price: 3.50,
      image: 'Cold mineral water bottle',
      category: 'drinks',
      prepTime: 1,
      rating: 4.3
    },
    {
      id: 'drink-5',
      name: 'Suco de Açaí 400ml',
      description: 'Suco natural de açaí com banana',
      price: 8.90,
      image: 'Purple açaí juice with banana in glass',
      category: 'drinks',
      prepTime: 6,
      rating: 4.6
    }
  ],

  desserts: [
    {
      id: 'dessert-1',
      name: 'Brownie com Sorvete',
      description: 'Brownie de chocolate quente com sorvete de baunilha',
      price: 9.90,
      image: 'Warm chocolate brownie with vanilla ice cream scoop',
      category: 'desserts',
      prepTime: 10,
      rating: 4.8
    },
    {
      id: 'dessert-2',
      name: 'Petit Gateau',
      description: 'Petit gateau de chocolate com sorvete de creme',
      price: 12.90,
      image: 'Chocolate petit gateau with cream ice cream',
      category: 'desserts',
      prepTime: 12,
      rating: 4.9,
      isNew: true
    },
    {
      id: 'dessert-3',
      name: 'Torta de Limão',
      description: 'Fatia de torta de limão com merengue',
      price: 7.90,
      image: 'Lemon pie slice with meringue topping',
      category: 'desserts',
      prepTime: 5,
      rating: 4.6
    },
    {
      id: 'dessert-4',
      name: 'Sorvete 2 Bolas',
      description: 'Duas bolas de sorvete (sabores: chocolate, baunilha, morango)',
      price: 6.90,
      image: 'Two scoops of ice cream in different flavors',
      category: 'desserts',
      prepTime: 3,
      rating: 4.5
    }
  ],

  sides: [
    {
      id: 'side-1',
      name: 'Batata Frita',
      description: 'Porção individual de batata frita crocante',
      price: 7.90,
      image: 'Crispy golden french fries in basket',
      category: 'sides',
      prepTime: 8,
      rating: 4.7
    },
    {
      id: 'side-2',
      name: 'Batata Frita Grande',
      description: 'Porção grande de batata frita crocante',
      price: 11.90,
      image: 'Large portion of crispy golden french fries',
      category: 'sides',
      prepTime: 10,
      rating: 4.8
    },
    {
      id: 'side-3',
      name: 'Onion Rings',
      description: 'Anéis de cebola empanados e fritos',
      price: 9.90,
      image: 'Golden crispy onion rings with dipping sauce',
      category: 'sides',
      prepTime: 12,
      rating: 4.6
    },
    {
      id: 'side-4',
      name: 'Nuggets de Frango',
      description: '8 unidades de nuggets de frango crocantes',
      price: 12.90,
      image: 'Crispy chicken nuggets with dipping sauces',
      category: 'sides',
      prepTime: 10,
      rating: 4.5
    },
    {
      id: 'side-5',
      name: 'Salada Caesar',
      description: 'Alface americana, croutons, parmesão e molho caesar',
      price: 8.90,
      image: 'Fresh Caesar salad with croutons and parmesan',
      category: 'sides',
      prepTime: 5,
      rating: 4.4
    }
  ]
};
