const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// street number apartment
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery['deliveryPerson']
  const name = order['name']
  const telefone = order['phoneNumber']
  const street = order.address['street']
  const number = order.address['number']
  const apartment = order.address.apartment
  
  console.log(`Ola ${deliveryPerson}, a entrega para: ${name}, Telefone: ${telefone} R:${street}, Nº ${number}, AP: ${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = "Luiz Silva";
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const novoTotal =  order.payment.total = 50


  console.log(`Olá ${newPerson}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${novoTotal},00`);
}

orderModifier(order);