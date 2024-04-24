class Order {
  constructor(orderId, items, totalPrice, timestamp) {
    this.orderId = orderId;
    this.items = items;
    this.totalPrice = totalPrice;
    this.timestamp = timestamp;
  }
}

module.exports = Order;
