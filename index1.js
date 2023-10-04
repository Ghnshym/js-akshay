// program to make this flow in promise chaning. 
// create cart 
// createOrder
// Generate orderId
// proceedToPayment
// showOrderSummary
// Handle Error 

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function ({ message, amount }) {
    console.log(message, 'of amount:', amount);
    return showOrderSummary(message, amount);
  })
  .then(function ({ message, amount }) {
    console.log('Your wallet has been debited by:', amount);
  })
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(cart) {
  const product = new Promise(function (resolve, reject) {
    if (!cartValidate(cart)) {
      const error = new Error("Cart validation failed");
      reject(error);
    }

    const orderId = "123456";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return product;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve({ message: `payment successful for order id : ${orderId}`, amount: 2500 });
  });
}

function showOrderSummary(message, amount) {
  return new Promise(function (resolve, reject) {
    if (amount >= 2000) {
      resolve({ message: `You have ordered items that cost RS.${amount}`, amount });
    } else {
      reject(new Error("Please buy more products that cost >= 2000"));
    }
  });
}

function cartValidate(cart) {
  return true;
}
